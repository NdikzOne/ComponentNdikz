let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
   if (!text) throw 'Link video nya?'
    m.reply(wait)
    let res = await fetch(`https://aemt.me/download/ytdl?url=${text}`)
    let resa = await res.json()
    let resu = resa.result
    conn.sendMessage(m.chat, { audio: { url: resu.mp3 }, mimetype: "audioMessage", ptt: true, fileLength: 88738, }, { quoted: m });
}
handler.help = ['ngetes']
handler.tags = ['tes fitur']
handler.command = /^(ngetes)$/i
handler.limit = true
handler.premium = false

module.exports = handler