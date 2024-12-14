let fs = require('fs')
let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, command }) => {
    let _uptime = process.uptime() * 1000
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let admin = `${Math.floor(Math.random() * 110)}`
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let gw = `${global.wm}`
        let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptimex = clockString(_uptime)
    let chan = `╭───➣❲ *Runtime* ❳✯  \n├◩Tanggal : ${date}\n├◩Hari : ${week}\n├◩Jam : ${time}\n├◩Runtime : ${uptimex}\n├◩Muptime : ${muptime}\n╰──────────────◩`
    
    global.fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
    let audio = `https://raw.githubusercontent.com/Aisyah-Aldi/Sound/main/sound${admin}.mp3`
    
    await conn.sendFile(m.chat, audio, 'error.mp3', null, fkontak, true, {
type: 'audioMessage', 
ptt: false, seconds: 9999999,contextInfo: {
         externalAdReply: { showAdAttribution: true,
 mediaUrl: 'https://youtu.be/yUF-Qkz2hnc',
    mediaType: 2, 
    description: syt,
    title: `◩Runtime : ${uptimex}`,
    body: wm,
    thumbnail: await (await fetch(pickRandom(waifu))).buffer(),
    sourceUrl: syt
  }
  } })
}
handler.help = ['runtime']
handler.tags = ['info']
handler.command = /^(uptime|runtime)$/i

module.exports = handler

function clockString(ms) {
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor((minutesms) / (1000));
    return days + " Hari " + hours + " Jam " + minutes + " Menit " + sec + " Detik";
}
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
