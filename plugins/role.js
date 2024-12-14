let levelling = require('../lib/levelling')

let handler = m => {
  let user = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
    let img = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=${user.role}`
    let capt = `┌───⊷ *R O L E - K A M U*
▢ Nama : *${user.name}*
▢ Role : *${user.role}*
└──────────────

*Tingkatkan Lagi Untuk Lebih Banyak Akses!*`
conn.sendFile(m.chat, img, null, capt, m);
}

handler.help = ['role']
handler.tags = ['role']
handler.register = true
handler.command = /^role|rank$/i

module.exports = handler
