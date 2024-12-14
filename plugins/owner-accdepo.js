let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { conn, text }) => {
    if(!text) throw 'ID User Deposit nya?\nContoh: /accdepo 19271'
    if (global.data.users[text].limitdepo <= 0) {
 m.reply('ID Tidak Ada dalam Database')
 } else if(global.data.users[text].limitdepo > 0) {
    const x = JSON.parse(fs.readFileSync("./database/userdepo.json"))
    let xe = x.users[text]
  //  console.log(xe)
    global.db.data.users[m.sender].saldo += xe.deposit * 1
    global.db.data.users[m.sender].balance += xe.deposit * 2
    let capt = `「 *TRANSAKSI SUKSES* 」\n
┏━━━━━━『 *DETAIL INFO* 』
┊🤖 𝐓𝐫𝐚𝐧𝐬𝐚𝐤𝐬𝐢 𝐌𝐞𝐭𝐨𝐝𝐞: Manual
┊💌 𝐒𝐍 𝐈𝐝 𝐃𝐞𝐩𝐨𝐬𝐢𝐭: ${xe.id}
┊❇️ 𝐉𝐔𝐌𝐋𝐀𝐇: Rp${xe.deposit}
┊🏧 𝐋𝐚𝐬𝐭𝐒𝐚𝐥𝐝𝐨: Rp${xe.lastsaldo}
┊📆 𝐓𝐀𝐍𝐆𝐆𝐀𝐋: ${xe.date}
┊⚡ 𝐒𝐓𝐀𝐓𝐔𝐒: ✅ *SUKSES*
┊📶 𝐁𝐮𝐲𝐞𝐫 𝐍𝐚𝐦𝐞: ${xe.name}
┊📄 𝐋𝐢𝐧𝐤 𝐀𝐏𝐈: wa.me/${xe.nowa}
┕━━━━━━━━━━━━═┅═━––––––๑

Ketik /saldo Untuk Melihat Saldo Akun`
global.data.users[text].limitdepo -= 1
    conn.sendMessage(xe.nowa + '@s.whatsapp.net', {text: capt })
    m.reply('✅ Berhasil Acc User Deposit')
    m.reply(capt)
 }
}
handler.help = ['accdepo <id>']
handler.tags = ['store']
handler.command = /^(accdepo|dones)$/i
handler.limit = true
handler.premium = false
module.exports = handler