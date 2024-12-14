let fetch = require('node-fetch')

let handler = async(m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Example: ${usedPrefix + command} https://twitter.com/reoenl/status/1678370956996390913?t=wVFQzgse071qZ_omVcvbkg&s=19`
    m.reply(wait)
    try {
let anu = await fetchJson(`https://api.botcahx.eu.org/api/download/twitter2?url=${text}&apikey=${apichan}`)
        let tess = anu.result
        let as = tess.mediaURLs
        as.forEach(as => {
   conn.sendFile(m.chat, as, null, wm, m)
});
 } catch (e) {
   m.reply('Erorr: Tidak dapat menemukan media')
 }
}

handler.menu = ['twitter <text>']
handler.tags = ['download']
handler.command = /^(twitter|tw)$/i

handler.premium = false
handler.limit = true

module.exports = handler