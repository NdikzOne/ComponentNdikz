let fetch = require('node-fetch')
const { fetchJson, sleep } = require("../functions.js")
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
    if (!args || !args[0]) throw `✳️ Contoh :\n${usedPrefix + command} U2Vzc2lvbjpcHfailNNCpJoT_hJGfb19 (id temp mail tadi)`
 let anu = await fetchJson(`https://api-miftah.xyz/api/tools/get-tempmail-inbox?api_key=IchanZX&id=${args}`)
m.reply(`${anu.success}`)
}

handler.help = ['tempmail']
handler.tags = ['store']
handler.command = /^(get-mail)$/i

module.exports = handler