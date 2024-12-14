var { fg } = require('api-dylux')
let fetch = require('node-fetch')
var { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let limit = 350 
let handler = async (m, { conn, args, text, isPrems, isOwner, usedPrefix, command }) => {
if (!text) throw `Contoh: ${usedPrefix + command} Otonari No Tensei`
    let id = `${Math.floor(Math.random() * 5)}`
	 let chat = global.db.data.chats[m.chat]
	 m.reply(wait) 
			let res = await fetch(`https://api.lolhuman.xyz/api/anime?apikey=82389ffbed5cd3ab5e3bdd81&query=${text}`)
  let vas = await res.json()
  let v = vas.result
  
  let cap = `${htki}  *Anime Search* ${htka}
  
▢ *💫 Title* : ${v.title.english}
▢ *💫 format* : ${v.format}
▢ *💫 episodes* : ${v.episodes}
▢ *💫 duration* : ${v.duration}
▢ *💫 genre* : ${v.genres}
▢ *💫 startDate* : ${v.startDate.year}
▢ *💫 endDate* : ${v.endDate.year}
▢ *💫 description* : ${v.description}
${dmenuf}
`
    
    conn.sendFile(m.chat, v.coverImage.large, null, cap, m)
    }

handler.help = ['ceritahoror']
handler.tags = ['fun']
handler.premium = true
handler.command = /^(animesearch|searchanime)$/i

module.exports = handler