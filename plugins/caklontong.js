let fetch = require('node-fetch')

  var hl = []
  
let timeout = 180000
let poin = 500
let tiketcoin = 1
let handler = async (m, { conn, usedPrefix }) => {
    conn.caklontong = conn.caklontong ? conn.caklontong : {};
    let id = m.sender;

    if (id in conn.caklontong) {
        return conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.caklontong[id][0]);
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik hint untuk bantuan
ketik suren untuk menyerah
Bonus: ${poin} XP
Tiketcoin: ${tiketcoin} TiketCoin
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

    conn.caklontong[id] = [
        msg,
        json,
        setTimeout(() => {
            if (conn.caklontong[id]) {
                conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.caklontong[id][0]);
                delete conn.caklontong[id];
            }
        }, timeout),
        key
    ];
}
handler.help = ['caklontong']
handler.tags = ['game']
handler.command = /^caklontong/i
handler.limit = true

module.exports = handler