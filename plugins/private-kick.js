let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, usedPrefix }) => {
let group = jb1 + '@g.us'
    if (!text) return conn.reply(m.chat, `Nomor?`, m)
   let userz = text + "@s.whatsapp.net"
   await conn.groupParticipantsUpdate(group, [userz], 'remove')
   // m.reply(`Hushh @${text}`)
}
handler.help = ['pckick *@tag|days*']
handler.tags = ['owner']
handler.command = /^(pckick)$/i
handler.admin = false
handler.rowner = true
handler.group = false
handler.fail = null
module.exports = handler