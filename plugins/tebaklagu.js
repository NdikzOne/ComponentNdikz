let fetch = require('node-fetch')

let timeout = 180000
let poin = 1000
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {};
    let id = m.sender;
    let timeout = 180000;
    let poin = `${Math.floor(Math.random() * 5000)}`
    let tiketcoin = 1;

    if (id in conn.tebaklagu) {
        return conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebaklagu[id][0]);
    }

    let src = await (await fetch('https://raw.githubusercontent.com/Aiinne/scrape/main/tebaklagu.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    // if (!json.status) throw json
    let caption = `
TEBAK JUDUL LAGU 
Artis : ${json.artis}
Judul : _____
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik hint untuk bantuan
ketik suren
Bonus: ${poin} XP
Tiketcoin: 1 Tiketcoin
*Balas pesan ini untuk menjawab!*`.trim();
    m.reply(caption)

    let msg = await conn.sendFile(m.chat, json.lagu, 'audio/mp3', caption, m);

    let { key } = msg;

    conn.tebaklagu[id] = [
        msg,
        json,
        setTimeout(() => {
            if (conn.tebaklagu[id]) {
                conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.judul}*`, conn.tebaklagu[id][0]);
                delete conn.tebaklagu[id];
            }
        }, timeout),
        key
    ];
}
handler.help = ['tebaklagu']
handler.tags = ['game']
handler.command = /^tebaklagu$/i
handler.limit = true
handler.group = false
module.exports = handler
