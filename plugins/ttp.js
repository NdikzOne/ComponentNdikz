let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args) throw 'Harap Masukan Teks..'
    let teks = args.join` `
  m.reply('Tunggu Sebentar...')
  let res = `https://api.lolhuman.xyz/api/ttp?apikey=${apichan}&text=${teks}`
  conn.sendFile(m.chat, res, 'dann.webp', m)
}
handler.help = ['ttp <teks>']
handler.tags = ['sticker']
handler.command = /^(ttp)$/i
handler.limit = true
handler.premium = false

module.exports = handler