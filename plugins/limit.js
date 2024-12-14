let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
    m.reply(`Limit kamu adalah 50 / *${global.db.data.users[who].limit}* Limit Left ಥ_ಥ dan balance kamu adalah *${global.db.data.users[who].money}*

Kamu dapat membeli limit dengan ketik .shop buy limit
Kamu dapat membeli premium user untuk mendapatkan limit unlimited, ketik .buyprem

Limit akan diriset pada pukul 00.00 setiap harinya`)
}
handler.help = ['limit [@user]']
handler.tags = ['xp']
handler.command = /^(limit)$/i
module.exports = handler