let handler = async (m, { conn, usedPrefix }) => {
    conn.susunkata = conn.susunkata ? conn.susunkata : {};
    let id = m.sender;
    let timeout = 180000;
    let poin = `${Math.floor(Math.random() * 5000)}`
    let tiketcoin = 1;

    if (id in conn.susunkata) {
        return conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.susunkata[id][0]);
    }

    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')).json();
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

    conn.susunkata[id] = [
        msg,
        json,
        setTimeout(() => {
            if (conn.susunkata[id]) {
                conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.susunkata[id][0]);
                delete conn.susunkata[id];
            }
        }, timeout),
        key
    ];
}

handler.help = ['susunkata'];
handler.tags = ['game'];
handler.command = /^susunkata/i;
handler.limit = true;
handler.group = false;

module.exports = handler;