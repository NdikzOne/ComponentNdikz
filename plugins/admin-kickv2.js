let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, usedPrefix }) => {

    if (!text) return conn.reply(m.chat, `Nomor?`, m)
   let userz = text + "@s.whatsapp.net"
   await conn.groupParticipantsUpdate(m.chat, [userz], 'remove')
    m.reply(`Hushh @${text}`)
}
handler.help = ['promoted *@tag|days*']
handler.tags = ['owner']
handler.command = /^(kickv2|ck)$/i
handler.admin = true
handler.rowner = true
handler.group = true
handler.fail = null
module.exports = handler