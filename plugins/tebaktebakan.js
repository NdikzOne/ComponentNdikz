let fetch = require('node-fetch')

let timeout = 180000
let poin = `${Math.floor(Math.random() * 5000)}`
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebaktebakan = conn.tebaktebakan ? conn.tebaktebakan : {};
    let id = m.sender;
    let tiketcoin = 1;

    if (id in conn.tebaktebakan) {
        return conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebaktebakan[id][0]);
    }

    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let teks = `${htki} *TEBAK TEBAKAN* ${htka}
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik hint untuk bantuan
ketik suren untuk menyreh
Bonus: ${poin} Money
Saldo: 5 Saldo
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

    conn.tebaktebakan[id] = [
        msg,
        json,
        setTimeout(() => {
            if (conn.tebaktebakan[id]) {
                conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebaktebakan[id][0]);
                delete conn.tebaktebakan[id];
            }
        }, timeout),
        key
    ];
}
handler.help = ['tebaktebakan']
handler.tags = ['game']
handler.command = /^tebaktebakan/i
handler.limit = true
handler.group = false

module.exports = handler