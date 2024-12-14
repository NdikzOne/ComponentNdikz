let fs = require('fs')
let handler = async (m, { conn, text }) => {
    m.reply('Tunggu Sebentar, Proses Getting File handler.js')
    let sesi = await fs.readFileSync('./handler.js')
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/js', fileName: 'handler.js' }, { quoted: m })
}
handler.help = ['gethandler']
handler.tags = ['owner']
handler.command = /^(gethandler)$/i

handler.owner = true

module.exports = handler