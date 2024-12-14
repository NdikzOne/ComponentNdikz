var { fg } = require('api-dylux')
let fetch = require('node-fetch')
var { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let limit = 350 
let handler = async (m, { conn, args, text, isPrems, isOwner, usedPrefix, command }) => {
    let id = `${Math.floor(Math.random() * 5)}`
	 let chat = global.db.data.chats[m.chat]
	 m.reply(wait) 
			let res = await fetch(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=82389ffbed5cd3ab5e3bdd81`)
  let vas = await res.json()
  let v = vas.result
  
  let cap = `${htki}  *QUOTES ANIME* ${htka}
  
▢ *QUOTES* : ${v.quote}
▢ *CHARACTER* : ${v.character}
▢ *ANIME* : ${v.anime}
▢ *EPISODE* : ${v.episode}
${dmenuf}
`
    
await m.reply(cap)
    }

handler.help = ['quotesanime']
handler.tags = ['quotes']
handler.command = /^(quotesanime|animequotes|kataanime)$/i
handler.limit = true
module.exports = handler