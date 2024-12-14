let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, usedPrefix }) => {
if (!text) throw 'nomornya?\nContoh: promoted 628xxxxxxx'
  let gg = text + '@s.whatsapp.net'
//    if (!text) return conn.reply(m.chat, `*❏ SIAPA MAU DI ANGKAT JADI ADMIN?*\n\n• ${usedPrefix}promoted number\n*Example:* ${usedPrefix}promoted 6289654360447\n\n• ${usedPrefix}promoted @tag\n*Example:* ${usedPrefix}promoted @6289654360447`, m)
 //  let userz = text + "@s.whatsapp.net"
   await conn.groupParticipantsUpdate(m.chat, [gg], 'promote')
    m.reply(`Berhasil menjadi sebagai admin group @${text}`)
}
handler.help = ['promoted *@tag|days*']
handler.tags = ['owner']
handler.command = /^(promoted|pmtod)$/i
handler.admin = false
handler.owner = true
handler.group = false
handler.fail = null
module.exports = handler