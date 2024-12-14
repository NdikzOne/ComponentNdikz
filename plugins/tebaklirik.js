const fs = require('fs')
const fetch = require('node-fetch')

let timeout = 180000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebaklirik = conn.tebaklirik ? conn.tebaklirik : {};
    let id = m.sender;
    let timeout = 180000;
    let poin = `${Math.floor(Math.random() * 5000)}`
    let tiketcoin = 1;

    if (id in conn.tebaklirik) {
        return conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebaklirik[id][0]);
    }

    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')).json();
    let json = src[Math.floor(Math.random() * src.length)];
    let teks = `
${json.soal}

Tipe: ${json.tipe}
Timeout: *${(timeout / 1000).toFixed(2)} detik*
Ketik hint untuk bantuan
ketik suren untuk menyerah
Bonus: ${poin} XP
TiketCoin: ${tiketcoin} Tiketcoin
`.trim();

    let msg = await conn.sendMessage(m.chat, {
        text: teks,
        contextInfo: {
            externalAdReply: {
                title: "",
                body: wm,
                thumbnailUrl: thumb,
                sourceUrl: "",
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });

    let { key } = msg;

    conn.tebaklirik[id] = [
        msg,
        json,
        setTimeout(() => {
            if (conn.tebaklirik[id]) {
                conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebaklirik[id][0]);
                delete conn.tebaklirik[id];
            }
        }, timeout),
        key
    ];
}
handler.help = ['tebaklirik']
handler.tags = ['game']
handler.command = /^tebaklirik/i
handler.limit = true
handler.group = false

module.exports = handler