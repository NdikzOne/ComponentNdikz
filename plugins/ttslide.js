const axios = require('axios')
const fetch = require('node-fetch')
const cheerio = require('cheerio')
const got = require('got')

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
if (!text) throw `🚩 *Example:* ${usedPrefix+command} https://vt.tiktok.com/ZS8TQkpTK/`
let spas = "                "
try {
await conn.sendMessage(m.chat, {
        react: {
            text: "⚡",
            key: m.key, }})
    let res = await(await fetch(`https://aemt.me/download/douyinslide?url=${text}`)).json()
    let ser = res.data
    let capt = `${spas}*「 T I K T O K 」*

*📛Author:* ${ser.creator}
*📒Title:* ${ser.title}`

for (let i = 0; i < result2.data.images; i++) {
        let media = result2.data[i];
 conn.sendFile(m.chat, media.url, '', capt, m);
    conn.sendMessage(m.chat, { document: { url: ser.nowm}, mimetype: 'document', fileName: `${ser.title}.mp3`}, {quoted: m});
        conn.sendMessage(m.chat, { audio: { url: ser.nowm }, mimetype: "audioMessage", ptt: true, fileLength: 88738, }, { quoted: m });
    conn.sendMessage(m.chat, {
        react: {
            text: "✅",
            key: m.key, }})
 }
}
handler.help = ['tiktokslide'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.limit = 5
handler.command = /^(ttslide|tiktokslide)$/i

handler.limit = true

module.exports = handler