const axios = require('axios');
let handler = async (m, { conn, bot, usedPrefix, command, text }) => {
    let [nomor, nominal] = text.split ` `
    if(!nomor) throw `Contoh: /${command} 082xxxxxx`
    if(!nominal) throw `Contoh: /${command} ${nomor} 5\n\nHarus berupa angka jika tidak mau erorr!!\n dan harus menggunakan kelipatan 5 contoh:\n/dana ${nomor} 5, /dana ${nomor} 10, /dana ${nomor} 15 dan seterusanya`
    let cmd = `DANA${nominal}`
let ref = Math.floor(Math.random() * 100000000)
let h2hkey = apikeyhost
  axios('https://atlantich2h.com/transaksi/create',{
    method: 'POST',
    data: new URLSearchParams(Object.entries({
      api_key: h2hkey,
	 code: cmd,
  reff_id: ref,
  target: nomor 
    }))}).then((res) => {
        
        if (res.data.status == false) {
          m.reply(`*_${res.data.message}_*`)// Biar tau apa yang salah cuyyy
            }
        if (res.data.status == true) {
      let anjay = `${res.data.message}`
      let sukses = `
ID DEPOSIT: ${res.data.data.id}
    REFF ID: ${ref}
    LAYANAN: ${res.data.data.layanan}
    CODE ID: ${res.data.data.code}
    TUJUAN: ${nomor}
    HARGA: Rp${res.data.data.price}
    SN: ${res.data.data.sn}
    STATUS: sukses
    DIBUAT PADA: ${res.data.data.created_at}

@zxcoderid
`
    //  console.log(res.data)
            m.reply(sukses)
 // reply(`success ${cmd} dana${nomor}`);
 }
            })
    
}
handler.help = ['wd']
handler.tags = ['xp']
handler.owner = true
handler.command = /^(wd|tarik)$/i
module.exports = handler