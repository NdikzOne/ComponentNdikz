let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, usedPrefix }) => {
	
    let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag salah satu lah'
   let userz = text + "@s.whatsapp.net"
   await conn.groupParticipantsUpdate(m.chat, [who], 'remove')
    m.reply(`Hushh ${text}`)
}
handler.help = ['promoted *@tag|days*']
handler.tags = ['owner']
handler.command = /^(kick|outlo)$/i
handler.admin = true
handler.group = true
handler.fail = null
module.exports = handler