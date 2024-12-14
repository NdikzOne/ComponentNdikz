let fetch = require('node-fetch')
let handler = async (m, { args, usedPrefix, command }) => {
  if (!m.text) throw `uhm.. id nya mana?\n\ncontoh:\n${usedPrefix + command} 1906651269`
  let res = await fetch(global.API(`https://api.lolhuman.xyz/api/freefire/${m.text}?apikey=${apichan}`)
  if (!res.ok) throw eror
  let json = await res.json()
  if (!json.status) throw json
  m.reply(json.result)
}
handler.help = ['epep'].map(v => v + ' <id>')
handler.tags = ['store']
handler.command = /^(freefire|epep)$/i

module.exports = handler