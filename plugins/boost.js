var { performance } = require("perf_hooks")

let handler = async (m, { conn }) => {
  var old = performance.now()
  var news = performance.now()
  var speed = `${news - old}`
  var finish = `Bot berhasil di percepat!\n\nKecepatan: *${speed}* detik.`

  const arr = [
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
    { text: `${finish}`, timeout: 100 }
  ];

  const lll = await conn.sendMessage(m.chat, { text: wait }, { quoted: m });

  for (let i = 0; i < arr.length; i++) {
    await new Promise(resolve => setTimeout(resolve, arr[i].timeout));
    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: lll,
        type: 14,
        editedMessage: {
          conversation: arr[i].text
        }
      }
    }, {});
  }
};

handler.command = handler.help = ['boost'];
handler.tags = ['owner'];
module.exports = handler;
handler.rowner = true
handler.fail = true