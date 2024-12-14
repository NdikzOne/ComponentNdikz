let fetch = require('node-fetch')
let fs = require('fs')
const { sticker } = require('../lib/sticker')
const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')
let { webp2png } = require('../lib/webp2mp4')
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
    let user_id = m.sender.split('@')[0]
    let user = user_id
    const xs = JSON.parse(fs.readFileSync("./database/userdepo.json"));
     //   global.data = x
    if (xs.users[user_id].limitdepo <= 0) {
 sendmessage(user_id, 'Fitur Ini Tidak bisa digunakan ketika anda Belum Melakukan /Deposit')
 } else if(xs.users[user_id].limitdepo > 0) {
     const x = JSON.parse(fs.readFileSync("./database/userdepo.json"))
    let es = user_id
    let xe = x.users[es]
  let admin = `${Math.floor(Math.random() * 500)}`
  let id = `${Math.floor(Math.random() * 99999)}`
  let cpt = `「 *TRANSAKSI PROSES* 」\n
┏━━━━━━『 *DETAIL INFO* 』
┊🤖 𝐓𝐫𝐚𝐧𝐬𝐚𝐤𝐬𝐢 𝐌𝐞𝐭𝐨𝐝𝐞: Manual
┊💌 𝐒𝐍 𝐈𝐝 𝐃𝐞𝐩𝐨𝐬𝐢𝐭: ${xe.id}
┊❇️ 𝐉𝐔𝐌𝐋𝐀𝐇: Rp${xe.deposit}
┊📆 𝐓𝐀𝐍𝐆𝐆𝐀𝐋: ${xe.date}
┊⚡ 𝐒𝐓𝐀𝐓𝐔𝐒: ⏳ *PROSES*
┊📶 𝐁𝐮𝐲𝐞𝐫 𝐍𝐚𝐦𝐞: ${xe.name}
┊📄 𝐈𝐝 𝐔𝐬𝐞𝐫: ${user_id}
┕━━━━━━━━━━━━═┅═━––––––๑

Ketik /Acc ${user_id}`
  let cpts = `*ADA TRANSAKSI MASUK*\n*DARI ID @${user_id}*\n\nDENGAN ID DEPOSIT : ${x.id}\n*Tunggu sampai dia tf hihi*`
  let capt = `OKE KAK DEPOSIT SEDANG DI PROSES MOHON MENUNGGU SAMPAI *SYSTEM* MENGKONFIRMASI DEPOSIT TERSEBUT`
  //	global.db.data.users[m.sender].id -= `${text}`
  
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Mana Bukti Screenshot nya dek?'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
    let out = `${link}`
        m.reply(capt)
   await conn.sendFile('6283197291875@s.whatsapp.net', out, 'order.jpg', `${cpt}`, m)
   // return conn.sendFile('6281232615640@s.whatsapp.net', thm, 'order.jpg', `${cpt}`, m)
}
}
handler.help = ['confirm']
handler.tags = ['store']

handler.command = /^(confirm|bukti)$/i
handler.premium = false
handler.register = false
handler.limit = 5
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}