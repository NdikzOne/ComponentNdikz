const fs = require('fs')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    const filePath = './database/idgc.json';
                // Baca file JSON secara synchronous
    const data = fs.readFileSync(filePath, 'utf-8');
    
    // Lakukan parsing JSON
    const jsonData = JSON.parse(data);
    let group = jsonData.chatId
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
   // console.log(group)
    await conn.groupSettingUpdate(group, isClose)
}
handler.help = ['botgc <open/close>']
handler.tags = ['owner']
handler.command = /^(botgc)$/i
handler.owner = true
handler.private = true

module.exports = handler