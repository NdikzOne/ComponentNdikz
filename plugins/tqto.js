let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

const Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: '𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
let handler = async (m, { conn, text, usedPrefix, command }) => {
let thanksnya = `${htjava} *ᴛ ʜ ᴀ ɴ ᴋ ꜱ - ꜰ ᴏ ʀ*

┌─⊷ *THANKS TO*
➠ MyTeam ZXcoderID
➠ Penyedia API
➠ Baileys 
➠ Whiskey
➠ MiftaH
➠ BOTCAHX
➠ SanzyYT
➠ RapZ
➠ Rifky
➠ Akzyn
➠ Imam
➠ My Supporter
└──────────────`
let img = './media/specialsFor.jpg'
    await conn.sendFile(m.chat, img, null, thanksnya, m)
   }
    
handler.help = ['thanksto']
handler.tags = ['terimakasih']
handler.command = /^(tqto|thanksto|specials)$/i
handler.limit = false

module.exports = handler