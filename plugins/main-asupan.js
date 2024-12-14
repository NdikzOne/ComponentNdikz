let fetch = require('node-fetch')

let handler = async (m, { conn, command, text, usedPrefix }) => {
  m.reply(wait)
  let cap = ` _*Nih Kak🤤*_
`
  conn.sendFile(m.chat, pickRandom(asupan), 'asupan.mp4', `${cap}`, m)
  }

handler.help = ['asupan']
handler.tags = ['asupan']
handler.command = /^(asupan)$/i
handler.premium = true
handler.register = true
handler.limit = 5
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const asupan = [
"https://telegra.ph/file/1ba615034a0aa7c02be5f.mp4",
]