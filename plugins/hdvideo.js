let ffmpeg = require('fluent-ffmpeg')

let handler = async (m, { conn }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let name = await conn.getName(who)
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `Video tidak ditemukan`
  
  m.reply('Sedang memeriksa ukuran video...')
  let videoData = await conn.downloadAndSaveMediaMessage(q, 'video')
  
  // Mendapatkan informasi ukuran video
  let videoInfo = await new Promise(resolve => ffmpeg.ffprobe(videoData, (err, metadata) => resolve(metadata)))
  let width = videoInfo.streams[0].width
  let height = videoInfo.streams[0].height
  
  // Mengecek apakah video sudah HD
  if (width >= 1920 && height >= 1080) {
    m.reply('Video sudah beresolusi HD.')
    return
  }
  
  m.reply('Sedang meningkatkan resolusi video...')
  let output = './tmp/video.mp4'
  
  ffmpeg(videoData)
    .outputOptions('-vf', 'scale=iw*2:ih*2,unsharp,format=yuv444p')
    .outputOptions('-c:a', 'copy')
    .outputOptions('-c:v', 'libx264') // Memperbaiki kode dengan penambahan -c:v untuk menentukan codec video
    .save(output)
    .on('end', () => {
      conn.sendFile(m.chat, output, '', `Video telah ditingkatkan resolusinya menjadi HD.`, m)
    })
    .on('error', (err) => {
      console.error(err)
      m.reply('Terjadi kesalahan saat meningkatkan resolusi video. ' + err)
    })
}

handler.command = handler.help = ["hdvid"]
handler.tags = ["tools"]
handler.limit = true

module.exports = handler