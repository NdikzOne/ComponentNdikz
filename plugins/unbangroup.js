let handler = async (m, { conn, text }) => {
  // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    if (!text) throw `Nomornya?\nContoh: .unban idgrup`
    let gg = text + '@g.us'
    global.db.data.chats[gg].isBanned = false
    m.reply('Done!')
  // } else m.reply('Ada nomor host disini...')
}
handler.help = ['unbangroup']
handler.tags = ['group']
handler.command = /^unbangroup|unbang$/i
handler.false = true

module.exports = handler