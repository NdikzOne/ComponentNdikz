var { fg } = require('api-dylux')
let fetch = require('node-fetch')
let handler = async (m, { conn, text, isPrems, isOwner, usedPrefix, command }) => {
let [link, slide] = text.split `|`
    if (!link) return conn.reply(m.chat, 'Silahkan Masukkan link post ig slide\ncontoh: .igslide https://www.instagram.com/xxxxx', m)
    if (!slide) return conn.reply(m.chat, `✳️ Contoh :\n${usedPrefix + command} https://www.instagram.com/xxxxx|1\n0 = slide pertama atau ke 1\nDan 1= slide ke 2 dan seterusnya`, m)
	 m.reply(wait) 
			let res = await fetch(`${Apisichan}/api/downloader/instagram-v2?api_key=${apichan}&target_url=${link}`)
  let vas = await res.json()
  let vvas = vas.data
    
    conn.sendFile(m.chat, vas.data[`${slide}`].url, ' ', wm, m)
    }

handler.help = ['ig']
handler.tags = ['downloader']
handler.command = /^(Instagramslide|igfoto|igslide)$/i

module.exports = handler