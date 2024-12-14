let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  m.reply(wait)
  let images = `https://api.lolhuman.xyz/api/meme/darkjoke?apikey=IchanZX`
  conn.sendFile(m.chat, images, 'meme.jpg', wm, m)
}
handler.help = ['memee']
handler.tags = ['darkjoke']
handler.command = /^(darkjoke)$/i
handler.limit = true
handler.premium = false

module.exports = handler