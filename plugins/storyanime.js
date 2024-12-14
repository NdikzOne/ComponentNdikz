let fetch = require('node-fetch')
const { Sticker } = require('wa-sticker-formatter')
const { fetchJson, sleep } = require("../functions.js")

let handler = async(m, { conn, text, usedPrefix, command }) => {
    let res = `${webapi}api/asupan/storyanime/random?apikey=${apichan}`
    m.reply(wait)
  conn.sendFile(m.chat, res, 'mp4', wm, m)
    
}

handler.menu = ['storyanime']
handler.tags = ['download']
handler.command = /^(storyanime)$/i
handler.premium = false
handler.limit = true
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