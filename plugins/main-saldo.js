let handler = async (m) => {
    let who
    let user = global.db.data.users[m.sender]
    let name = await conn.getName(m.sender)
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
    m.reply(`*━━ CHECK YOUR INFO ━━*

 _• *Name:* ${name}_
 _• *Nomer:* ${m.sender.split('@')[0]}_
 _• *Saldo:* Rp${toRupiah(user.saldo)}_

*Note :*
_Saldo hanya bisa untuk beli di bot_
_Tidak bisa ditarik atau transfer_!`)
}
handler.help = ['dompet [@user]']
handler.tags = ['xp']
handler.command = /^(saldo|ceksaldo)$/i
module.exports = handler

function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}