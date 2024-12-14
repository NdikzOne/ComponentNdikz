let fs = require('fs');

let handler = async (m, { conn, text }) => {
    let who;
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text;
    else who = m.chat;
    if (!who || !text) throw `Tag orangnya!\nAtau: .addowner 6285xxxxx`;
    const prem = JSON.parse(fs.readFileSync("./database/owner.json"))
    try {
        global.owner.push(who.split`@`[0] || text)
        prem.push(who.split`@`[0] || text)
  fs.writeFileSync("./database/owner.json", JSON.stringify(prem))
m.reply(`${who || text} Telah Menjadi Owner`)
    } catch (e) {
        console.error(e);
        m.reply('Terjadi kesalahan saat menambah owner');
    }
};

handler.help = ['addowner [@user]'];
handler.tags = ['owner'];
handler.command = /^addowner$/i;
handler.owner = true;

module.exports = handler;