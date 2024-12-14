const uploadImage = require('../lib/uploadImage') 
const { fetch } = require('node-fetch')
const { addExif } = require('../lib/sticker.js')
const { Sticker } = require('wa-sticker-formatter')
let { fileIO, api} = require('../lib/uploadFile.js')
let handler = async (m, { conn, text, args, usedPrefix }) => {
 try {
  let [teksBottom,teksTop] = text.split('|')
  let teks = text
  let teks2 = ' '
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada foto'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let url = await fileIO(img)
  if(teksTop){
       let wasted = `https://api.lolhuman.xyz/api/memegen?apikey=${apichan}&texttop=${teksBottom}&textbottom=${teksTop}&img=${url}`
//  let wasted = `http://docs-jojo.herokuapp.com/api/meme-gen?top=${teks}&bottom=${teks2}&img=${url}`
  let stiker = await createSticker(null, wasted, packname, author)
  conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
  }else{
       let wasted = `https://api.lolhuman.xyz/api/memegen?apikey=${apichan}&texttop=${teks2}&textbottom=${teksBottom}&img=${url}`
//  let wasted = `http://docs-jojo.herokuapp.com/api/meme-gen?top=${teks}&bottom=${teks2}&img=${url}`
  let stiker = await createSticker(null, wasted, packname, author)
  conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
  }
 // console.log(url)
} catch (e) {
    console.log(e)
  m.reply(`Masukan format!!\nReply image dengan caption ${usedPrefix}smeme teks1|teks2\n*Jangan reply sticker*`)
 }
}
handler.help = ['smeme']
handler.tags = ['sticker']
handler.command = /^smeme$/i

handler.limit = true

handler.fail = null

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