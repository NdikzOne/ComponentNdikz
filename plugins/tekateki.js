let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
  conn.tekateki = conn.tekateki ? conn.tekateki : {};
  let id = m.sender;
  let timeout = 180000;
  let poin = `${Math.floor(Math.random() * 5000)}`
  let tiketcoin = 1;

  if (id in conn.tekateki) {
      return conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tekateki[id][0]);
  }

  let src = await (await fetch('https://raw.githubusercontent.com/qisyana/scrape/main/tekateki.json')).json();
  let json = src[Math.floor(Math.random() * src.length)];
  let teks = `
${json.pertanyaan}

Soal: ${json.soal}
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

  conn.tekateki[id] = [
      msg,
      json,
      setTimeout(() => {
          if (conn.tekateki[id]) {
              conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tekateki[id][0]);
              delete conn.tekateki[id];
          }
      }, timeout),
      key
  ];
}
handler.help = ['tekateki']
handler.tags = ['game']
handler.command = /^tekateki/i
handler.limit = true
handler.group = true

module.exports = handler