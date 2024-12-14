let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  m.reply('Waifu Akan Di Kirim Di Priv Chat')
  conn.sendMessage(m.sender, { image: { url: `https://api.lolhuman.xyz/api/random/nsfw/waifu?apikey=82389ffbed5cd3ab5e3bdd81` } })
}

handler.help = ['nwaifu']
handler.tags = ['internet']

handler.command = /^(nwaifu)$/i
handler.limit = true
handler.group = true

module.exports = handler
