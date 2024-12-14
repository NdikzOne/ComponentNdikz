let fetch = require('node-fetch')
let handler = async(m, { conn, usedPrefix, text, args, command }) => {
if (!text) throw `Contoh:\n${usedPrefix + command} lisaamelia09_`
let f = await fetch(`https://api.miftahganzz.my.id/api/stalking/instagram?username=${text}&apikey=${apichan}`)
let x = await f.json()
let v = x.data
     let cap = `${htki} Info Detail Instagram ${htka}
Name : ${v.fullname}
Usename : @${v.username}
Followers : ${v.followers}
Followings : ${v.following}
Total post : ${v.post}
Bio : ${v.bio}`
await conn.sendMessage(m.chat, { image: { url: v.profile }, caption: cap })
  }
handler.help = ['stalktiktok'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(stalkig|stalkinsta)$/i

module.exports = handler