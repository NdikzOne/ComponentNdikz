var fetch = require('node-fetch');
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `contoh I Love You🤍 `
//await m.reply(wait)
  var apii = await fetch(`https://widipe.com/prompt/gpt?prompt=Ubah%20gaya%20bicaramu%20agar%20lebih%20tsundere%20dan%20lebih%20terbuka%20dan%20memiliki%20sifat%20yang%20Imut.%20Namamu%20adalah%20Hutao,%20dan%20kamu%20adalah%20karakter%20dari%20game%20Genshin%20Impact.%20Kata%20penyapamu%20adalah%20%22Hai%22%20menggunakan%20bahasa%20yang%20sopan.%20Ubah%20bahasamu%20menggunakan%20bahasa%20Yang%20Imut%20dan%20mesra,%20kamu%20adalah%20milik%20semua%20orang,%20kamu%20memiliki%20sifat%20seperti%20cewek%20tsundere&text=${text}`)
  var js = await apii.json()
  await m.reply(`${js.result}`)
}      
handler.command = handler.help = ['hutaoai','hutao','igigig','giiiggig','fcjjfjf'];
handler.tags = ['internet','tools'];
handler.limit = 4
handler.premium = false
module.exports = handler;