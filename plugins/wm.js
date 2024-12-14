const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')
const WSF = require('wa-sticker-formatter')
let handler = async (m, { conn, text, command, usedPrefix }) => {
  let stiker = false
  let wsf = false
  try {
    let [packname, ...author] = text.split`|`
    author = (author || []).join`|`
    let q = m.quoted ? m.quoted : m
    let mime = m.quoted.mimetype || ''
    if (/webp/.test(mime)) {
        let img = await q.download()
      if (!packname) throw `balas stiker dengan perintah ${usedPrefix + command} <packname>|<author>`
      wsf = new WSF.Sticker(img, {
        pack: packname,
        author: author,
        crop: false,
      })
    } else if (/image/.test(mime)) {
      let img = await q.download()
      let link = await uploadImage(img)
      if (!packname) throw `balas gambar dengan perintah ${usedPrefix + command} <packname>|<author>`
      wsf = new WSF.Sticker(img, {
        pack: packname,
        author: author,
        crop: false,
      })
    } else if (/video/.test(mime)) {
      if ((q.msg || q).seconds > 11) throw 'Maksimal 10 detik!'
      let img = await q.download()
      let link = await uploadFile(img)
      if (!packname) throw `balas video dengan perintah ${usedPrefix + command} <packname>|<author>`
      wsf = new WSF.Sticker(img, {
        pack: packname,
        author: author,
        crop: false,
      })
    }
  } finally {
    if (wsf) {
      await wsf.build()
      const sticBuffer = await wsf.get()
      if (sticBuffer) await conn.sendMessage(m.chat, { sticker: sticBuffer }, {
        quoted: m,
        mimetype: 'image/webp',
        ephemeralExpiration: 86400
      })
    }
    if (stiker) await conn.sendMessage(m.chat, { sticker: stiker }, {
      quoted: m,
      mimetype: 'image/webp',
      ephemeralExpiration: 86400
    })
    // else throw `Gagal${m.isGroup ? ', balas gambarnya!' : ''}`
  }
}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^(wm|take)$/i

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