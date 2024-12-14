let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let id = `${Math.floor(Math.random() * 5)}`
	//  if (!text) throw `Contoh: ${usedPrefix + command} indo`
      try {
let res = `${webapi}api/asupan/image/indonesia?apikey=${apichan}`
    conn.sendFile(m.chat, res, null, "*HASIL DARI CEWEK CANTIK*" + text, m)
      } catch (e) {
          let res = await fetch(`https://aemt.me/pinterest?query=${apichan}&query=cewek%20cantik%20$Indonesia`)
let wes = await res.json()
                let was = wes.result
let cita = wes.result[Math.floor(Math.random() * was.length)]
    conn.sendFile(m.chat, cita, null, "*CEWEK CANTIK*\n\npencarian dari: cecan " + text, m)
      }
}
    
handler.help = ['cecan <text>']
handler.tags = ['internet']
handler.command = /^(cecan)$/i
handler.limit = true

module.exports = handler