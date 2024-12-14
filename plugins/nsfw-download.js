
var { fg } = require('api-dylux')
let fetch = require('node-fetch')
var { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let limit = 350 
let handler = async (m, { conn, args, text, isPrems, isOwner, usedPrefix, command }) => {
    if (!text) throw `Contoh: ${usedPrefix + command} linknya?`
    let id = `${Math.floor(Math.random() * 5)}`
	 let chat = global.db.data.chats[m.chat]
	 m.reply(wait) 
			let res = await fetch(`https://api.lolhuman.xyz/api/xnxx?apikey=28789df663bc495e58123757&url=${text}`)
  let vas = await res.json()
  let v = vas.result
let cita = v.link[1]
  
  let cap = `${htki}  *XNXX VIDEOS* ${htka}
  
▢ *☃️ Title* : ${cita.title}
▢ *☃️ Format* : mp4
▢ *☃️ Duration* : ${cita.duration}
▢ *☃️ Link* : ${cita.link}
▢ *☃️ Channel* : ${cita.uploader}
${dmenuf}
`
    
    conn.sendFile(m.chat, cita.link, null, wm, m)
    }

handler.help = ['xnxx']
handler.tags = ['downloader']
handler.premium = true
handler.command = /^(xdownload|xdl)$/i

module.exports = handler