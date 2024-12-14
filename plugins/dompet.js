let handler = async (m) => {
    let who
      let users = global.db.data.users
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
    m.reply(`${global.db.data.users[who].money} Your money`)
  //  global.db.data.users[who].saldo -= 1 * 1000
}
handler.help = ['dompet [@user]']
handler.tags = ['xp']
handler.command = /^(dompet|money)$/i
module.exports = handler