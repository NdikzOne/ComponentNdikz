
var { fg } = require('api-dylux')
let fetch = require('node-fetch')
var { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let limit = 350 
let handler = async (m, { conn, args, text, isPrems, isOwner, usedPrefix, command }) => {
    if (!text) throw `Contoh: ${usedPrefix + command} japanese`
    let id = `${Math.floor(Math.random() * 5)}`
	 let chat = global.db.data.chats[m.chat]
	 m.reply(wait) 
			let res = await fetch(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=28789df663bc495e58123757&query=${text}`)
  let vas = await res.json()
  let v = vas.result
let cita = vas.result[Math.floor(Math.random() * v.length)]
  
  let cap = `${htki}  *XNXX VIDEOS* ${htka}
  
▢ *☃️ Title* : ${cita.title}
▢ *☃️ Format* : mp4
▢ *☃️ Duration* : ${cita.duration}
▢ *☃️ Link* : ${cita.link}
▢ *☃️ Channel* : ${cita.uploader}
${dmenuf}
`
    
    conn.sendFile(m.chat, cita.thumbnail, null, cap, m)
    }

handler.help = ['xnxx']
handler.tags = ['downloader']
handler.premium = true
handler.command = /^(xxnxsearch|xsearch)$/i

module.exports = handler