let { webp2mp4 } = require('../lib/webp2mp4')
let { webp2mp4File } = require('../lib/uploader')
const fs = require('fs');
let handler = async (m, { conn, usedPrefix, command }) => {
m.reply('Fitur Dalam Pengembangan\n Kalo nemu scrape nya Dev Bot Akan Update fitur ini\n\n'+wm)
}
handler.help = ['togif <reply|media>']
handler.tags = ['maker']
handler.command = /^(togif|tovideo|tomp4)$/i

module.exports = handler