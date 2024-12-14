let handler = async (m, { conn, usedPrefix, command }) => {
await m.reply(wait)
    if (!m.quoted) throw `balas stiker dengan caption *${usedPrefix + command}*`
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) throw `balas stiker dengan caption *${usedPrefix + command}*`
    let media = await m.quoted.download()
    await conn.sendMessage(m.chat, { image: media, caption: wm }, {quoted: m})
   // await conn.sendFile(m.chat, out, 'out.png', '*Nihh Kakk >_<*', m, false)
}
handler.help = ['toimg (reply)']
handler.tags = ['maker']
handler.command = /^toimg$/i
handler.limit = true

module.exports = handler