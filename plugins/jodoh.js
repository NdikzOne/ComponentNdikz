var { fg } = require('api-dylux')
let fetch = require('node-fetch')
var { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let limit = 350 
let handler = async (m, { conn, args, text, isPrems, isOwner, usedPrefix, command }) => {
if (!text) throw `Contoh: ${usedPrefix + command} NAMA1/NAMA2`
    let id = `${Math.floor(Math.random() * 5)}`
	 let chat = global.db.data.chats[m.chat]
	 m.reply(wait) 
			let res = await fetch(`https://api.lolhuman.xyz/api/jodoh/${text}?apikey=82389ffbed5cd3ab5e3bdd81`)
  let vas = await res.json()
  let v = vas.result
  
  let cap = `${htki}  *JODOH* ${htka}
  
▢ *💫 POSITIF* : ${v.positif}
▢ *💫 NEGATIF* : ${v.negatif}
${dmenuf}
`
    
conn.sendFile(m.chat, v.image, null, cap, m)
}

handler.help = ['tebakumur']
handler.tags = ['fun']
handler.premium = true
handler.command = /^(tebakjodoh|jodoh)$/i

module.exports = handler