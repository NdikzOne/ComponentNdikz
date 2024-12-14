
var { fg } = require('api-dylux')
let fetch = require('node-fetch')
var { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let limit = 350 
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
    let id = `${Math.floor(Math.random() * 5)}`
	 let chat = global.db.data.chats[m.chat]
	 m.reply(wait) 
			let res = await fetch(`https://api.miftahganzz.my.id/api/18/random/hentai?apikey=${apichan}`)
  let vas = await res.json()
  let v = vas.data[id]
  
  let cap = `${htki}  *ANIME HENTAI* ${htka}
  
▢ *☃️ Title* : ${v.title}
▢ *☃️ Format* : mp4
▢ *☃️ Views Count* : ${v.views_count}
▢ *☃️ Link* : ${v.link}
${dmenuf}
`
    
    conn.sendFile(m.chat, vas.data[`${id}`].video_1, null, cap, m)
    }

handler.help = ['ig']
handler.tags = ['downloader']
handler.premium = true
handler.command = /^(hentai)$/i

module.exports = handler