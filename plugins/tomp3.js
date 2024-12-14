const { toAudio, toVideo, toPTT } = require('../lib/converter')

let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
  if (/mp3?$/i.test(command)) {
    if (!/video|audio/.test(mime)) throw `Balas video/audio dengan perintah *${usedPrefix + command}*`
    let media = await q.download()
    if (!media) throw 'Media tidak dapat diunduh'
    let audio = await toAudio(media, 'mp4')
    if (!audio.data) throw 'Gagal melakukan konversi.'
   // await conn.sendFile(m.chat, audio.data, 'file.mp3', '', m, 0, { mimetype: 'audio/mp4', asDocument: global.db.data.chats[m.chat].useDocument })
    await conn.sendMessage(m.chat, { document: audio.data, mimetype: 'document', fileName: `${wm}.mp3`}, {quoted: m})
  }
    if (/a(udio)?$/i.test(command)) {
    if (!/video|audio/.test(mime)) throw `Balas video/audio dengan perintah *${usedPrefix + command}*`
    let media = await q.download()
    if (!media) throw 'Media tidak dapat diunduh'
    let audio = await toAudio(media, 'mp4')
    if (!audio.data) throw 'Gagal melakukan konversi.'
    await conn.sendFile(m.chat, audio.data, 'file.mp3', '', m, 0, { mimetype: 'audio/mp4', asDocument: global.db.data.chats[m.chat].useDocument })
    //await conn.sendMessage(m.chat, { document: audio.data, mimetype: 'document', fileName: `${wm}.mp3`}, {quoted: m})
  }
  if (/vn|ptt$/i.test(command)) {
    if (!/video|audio/.test(mime)) throw `Balas video/audio dengan perintah *${usedPrefix + command}*`
    let media = await q.download()
    if (!media) throw 'Media tidak dapat diunduh'
    let audio = await toPTT(media, 'mp4')
    if (!audio.data) throw 'Gagal melakukan konversi.'
    await conn.sendFile(m.chat, audio.data, 'file.mp4', '', m, 1, { mimetype: 'audio/mp4' })
  }
    if (/video?$/i.test(command)) {
    if (!/webp/.test(mime)) throw `Balas sticker dengan perintah *${usedPrefix + command}*`
    let media = await q.download()
    if (!media) throw 'Media tidak dapat diunduh'
    let audio = await toVideo(media, 'mp4')
    if (!audio.data) throw 'Gagal melakukan konversi.'
   // await conn.sendFile(m.chat, audio.data, 'file.mp3', '', m, 0, { mimetype: 'audio/mp4', asDocument: global.db.data.chats[m.chat].useDocument })
  //  await conn.sendMessage(m.chat, { document: audio.data, mimetype: 'document', fileName: `${wm}.mp3`}, {quoted: m})
        await conn.sendFile(m.chat, audio.data, 'convert to video', wm, m)
  }
}
handler.help = ['tomp3', 'tovn']
handler.tags = ['audio']
handler.command = /^to(mp3|a(udio)?|vn|ptt|video)$/i

module.exports = handler
