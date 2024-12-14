    const fetch = require('node-fetch');
const fs = require('fs');
const FormData = require('form-data');
const { MessageType } = require('@adiwajshing/baileys');
const { spawn } = require('child_process');
const WSF = require('wa-sticker-formatter')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  let stiker = false
  let wsf = false
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/webp/.test(mime)) {
      let img = await q.download()
      if (!img) throw `balas stiker dengan perintah ${usedPrefix + command}`
      wsf = new WSF.Sticker(img, {
        pack: global.packname,
        author: global.author,
        crop: false,
      })
    } else if (/image/.test(mime)) {
      let img = await q.download()
      if (!img) throw `balas gambar dengan perintah ${usedPrefix + command}`
      wsf = new WSF.Sticker(img, {
        pack: global.packname,
        author: global.author,
        crop: false,
      })
    } else if (/video/.test(mime)) {
      let gif = await createGifStickerFromVideo(m)
await conn.sendFile(m.chat, gif, null, wm, m);
let path = './sticker.webp'
await fs.unlinkSync(path)
    } else if (args[0]) {
      if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)
      else throw 'URL tidak valid!'
    }
  } catch (e) {
    throw e
  }
  finally {
    if (wsf) {
      await wsf.build()
      const sticBuffer = await wsf.get()
      if (sticBuffer) await conn.sendMessage(m.chat, { sticker: sticBuffer }, {
        quoted: m,
        mimetype: 'image/webp',
        ephemeralExpiration: 86400
      })
    }
    if (stiker) await conn.sendMessage(m.chat, { sticker: stiker }, {
      quoted: m,
      mimetype: 'image/webp',
      ephemeralExpiration: 86400
    })
    // else throw `Gagal${m.isGroup ? ', balas gambarnya!' : ''}`
  }
}
handler.help = ['stiker', 'stiker <url>']
handler.tags = ['sticker']
handler.command = /^s(tic?ker)?(gif)?(wm)?$/i

module.exports = handler
async function createGifStickerFromVideo(m) {
    try {
        let q = m.quoted ? m.quoted : m;
        let videoBuffer = await q.download();
        
        // Simpan video ke file sementara
        const videoPath = './video.mp4';
        fs.writeFileSync(videoPath, videoBuffer);

        // Konversi video menjadi WebP menggunakan ffmpeg
        const webpPath = './sticker.webp';
        await new Promise((resolve, reject) => {
            const ffmpeg = spawn('ffmpeg', [
                '-i', videoPath,      // Input video
                '-vf', 'fps=15',     // Frame rate (fps)
                '-t', '10',           // Durasi GIF (5 detik)
                '-s', '240x240',     // Ukuran GIF
                '-c:v', 'libwebp',   // Format output WebP
                webpPath             // Output WebP
            ]);

            ffmpeg.on('close', (code) => {
                if (code === 0) {
                    resolve();
                } else {
                    reject(new Error(`ffmpeg process exited with code ${code}`));
                }
            });
        });

        // Unggah WebP ke tempat penyimpanan file
        const formData = new FormData();
        formData.append('file', fs.createReadStream(webpPath));

        const uploadResponse = await fetch('https://tmpfiles.org/api/v1/upload', {
            method: 'POST',
            body: formData
        });

        if (!uploadResponse.ok) {
            throw new Error(`Failed to upload WebP to tmpfiles.org: ${uploadResponse.statusText}`);
        }

        const responseData = await uploadResponse.json();
        const webpUrl = responseData.data.url.replace('org/', 'org/dl/');

        return webpUrl;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to create WebP sticker from video URL');
    }
}
const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}