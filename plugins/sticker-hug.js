let fetch = require("node-fetch")
const { Sticker } = require('wa-sticker-formatter')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn }) => {
  let res = await fetch(global.API('https://api.waifu.pics', '/sfw/hug'))
  let json = await res.json()
  let stiker = await createSticker(null, json.url, global.packname, global.author)
  if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { asSticker: true })
  throw stiker.toString()
}
handler.help = ['stickerhug']
handler.tags = ['sticker']
handler.command = /^hug|stickerhug|stikerhug$/i
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

