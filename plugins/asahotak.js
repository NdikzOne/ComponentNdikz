let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
  conn.asahotak = conn.asahotak ? conn.asahotak : {};
  let id = m.sender;
  let timeout = 180000;
  let poin = `${Math.floor(Math.random() * 5000)}`
  let tiketcoin = 1;

  if (id in conn.asahotak) {
      return conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.asahotak[id][0]);
  }

  let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json')).json();
  let json = src[Math.floor(Math.random() * src.length)];
  let teks = `
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

  conn.asahotak[id] = [
      msg,
      json,
      setTimeout(() => {
          if (conn.asahotak[id]) {
              conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.asahotak[id][0]);
              delete conn.asahotak[id];
          }
      }, timeout),
      key
  ];
}
handler.help = ['asahotak']
handler.tags = ['game']
handler.command = /^asahotak/i
handler.limit = true
handler.group = true

module.exports = handler