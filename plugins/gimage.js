let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!text) throw `Linknya?\nExample: *${command}* Gawr Gura`
m.reply(wait)
  let res = `https://aemt.me/gimage?query=${text}`
  conn.sendMessage(m.chat, { image: { url: res }, caption: wm }, m)
}

handler.help = ['gimage <search>']
handler.tags = ['internet']
handler.command = /^(gimage|image)$/i
handler.limit = true

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
