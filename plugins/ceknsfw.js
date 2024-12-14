let fetch = require('node-fetch')
let uploadFile = require('../lib/uploadFile.js')
let uploadImage = require('../lib/uploadImage.js')
let handler = async (m, { conn, text }) => {
//if (!text) throw 'Fotonya nya mana?'
   //   conn.chatRead(m.chat);
let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No media found'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
        let res = await (await fetch(`https://api.miftahganzz.my.id/api/tools/nsfwcheck?url=${link}&apikey=IchanZX`)).json()
        let as = res.data
        let ac = await as.nudity
        let nsfw = ac.sexual_display
if (nsfw > 0.07) {
            let user = m.sender;
            let mention = `@${user.replace(/@.+/, "")}`;
            await conn.reply(m.chat, `🐱 *${mention}* Detected sending NSFW`, m);
            await conn.sendMessage(m.chat, {
              delete: {
                remoteJid: m.chat,
                fromMe: false,
                id: m.key.id,
                participant: m.key.participant,
              },
            });
          } else {
console.log('media aman')
}
}
handler.help = ['ceknsfw <image>']
handler.tags = ['tools']
handler.command = /^(ceknsfw)$/i
handler.limit = true
handler.premium = false

module.exports = handler

async function antiNsfw(url) {
let response = await axios.get('https://api.sightengine.com/1.0/check.json', {
  params: {
    'url': url,
    'models': 'nudity-2.0',
    'api_user': '1654235197',
    'api_secret': 'xSHxv2DKjBQow7MR52jsPAzici',
  }
})

if (response.data.status == 'success') {
const message = `Konten NSFW *( ${response.data.nudity.sexual_activity}% )* terdeteksi oleh sistem, media mengandung NSFW.`

return {
nsfw: response.data.nudity.sexual_activity,
msg: message
}
}
}
