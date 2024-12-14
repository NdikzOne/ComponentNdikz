const translate = require('translate-google-api')
const defaultLang = 'en'
const tld = 'cn'
const fetch = require('node-fetch')

let handler = async (m, { args, text, usedPrefix, command }) => {
if(!text) throw 'contoh: .tranlsate good morning'
    if (text > 2000) return conn.reply(m.chat, 'Teks Kepanjangan!', m)
    let apinya = await fetch(`https://api.lolhuman.xyz/api/translate/auto/id?apikey=${apichan}&text=${text}`)
    let res = await apinya.json()
  m.reply(res.result.translated)
}
handler.help = ['translate'].map(v => v + ' <lang> <teks>')
handler.tags = ['internet']
handler.command = /^(tr(anslate)?)$/i
handler.limit = true
handler.fail = null
handler.exp = 0
module.exports = handler