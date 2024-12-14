const moment = require("moment-timezone");
const { sticker } = require('../lib/sticker')
const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')
let { webp2png } = require('../lib/webp2mp4')
let handler = async(m, { conn, text, usedPrefix }) => {
let [id, produk, jumlah, nomors, keterangan] = text.split `,`

// Time
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh}:${wibm}:${wibs}`
   
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    const date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
	
	if (!id) return conn.reply(m.chat, 'Id transaksi', m)
    if (!produk) return conn.reply(m.chat, 'Silahkan masukan Produk yang akan dikirim', m)
    if (!jumlah) return conn.reply(m.chat, 'Silahkan masukan jumlahnya', m)
    if (!nomors) return conn.reply(m.chat, 'Silahkan masukan nomor nya', m)
    if (!keterangan) return conn.reply(m.chat, 'Silahkan masukan keterangan-nya', m)
    if (text > 2000) return conn.reply(m.chat, 'Teks Kepanjangan!', m)
    
    let user = global.db.data.users[m.sender]

    let korban = jb2
    let korbans = jb1
    var nomor = m.sender
    let cpt = `「 ⚡ *TRANSAKSI KE #${id}* 」

📦 *PRODUCT:* ${produk}
❇️ *JUMLAH:* Rp${toRupiah(jumlah)}
📆 *TANGGAL:* ${date}
⚡ *STATUS:* Completed ✅
📶 *No Tujuan:* ${nomors}
📄 *Keterangan:* ${keterangan}

All Trusted Me:
https://t.me/ichanzx_store
Thank you for buying in our store!!

©ZXcoderiD | 2023`

   // conn.reply(korban + '@g.us', spam1, m)
    let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Fotonya mana'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
    let out = `${link}`
    await conn.sendMessage(korban + '@g.us', { image: { url: out }, caption: cpt })
    await conn.sendMessage(korbans + '@g.us', { image: { url: out }, caption: cpt })
    
    // tambahan
    const token = '6609425616:AAEINs4Qaq5WMYZQyEHf7H8pQqOU8oMkAAE';
const channelUsername = '@ichanzx_store'; // Ganti dengan nama pengguna saluran Anda
const message = 'Hello from your Telegram bot!';

const apiUrl = `https://api.telegram.org/bot${token}/sendPhoto`;

fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    chat_id: channelUsername,
    photo: out,
    caption: cpt,
  }),
})
  .then(response => response.json())
  .then(data => {
    console.log('Message sent successfully:', data);
  })
  .catch(error => {
    console.error('Error sending message:', error);
  });
    
   //await conn.sendFile(korban + '@g.us', out, 'order.jpg', `${cpt}`, m)

    let logs = `[✅] *TESTI BERHASIL DIKIRIM SILAHKAN CEK GRUP*`
    conn.reply(m.chat, logs, m)
}
handler.help = ['email']
handler.tags = ['owner']

handler.command = /^(send|testi)$/i
handler.rowner = false
handler.limit = true
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler

function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}