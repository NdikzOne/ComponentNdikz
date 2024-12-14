let handler = async (m, { conn, text, usedPrefix, command }) => {
let caption = `apa?`

conn.sendFile(m.chat, './mp3/goodbye.mp3', '', null, m, true, { type: "audioMessage", ptt: true, fileLength: 88738 })
}

handler.customPrefix = /^(di(setiap|saat))/i
handler.limit = false
handler.command = new RegExp
module.exports = handler