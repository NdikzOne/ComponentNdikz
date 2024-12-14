let fetch = require('node-fetch')

let timeout = 180000
let poin = 1000
let tiketcoin = 1
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakgame = conn.tebakgame ? conn.tebakgame : {};
    let id = m.sender;

    if (id in conn.tebakgame) {
        return conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakgame[id][0]);
    }

    let src = await (await fetch('https://raw.githubusercontent.com/qisyana/scrape/main/tebakgame.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
  // if (!json.status) throw json
  let caption = `
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik hint untuk clue
ketik suren untuk menyerah
Bonus: ${poin} XP
TiketCoin: ${tiketcoin}
    `.trim();

    let msg = await conn.sendFile(m.chat, json.img, 'tebakgame.jpg', caption, m, false, { thumbnail: Buffer.alloc(0) });

    let { key } = msg;

    conn.tebakgame[id] = [
        msg,
        json,
        setTimeout(() => {
            if (conn.tebakgame[id]) {
                conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakgame[id][0]);
                delete conn.tebakgame[id];
            }
        }, timeout),
        key
    ];
}
handler.help = ['tebakgame']
handler.tags = ['game']
handler.command = /^tebakgame/i
handler.limit = true
handler.group = false

module.exports = handler