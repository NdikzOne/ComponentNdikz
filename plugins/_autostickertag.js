const fetch = require("node-fetch");
const WSF = require('wa-sticker-formatter');
const { MessageType } = require('@adiwajshing/baileys');

let handler = async (m, { conn }) => {
  try {
    let res = await fetch('https://telegra.ph/file/c93956661fdb432ed77ac.jpg');
    if (!res.ok) throw await res.text();
    let img = await res.buffer();
    // Menggunakan WSF (WhatsApp Sticker Formatter) untuk mengonversi gambar menjadi stiker
    let stiker = await new WSF.Sticker(img, {
      pack: global.packname,
      author: global.author,
    }).build();
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { asSticker: true });
    throw stiker.toString();
  } catch (e) {
    console.error(e);
    throw e;
  }
};

handler.customPrefix = /^(@6282134237950|@6283870688581|@6289684037375)$/i;
handler.command = new RegExp;

module.exports = handler;