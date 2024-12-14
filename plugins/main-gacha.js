let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.id)
    let a = ps[Math.floor(Math.random() * ps.length)]
    let b
    do b = ps[Math.floor(Math.random() * ps.length)]
    while (b === a)
    m.reply(`${toM(a)} \nMendapatkan Keberuntungan`, null, {
        mentions: [a]
    })
}
handler.help = ['gacha']
handler.tags = ['fun']
handler.command = ['gacha']
handler.limit = true
handler.group = true

module.exports = handler