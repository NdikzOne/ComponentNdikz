var fetch = require("node-fetch")

var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Masukkan Judul!\n\nContoh: ${usedPrefix + command} loli kawai`
  try {
  var res = await fetch(`https://api.lolhuman.xyz/api/pixiv?apikey=${apichan}&query=${text}`)
  var wes = await res.json()
  var name = m.sender
  let was = wes.data
  let cita = wes.data[Math.floor(Math.random() * was.length)]
  await conn.reply(m.chat, wait, m)
  conn.sendFile(m.chat, cita, res.result[0].title, "Hayo Nyari Apa Om" , m)
  } catch (e) {
      var ikyy = await fetch(`https://aemt.me/pixiv?query=${text}`)
  let id = `${Math.floor(Math.random() * 8)}`
  var res = await ikyy.json()
  var banyak = res.result.length
  var as = res.result[banyak]
  var asr = await as.urls
  var name = m.sender
  await conn.reply(m.chat, wait, m)
  conn.sendFile(m.chat, asr.regular, null, "Hayo Nyari Apa Om" , m)
  }
}

handler.command = handler.help = ['pixiv']
handler.tags = ['internet']
handler.limit = true
handler.premium = true
module.exports = handler