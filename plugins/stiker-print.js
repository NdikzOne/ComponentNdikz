

let fetch = require('node-fetch')
let { sticker } = require('../lib/sticker.js')
let uploadFile = require('../lib/uploadFile.js')
let uploadImage = require('../lib/uploadImage.js')
let fs = require('fs')
let { MessageType } = require('@adiwajshing/baileys')
let moment = require('moment-timezone')

let handler = async (m, { conn, usedPrefix, command, text }) => {
if (!text) throw `Teksnya?`
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let ppUrl = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/65c43c76b126a2e1a8409.png");
let pp = await conn.profilePictureUrl(who, 'image')
let hasil = `https://api.lolhuman.xyz/api/carbon?apikey=IchanZX&code=print(${text})&language=python`
//await conn.sendFile(m.chat, hasil, '', wm, m)
   // const buffer = Buffer.from(hasil, 'base64')
   let stiker = await sticker(null, global.API(hasil), global.packname, global.author)
 conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
//conn.sendMessage(m.chat, {text: pp })
}
handler.help = ['elaina']
handler.tags = ['elaina']

handler.command = /^(print|code)$/i
handler.premium = false
handler.register = false
handler.limit = 5
module.exports = handler