const fetch = require('node-fetch')
const axios = require('axios')
const fs = require('fs')
let handler = async (m, { conn, args, text }) => {
    global.fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
let spas = "                "
  if (!args[0]) throw 'Uhm...url nya mana?'
  try {
      m.reply(wait)
      let ich = await ( await fetch(`https://api.lolhuman.xyz/api/tiktok?apikey=${apichan}&url=${args[0]}`)).json()
      let q = ich.result
      let mpe3 = await ( await fetch(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${apichan}&url=${args[0]}`)).json()
 let chat = global.db.data.chats[m.chat]
 //   let url = `https://api.lolhuman.xyz/api/tiktokwm?apikey=${apichan}&url=${args[0]}`
//let txt = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}` 
 let buffer = await getBuffer(mpe3.result)
 
 await conn.sendFile(m.chat, buffer, 'error.mp3', null, fkontak, true, {
type: 'audioMessage', 
ptt: false, seconds: 9999999,contextInfo: {
         externalAdReply: { showAdAttribution: true,
 mediaUrl: q.link,
    mediaType: 2, 
    description: '𝙰 𝚄 𝚃 𝙾   𝙳 𝙾 𝚆 𝙽 𝙻 𝙾 𝙰 𝙳',
    title: "▶︎ Now Playing...",
    body: wm,
    thumbnail: await (await fetch(`${global.waifu}`)).buffer(),
    sourceUrl: syt
  }
  } })
 
await conn.sendMessage(m.chat, { document: { url:  mpe3.result }, mimetype: 'document', fileName: `${q.title}.mp3`}, {quoted: m})
  } catch (e) {
      console.log(e)
      conn.sendMessage(m.chat, {
        react: {
            text: "⏳",
            key: m.key, }})
        var res = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${apichan}&url=${text}`)
  			var user = await res.json()
  			var v = user.result
			var sce = v.link
            // var sce = `https://aemt.me/youtube?url=${text}&filter=audioonly&quality=lowestaudio&contenttype=audio/mpeg`
            //var cvr = await audioyt(url)
          //  var sce = cvr.url
            
            var tmb = v.thumbnail
            var captionvid = `∘ Title: ${v.title}\n∘ Bot By: ${wm}\n∘ Url:  ${text}\n\n *Proses Sedang Mengirim Audio....*`
            var pesan = await conn.sendMessage(m.chat, {
                text: captionvid,
                contextInfo: {
                    externalAdReply: {
                        title: "",
                        body: "Powered by",
                        thumbnailUrl: tmb,
                        sourceUrl: text,
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    }
                }
            })
            conn.sendMessage(m.chat, {
                audio: {
                    url: sce
                },
                mimetype: 'audio/mpeg',
                contextInfo: {
                    externalAdReply: {
                        title: v.title,
                        body: "",
                        thumbnailUrl: tmb,
                        sourceUrl: text,
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    }
                }
            }, {
                quoted: pesan
            })
        
        conn.sendMessage(m.chat, { document: { url: sce}, mimetype: 'document', fileName: `${v.title}.mp3`}, {quoted: m})
       conn.sendMessage(m.chat, {
        react: {
            text: "✅",
            key: m.key, }})
  }
}
handler.tags = ['downloader']
handler.command = /^(tiktokaudio|ttaudio|ttmp3)$/i

handler.limit = true

module.exports = handler

async function getBuffer(url, options) {
        try {
                options ? options : {}
                const res = await axios({
                        method: "get",
                        url,
                        headers: {
                                'DNT': 1,
                                'Upgrade-Insecure-Request': 1
                        },
                        ...options,
                        responseType: 'arraybuffer'
                })
                return res.data
        } catch (e) {
                console.log(`Error : ${e}`)
        }
}