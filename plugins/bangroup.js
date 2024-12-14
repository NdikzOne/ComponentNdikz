let handler = async (m, { conn, participants }) => {
  // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('Done!')
  // } else m.reply('Ada nomor host disini...')
}
handler.help = ['bangroup']
handler.tags = ['group']
handler.command = /^bangroup|bng$/i
handler.admin = true

module.exports = handler