let fetch = require('node-fetch')
let googleIt = require('google-it')
let handler = async (m, { conn, command, args }) => {
  let full = /f$/i.test(command)
  let text = args.join` `
  if (!text) return conn.reply(m.chat, '.sanemoku WhatsApp Immune', m)
  let url = `site:sanemoku.com ${text}`
  let search = await googleIt({ query: url })
  let msg = search.map(({ title, link, snippet}) => {
    return `*❏ ${title}*\n🔗Linknya: _${link}_\n👑 _${namaowner}_\nSubscribe: youtube.com/IchanGaming`
  }).join`\n\n`
  try {
    let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).buffer()
    if (ss.includes('html')) throw ''
    await conn.sendFile(m.chat, ss, 'screenshot.png', url + '\n\n' + msg, m)
  } catch (e) {
    m.reply(msg)
  }
}
handler.help = ['sanemoku'].map(v => v + ' <search>')
handler.tags = ['internet']
handler.command = /^sanemoku|modapk|zxmodf?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.limit = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler