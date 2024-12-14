let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let id = `${Math.floor(Math.random() * 5)}`
	  if (!text) throw `Contoh: ${usedPrefix + command} yaemiko`
let res = await fetch(`https://api.lolhuman.xyz/api/pinterest2?apikey=${apichan}&query=anime%20${text}`)
let wes = await res.json()
                let was = wes.result
let cita = wes.result[Math.floor(Math.random() * was.length)]
    conn.sendFile(m.chat, cita, null, "nih animeknya:V", m)
	//  scrap.pinterest(text)
    //  .then(a => a[Math.floor(Math.random() * a.length)])
   //    .then(b => conn.sendFile(m.chat,b,b,"*PINTEREST*\n\npencarian dari: " + text, m)
  //  )
}
    
handler.help = ['anime <text>']
handler.tags = ['internet']
handler.command = /^(anime|animek)$/i
handler.limit = true

module.exports = handler