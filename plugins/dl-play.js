const yts = require('yt-search')
const { youtubedl, youtubedlv2 } = require('../scrape/dl-ytplay')
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `🚩 Use example ${usedPrefix}${command} naruto blue bird`
  let res = await yts(text)
  let vid = res.videos[0]
  await conn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}
  })  
  if (!vid) throw 'Tidak di temukan, coba untuk membalikkan judul dan author nya'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
let vap = `┏ ${htki} *Y O U T U B E* ${htka}
┗┒
 │𝐓𝐢𝐭𝐥𝐞: ${title}
 │𝐔𝐫𝐥: ${url}
 │𝐏𝐮𝐛𝐥𝐢𝐬𝐡𝐞𝐝: ${publishedTime}
 │𝐃𝐮𝐫𝐚𝐭𝐢𝗼𝐧: ${durationH}
 │𝐕𝐢𝐞𝐰: ${viewH}
┏┛
┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉`

conn.sendMessage(m.chat, {
text: vap,
contextInfo: {
externalAdReply: {
title: 'ヅ 𝐘 𝐎 𝐔 𝐓 𝐔 𝐁 𝐄\nᴅᴏᴡɴʟᴏᴀᴅᴇʀ',
thumbnailUrl: thumbnail,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
  const yt = await youtubedl(url).catch(async () => await youtubedlv2(url))
const link = await yt.audio['128kbps'].download()
  let doc = { 
  audio: 
  { 
    url: link 
}, 
mimetype: 'audio/mp4', fileName: `${title}`, contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: url,
title: title,
body: namabot,
sourceUrl: url,
thumbnail: await(await conn.getFile(thumbnail)).data                                                                     
                                                                                                                 }
                       }
  }
  return conn.sendMessage(m.chat, doc, { quoted: m })
}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^playv2$/i

handler.exp = 0
handler.limit = 5
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
