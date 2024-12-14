const axios = require('axios')
const fetch = require('node-fetch')
const cheerio = require('cheerio')
const got = require('got')

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args || !args[0]) throw `✳️ Contoh :\n${usedPrefix + command} https://www.tiktok.com/xxxxx`
    if (!(args[0].includes('http://') || args[0].includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
    if (!args[0].includes('tiktok.com')) return m.reply(`Invalid Tiktok URL.`)
    await conn.sendMessage(m.chat, {
            react: {
                text: "⚡",
                key: m.key,
            }
        })
    let text = args[0]
    let spas = "                "
    try {
        let ichan = await (await fetch(`${webapi}api/downloader/tiktok2?url=${args[0]}&apikey=${apichan}`)).json()
        let capt = `${spas}*「 T I K T O K 」*

*📛Author:* ${wm}
*📒Title:* ${ichan.data.description}

KETIK .ttmp3 UNTUK MENDOWNLOAD AUDIO
${wm}`
        console.log(ichan.data.url[0])
        conn.sendFile(m.chat, ichan.data.url[0], 'mp.4', capt, m)
        conn.sendMessage(m.chat, {
            react: {
                text: "✅",
                key: m.key,
            }
        })
    } catch (e) {
        console.error(e)
        await conn.sendMessage(m.chat, {
            react: {
                text: "⏳",
                key: m.key,
            }
        })
        m.reply(`––––––『 ⎔ 𝙇𝙤𝙖𝙙𝙞𝙣𝙜... 』––––––\n\nJika Eror Bisa ketik: .tt2`);
        try {
                            let ler = await axios.get(`${webapi}api/downloader/tiktok?url=${text}&apikey=${apichan}`)
            let cer = ler.data.data
			console.log(cer)
            let cap = `${spas}*「 T I K T O K 」*

*📛Author:* ${cer.nickname}
*📒Title:* ${cer.description}

KETIK .ttmp3 UNTUK MENDOWNLOAD AUDIO
${wm}`
            conn.sendFile(m.chat, cer.play, 'mp.4', cap, m)
            conn.sendMessage(m.chat, {
                react: {
                    text: "✅",
                    key: m.key,
                }
            })
        } catch (e) {
            console.error(e)
            conn.sendMessage(m.chat, {
                react: {
                    text: "✅",
                    key: m.key,
                }
            })
            let data = await axios.get(`https://aemt.me/download/ttdl?url=${text}`);
            console.log(data.data);
            let capt = `${spas}*「 T I K T O K 」*

*📛Author:* ${wm}
*📒Title:* ${data.data.result.title}

KETIK .ttmp3 UNTUK MENDOWNLOAD AUDIO
${wm}`;
            conn.sendFile(m.chat, data.data.result.video[0], 'mp4', capt, m);
        }
    }
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.limit = 5
handler.command = /^(tt|tiktok)$/i

handler.limit = true

module.exports = handler