let fetch = require('node-fetch')
const { fetchJson, sleep } = require("../functions.js")
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
 let anu = await fetchJson(`https://api-miftah.xyz/api/tools/get-tempmail?api_key=IchanZX`)
m.reply(`${anu.data}`)
}

handler.help = ['tempmail']
handler.tags = ['store']
handler.command = /^(tempmail)$/i

module.exports = handler