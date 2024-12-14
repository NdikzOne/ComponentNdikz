let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!text) throw `Linknya?\nExample: *.capcut https://www.capcut.com/t/Zs8MHAxn4/*`
m.reply(wait)
  let res = await fetch(`https://tesapi.zxcoderid.xyz/api/downloader/capcut?url=${args[0]}&apikey=${apichan}`)
  let json = await res.json()
  let v = json.data
  let cap = `_Nih Kak Videonya >,<_`
  conn.sendMessage(m.chat, { video: { url: v.url }, caption: wm }, m)
}
handler.help = ['CapCut']
handler.tags = ['downloader']
handler.command = /^(capcut|ccdl|capcutdl)$/i

module.exports = handler