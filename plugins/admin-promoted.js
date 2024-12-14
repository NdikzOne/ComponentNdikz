let handler = async (m, { conn, args }) => {
  let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  let users = m.mentionedJid.filter(u => !(u == ownerGroup || u.includes(conn.user.jid)))
  for (let user of users) if (user.endsWith('@s.whatsapp.net')) await conn.groupParticipantsUpdate(m.chat, [user], "promote")
    m.reply(`Berhasil Jadikan Admin @${user}`)
}
handler.help = ['promote'].map(v => v + ' <@user>')
handler.tags = ['admin']
handler.command = /^(promote)$/i
handler.admin = true
handler.rowner = true
handler.group = true
handler.fail = null
module.exports = handler