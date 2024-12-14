let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
    let thumb = 'https://telegra.ph/file/244bba9145c3aba2c0281.jpg'
    let res = await fetch(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${apichan}`)
    let json = await res.json()
    let v = json.result
  //  await conn.sendFile(m.chat, thumb, 'galau.jpg', `${pickRandom(global.galau)}`, m)
    global.fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
    let audio = './mp3/galau.mp3'
   // conn.sendFile(m.chat, './mp3/galau.mp3', '', null, m, true, { type: "audioMessage", ptt: true, fileLength: 88738 })
     let cap = `${htki} QUOTES ANIME ${htka}
${v.quote}

▢ *Karakter:* ${v.character}
▢ *Anime:* ${v.anime}
▢ *Episode:* ${v.episode}
${dmenuf}`
await conn.sendMessage(m.chat, {
                text: cap,
                contextInfo: {
                    externalAdReply: {
                        title: "",
                        body: "Powered by",
                        thumbnailUrl: thumb,
                        sourceUrl: syt,
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    }
                }
            })
    return conn.sendFile(m.chat, audio, '', null, m, true, { type: "audioMessage", ptt: true, fileLength: 88738 })
}
handler.help = ['anime']
handler.tags = ['quotes']
handler.command = /^(nimequotes)$/i

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
}