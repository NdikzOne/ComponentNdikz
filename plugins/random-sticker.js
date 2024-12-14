const { fetch } = require('node-fetch')
const { addExif } = require('../lib/sticker.js')
const { Sticker } = require('wa-sticker-formatter')
let axios = require('axios')
let handler = async (m, { conn, args }) => {
	let buatstiker = `https://api.zeeoneofc.my.id/api/telegram-sticker/patrick?apikey=${apichan}`
  m.reply('Tunggu Sebentar...')
  let stiker = await createSticker(buatstiker, false, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
}
handler.help = ['stikermeme']
handler.tags = ['sticker']
handler.command = /^(stikermeme)$/i
handler.limit = true
handler.premium = false

module.exports = handler

async function createSticker(img, url, packName, authorName, quality) {
	let stickerMetadata = {
		type: 'full',
		pack: global.packname,
		author: global.author,
		quality
	}
	return (new Sticker(img ? img : url, stickerMetadata)).toBuffer()
}
function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
}