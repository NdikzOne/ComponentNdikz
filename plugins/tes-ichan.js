let fetch = require('node-fetch')
let fs = require('fs')
const ytdl = require ("ytdl-core")
let handler = async (m, { conn, usedPrefix, command, text }) => {
let Ytdl = await ytmp4(text)
const webpPath = './tmp/video.webp';
        fs.writeFileSync(webpPath, Ytdl.buffer);
                // let hasil = await convertToUrl(Ytdl.buffer)
              //   console.log(hasil)
                // await conn.sendMessage(m.chat, { video: Ytdl.buffer, caption: wm })
                 conn.sendFile(m.chat, './tmp/video.webp', 'yt.mp4', wm, m)
            }
handler.help = ['dompet [@user]']
handler.tags = ['xp']
handler.owner = true
handler.command = /^(tc)$/i
module.exports = handler

async function ytmp4(url) {
    try {
        const { videoDetails } = await ytdl.getInfo(url, { lang: "id" });

        const stream = ytdl(url, { filter: "audioandvideo", quality: "highest" });
        const chunks = [];

        stream.on("data", (chunk) => {
            chunks.push(chunk);
        });

        await new Promise((resolve, reject) => {
            stream.on("end", resolve);
            stream.on("error", reject);
        });

        const buffer = Buffer.concat(chunks);

        return {
            meta: {
                title: videoDetails.title,
                channel: videoDetails.author.name,
                seconds: videoDetails.lengthSeconds,
                description: videoDetails.description,
                image: videoDetails.thumbnails.slice(-1)[0].url,
            },
            buffer: buffer,
            size: buffer.length,
        };
    } catch (error) {
        throw error;
    }
};
async function convertToUrl(buffer) {
    const fetch = require('node-fetch');
const FormData = require('form-data');
const fs = require('fs');
    try {
        // Mengunduh gambar dari URL
      //  const response = await fetch(imageUrl);
      //  const buffer = await response.buffer();
        // Membuat objek FormData dan menambahkan file ke dalamnya
        const form = new FormData();
        form.append('file', buffer, { filename: 'video.mp4' });

        // Kirim permintaan untuk mengunggah file ke tmpfiles.org
        const uploadResponse = await fetch('https://tmpfiles.org/api/v1/upload', {
            method: 'POST',
            body: form
        });

        // Mendapatkan respons JSON
        const data = await uploadResponse.json();

        // Cek jika respons sukses
        if (uploadResponse.ok) {
          //  console.log(data.data.url)
            // Kembalikan URL file yang diunggah
            const modifiedUrl = data.data.url.replace('org/', 'org/dl/');
            return modifiedUrl;
        } else {
            throw new Error(data.error || 'Failed to upload file');
        }
    } catch (error) {
        console.error('Error:', error);
        // Handle error accordingly
        return null;
    }
}