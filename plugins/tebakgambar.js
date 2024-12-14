let fetch = require('node-fetch')

let timeout = 180000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {};
    let id = m.sender;

    if (id in conn.tebakgambar) {
        return conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakgambar[id][0]);
    }

    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
  // if (!json.status) throw json
  let caption = `
  ${json.deskripsi}
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik hint untuk hint
ketik suren untuk menyerah
Bonus: ${poin} XP
Tiketcoin: 1 Tiketcoin
    `.trim();

    let msg = await conn.sendFile(m.chat, json.img, 'tebakgambar.jpg', caption, m, false, { thumbnail: Buffer.alloc(0) });

    let { key } = msg;

    conn.tebakgambar[id] = [
        msg,
        json,
        setTimeout(() => {
            if (conn.tebakgambar[id]) {
                conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakgambar[id][0]);
                delete conn.tebakgambar[id];
            }
        }, timeout),
        key
    ];
}
handler.help = ['tebakgambar']
handler.tags = ['game']
handler.command = /^tebakgambar/i
handler.limit = true
handler.group = false

module.exports = handler