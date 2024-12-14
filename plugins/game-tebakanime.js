let fetch = require('node-fetch')

let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakanime = conn.tebakanime ? conn.tebakanime : {};
    let id = m.sender;

    if (id in conn.tebakanime) {
        return conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakanime[id][0]);
    }

   let src = await (await fetch('https://raw.githubusercontent.com/unx21/ngetezz/main/src/data/nyenyenye.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
Waktu *${(timeout / 1000).toFixed(2)} Detik*
Ketik hint Untuk Bantuan
ketik suren untuk menyerah
Bonus: ${poin} XP
`.trim();

    let msg = await conn.sendFile(m.chat, json.img, 'tebakanime.jpg', caption, m, false, { thumbnail: Buffer.alloc(0) });

    let { key } = msg;

    conn.tebakanime[id] = [
        msg,
        json,
        setTimeout(() => {
            if (conn.tebakanime[id]) {
                conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakanime[id][0]);
                delete conn.tebakanime[id];
            }
        }, timeout),
        key
    ];
}
handler.help = ['tebakanime']
handler.tags = ['game']
handler.command = /^tebakanime/i
handler.limit = true
handler.group = false

module.exports = handler