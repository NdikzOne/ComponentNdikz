let handler = m => m
conn.kuisy = conn.kuisy ? conn.kuisy : {}
handler.before = async function (m, { text }) {
  let id = m.chat
let user = global.db.data.users[m.sender]
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/「 Verif 」/i.test(m.quoted.text)) return
  if (!(id in conn.kuisy)) return m.reply('Hadeh ngapain')
  if (m.quoted.id == conn.kuisy[id][0].id) {
  let kuisy = conn.kuisy[id][1]
  if (m.text.toLowerCase() == this.kuisy[id][1].toLowerCase()) {
      let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
      let ppv = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
      let images = `https://api.lolhuman.xyz/api/gtapassed?apikey=IchanZX&text1=Sukses%20Mendaftar!&text2=Name:${this.kuisy[id][2]}`
      let cap = `Daftar berhasil!

╭─${htki} *Sukses Mendaftar* ${htka}
│ Nama: ${this.kuisy[id][2]}
│ Umur: ${this.kuisy[id][3]} tahun
│ SN: *Censored*
│ Bonus: ketik .ambilbonus
┗━═┅═━––––––๑

*Jika SN kamu lupa ketik .ceksn*`
      conn.sendFile(m.chat, ppv, 'jpg', cap, m)
user.registered = true
delete this.kuisy[id]
    db._data.users[m.sender].exp += 5000
    clearTimeout(conn.kuisy[id][3])
    // delete conn.kuisy[id]
  } else {
    if (--conn.kuisy[id][2] == 0) {
      this.sendButton(m.chat, `*Kesempatan habis!*\n\nCoba Lagi lain waktu`, wm, null, [['kuisy', '.kuisy']], m)
      clearTimeout(conn.kuisy[id][3])
      delete conn.kuisy[id]
    } else this.reply(m.chat, `*OTP Salah!*`, m)
  }
 }
}

module.exports = handler