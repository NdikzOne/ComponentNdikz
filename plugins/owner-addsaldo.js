let handler = async(m, { conn, text, usedPrefix }) => {
//let [number, pesan] = text.split `|`
    
    let user = global.db.data.users[m.sender]
	function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }
    var hl = []
  hl[0] = text.split('|')[0]
  hl[0] = no(hl[0]) + "@s.whatsapp.net"
  hl[1] = text.split('|')[1]
    if (!text) return conn.reply(m.chat, `*❏ GET NUMBER*\n\n• ${usedPrefix}addsaldo number|nominal\n*Example:* ${usedPrefix}addsaldo 6289654360447|1000\n\n• ${usedPrefix}addsaldo @tag|nominal\n*Example:* ${usedPrefix}addsaldo @⁨+62 896-5436-0447⁩|1000`, m)
  if (typeof db.data.users[hl[0]] == 'undefined') throw 'Pengguna tidak ada didalam data base'
    let uersz = global.db.data.users[hl[0]].saldo
    var jumlah = 1 * hl[1]
    
    //let send = no(number) + "@s.whatsapp.net"
    let korban = hl[0]
    var nomor = m.sender
    global.db.data.users[hl[0]].saldo += jumlah
    let logs = `[!] Berhasil mengirim Saldo ke nomor ${korban}`
    m.reply(logs)
    let spam1 = `*❏ DONE KAK DEPOSIT SUDAH BERHASIL SEJUMLAH*\n> ketik .store atau .saldo\n\nKetik: *.topup Untuk Menikmati Pembelanjaan Di Fitur Store Kami*`
    conn.sendMessage(hl[0], {text: spam1 })
   // conn.reply(send, spam1, m)
}
handler.help = ['addsaldo']
handler.tags = ['owner']

handler.command = /^(addsaldo)$/i
handler.rowner = true
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