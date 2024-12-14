let fs = require('fs')
let handler = async (m, { conn, text }) => {
    m.reply('Tunggu Sebentar, Proses Getting File config.js')
    let sesi = await fs.readFileSync('./config.js')
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/js', fileName: 'config.js' }, { quoted: m })
}
handler.help = ['getconfig']
handler.tags = ['owner']
handler.command = /^(getconfig)$/i

handler.owner = true

module.exports = handler