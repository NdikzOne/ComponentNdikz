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
    if (!text) return conn.reply(m.chat, `*❏ GET NUMBER*\n\n• ${usedPrefix}minsaldo number|nominal\n*Example:* ${usedPrefix}minsaldo 6289654360447|1000\n\n• ${usedPrefix}minsaldo @tag|nominal\n*Example:* ${usedPrefix}minsaldo @6289654360447|1000`, m)
  if (typeof db.data.users[hl[0]] == 'undefined') throw 'Pengguna tidak ada didalam data base'
    let uersz = global.db.data.users[hl[0]].saldo
    var jumlah = 1 * hl[1]
    
    //let send = no(number) + "@s.whatsapp.net"
    let korban = hl[0]
    var nomor = m.sender
    global.db.data.users[hl[0]].saldo -= jumlah
  //  let spam1 = `*❏ Saldo Anda Bertambah Oleh Admin*\n> saldo sekarang = ketik .store\n\nKetik: *.topup Untuk Menikmati Pembelanjaan Di Fitur Store Kami*`
  //  conn.sendMessage(hl[0] + '@s.whatsapp.net', {text: spam1 })
   // conn.reply(send, spam1, m)

    let logs = `[!] Berhasil mengirim MinSaldo ke nomor ${korban}`
    conn.reply(m.chat, logs, m)
}
handler.help = ['minsaldo']
handler.tags = ['owner']

handler.command = /^(minsaldo)$/i
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