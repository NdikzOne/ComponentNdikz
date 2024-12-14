let fetch = require('node-fetch')

let timeout = 120000
let poin = 1000
let tiketcoin = 1
let src
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {};
    let id = m.sender;

    if (id in conn.tebakbendera) {
        return conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakbendera[id][0]);
    }

   if (!src) src = await (await fetch(global.API('https://raw.githubusercontent.com', '/qisyana/scrape/main/flag.json'))).json()
    let json = src[Math.floor(Math.random() * src.length)]
    if (!json) throw json
    let caption = `
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik hint untuk bantuan
ketik suren untuk menyerah
Bonus: ${poin} XP
Tiketcoin: ${tiketcoin} TiketCoin
`.trim();

    let msg = await conn.sendFile(m.chat, json.img, 'tebakbendera.jpg', caption, m, false, { thumbnail: Buffer.alloc(0) });

    let { key } = msg;

    conn.tebakbendera[id] = [
        msg,
        json,
        setTimeout(() => {
            if (conn.tebakbendera[id]) {
                conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakbendera[id][0]);
                delete conn.tebakbendera[id];
            }
        }, timeout),
        key
    ];
}
handler.help = ['tebakbendera']
handler.tags = ['game']
handler.command = /^tebakbendera/i
handler.limit = true
handler.group = false

module.exports = handler