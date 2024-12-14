let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = { // Switch Case Like :v
        'open': 'not_announcement',
        'close': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined)
        throw `
*Format salah! Contoh :*
  *○ ${usedPrefix + command} close*
  *○ ${usedPrefix + command} open*
`.trim()
    let ppv = global.fotobotnya
    let dann = ` ⌜Group Change Setting⌟\n\n Group telah di ${args[0]} Silahkan Beraktivitas Melalui *Private Chat* Jika Ditutup Grup Ini!!`
    conn.sendFile(m.chat, ppv, 'menu.jpg', `${dann}`, m)
    await conn.groupSettingUpdate(m.chat, isClose)
}
handler.command = handler.help = [
    'grup'
]
handler.tags = ['group']

handler.admin = true
handler.botAdmin = true

module.exports = handler