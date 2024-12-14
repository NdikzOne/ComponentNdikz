let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakkimia = conn.tebakkimia ? conn.tebakkimia : {};
    let id = m.sender;
    let timeout = 180000;
    let poin = `${Math.floor(Math.random() * 5000)}`
    let tiketcoin = 1;

    if (id in conn.tebakkimia) {
        return conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakkimia[id][0]);
    }

   let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let teks = `
Nama unsur dari lambang ${json.lambang} adalah...

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik hint untuk bantuan
ketik suren untuk menyerah
Bonus: ${poin} XP
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

    conn.tebakkimia[id] = [
        msg,
        json,
        setTimeout(() => {
            if (conn.tebakkimia[id]) {
                conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakkimia[id][0]);
                delete conn.tebakkimia[id];
            }
        }, timeout),
        key
    ];
}
handler.help = ['tebakkimia']
handler.tags = ['game']
handler.command = /^tebakkimia/i
handler.limit = true
handler.group = false

module.exports = handler