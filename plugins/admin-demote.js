let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, usedPrefix }) => {
let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag salah satu lah'
//    if (!text) return conn.reply(m.chat, `*❏ SIAPA MAU DI ANGKAT JADI ADMIN?*\n\n• ${usedPrefix}promoted number\n*Example:* ${usedPrefix}promoted 6289654360447\n\n• ${usedPrefix}promoted @tag\n*Example:* ${usedPrefix}promoted @6289654360447`, m)
 //  let userz = text + "@s.whatsapp.net"
   await conn.groupParticipantsUpdate(m.chat, [who], 'demote')
    m.reply(`Berhasil memberhentikan sebagai admin group @${text}`)
}
handler.help = ['promoted *@tag|days*']
handler.tags = ['owner']
handler.command = /^(demoted|demote)$/i
handler.admin = true
handler.rowner = true
handler.group = true
handler.fail = null
module.exports = handler