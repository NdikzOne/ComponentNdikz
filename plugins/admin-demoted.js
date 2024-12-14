let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, usedPrefix, command }) => {

    if (!text) return conn.reply(m.chat, `*❏ SIAPA MAU DI ANGKAT JADI ADMIN?*\n\n• ${usedPrefix}${command} number\n*Example:* ${usedPrefix}${command} 6289654360447\n\n• ${usedPrefix}${command} @tag\n*Example:* ${usedPrefix}${command} @6289654360447`, m)
   let userz = text + "@s.whatsapp.net"
   await conn.groupParticipantsUpdate(m.chat, [userz], 'demote')
    m.reply(`Berhasil diturunkan sebagai member group @${text}`)
}
handler.help = ['demoted *@tag|days*']
handler.tags = ['owner']
handler.command = /^(demoted)$/i
handler.owner = true
handler.group = true
handler.fail = null
module.exports = handler