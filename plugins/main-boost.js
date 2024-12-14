let { performance } = require('perf_hooks')

let handler = async (m, { conn }) => {
let old = performance.now()
   let neww = performance.now()
   let speed = `${neww - old}`
   let finish = `*Bot Berhasil Dipercepat*\n\n*_Kecepatan: ${speed} Detik!*`
    
const asd = [
    { text: "[▒▒▒▒▒▒▒▒▒▒]", timeout: 100 },
    { text: "[█▒▒▒▒▒▒▒▒▒]", timeout: 100 },
    { text: "[██▒▒▒▒▒▒▒▒]", timeout: 100 },
    { text: "[███▒▒▒▒▒▒▒]", timeout: 100 },
    { text: "[████▒▒▒▒▒▒]", timeout: 100 },
    { text: "[█████▒▒▒▒▒]", timeout: 100 },
    { text: "[██████▒▒▒▒]", timeout: 100 },
    { text: "[███████▒▒▒]", timeout: 100 },
    { text: "[████████▒▒]", timeout: 100 },
    { text: "[█████████▒]", timeout: 100 },
    { text: "[██████████]", timeout: 100 },
    { text: "𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳...", timeout: 100 },
    { text: finish, timeout: 100 }
  ];

  const erq = await conn.sendMessage(m.chat, { text: 'ʟᴏᴀᴅɪɴɢ...' }, { quoted: m });

     for (let i = 0; i < asd.length; i++) {
    await new Promise(resolve => setTimeout(resolve, asd[i].timeout));
await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: erq,
        type: 14,
        editedMessage: {
          conversation: asd[i].text
        }
      }
    }, { quoted: m });
  }
  //   conn.reply(m.chat, finish, m)
}
handler.help = ['boost', 'refresh']
handler.tags = ['info']
handler.command = /^boost|refresh/i

handler.rowner = true 


handler.fail = null
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}