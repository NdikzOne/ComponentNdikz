let fetch = require('node-fetch')
const {
    MessageType
} = require('@adiwajshing/baileys')

let handler = async (m, { conn, args, usedPrefix }) => {
	if (!args[0]) return m.reply('Putting *URL* Facebook..')
    if (!args[0].includes("facebook")) return m.reply(`Url is wrong..\n\n*Example:*\n${usedPrefix}fb https://www.facebook.com/TeguhSuwandi19/videos/5230538373729232/?mibextid=XBoEBUlHZ1eoDabU`)
	let json = await (await fetch(`${webapi}api/downloader/facebook?url=${args[0]}&apikey=${apichan}`)).json()
	//if (res.status !== 200) throw `Coba Lagi`
	//if (!json.result) throw `Media tidak ditemukan atau postingan mungkin diprivate`
	let result = json.data[0]
  //  console.log(result)
	m.reply('Sedang diproses...')
	if (result.url) await conn.sendFile(m.chat, result.url, 'fb.mp4', wm, m)
	//if (url) await conn.sendMessage(m.chat, url, MessageType.video, {mimetype: 'video/mp4', quoted: m, caption: wm})
	else m.reply('Link download tidak ditemukan')
	}

handler.help = ['fb'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^f((b|acebook)(dl|download)?(er)?)$/i
handler.limit = true
handler.group = false
handler.premium = false

module.exports = handler
