let handler = async (m, { conn }) => {
let caption = `*ON*`

await conn.reply(m.chat, `${caption}`, m)
conn.sendFile(m.chat, './mp3/haloo.opus', '', null, m, true, { type: "audioMessage", ptt: true, fileLength: 88738 })
       }
       
handler.customPrefix = /^(hai)/i
handler.limit = false
handler.command = new RegExp
module.exports = handler