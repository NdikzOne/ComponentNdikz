const fs = require('fs')
let handler  = async (m, { conn, text}) => {
    let sender = m.sender.split('@')[0]
    let sampah = `./plugins/jadibot/${sender}@s.whatsapp.net`
    fs.rmdir(sampah, { recursive: true }, (err) => {
  if (err) {
    m.reply('Kamu belum menjadibot ketik .jadibot terlebih dahulu');
  } else {
    m.reply('Session jadibot berhasil dihapus');
  }
});
	//fs.unlinkSync(`./plugins/jadibot/${sender}.json`)
}
handler.help = ['berhenti', 'stopjadibot']
handler.tags = ['tools']
handler.command = /^(berhenti|stopjadibot)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => require('crypto').randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)