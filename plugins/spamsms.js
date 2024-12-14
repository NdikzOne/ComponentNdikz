let fetch = require('node-fetch')
let handler = async (m, { conn, args, text }) => {
   let response = args.join(' ').split('|')
  if (!text) throw 'Harap Masukan Teks..'
    let teks = args.join` `
  m.reply('Tunggu Sebentar...')
  let res = await fetch(`https://api.lolhuman.xyz/api/sms/spam2?apikey=${apichan}&nomor=${teks}`)
  let ngab = await res.json()
  m.reply(ngab.result)
}
handler.help = ['spamsms <teks>']
handler.tags = ['sticker']
handler.command = /^(spamsms)$/i
handler.limit = true
handler.owner = true

module.exports = handler