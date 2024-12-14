const axios = require("axios");
let uploadFile = require('../lib/uploadFile.js')
let uploadImage = require('../lib/uploadImage.js')

let handler = m => m
handler.before = async (m, { conn }) => {
  let chat = global.db.data.chats[m.chat];
    let mime = (m.msg || m).mimetype || "";
      let isFoto = m.mtype
    if(isFoto === "imageMessage"){
  if (chat.antiPorn) {
   //   conn.chatRead(m.chat);
  let media = await m.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  try {
        let res = await (await fetch(`https://api.miftahganzz.my.id/api/tools/nsfwcheck?url=${link}&apikey=IchanZX`)).json()
        let as = res.data
        let ac = await as.nudity
        let nsfw = ac.sexual_display
if (nsfw > 0.04) {
            let user = m.sender;
            let mention = `@${user.replace(/@.+/, "")}`;
            await conn.reply(m.chat, `🐱 *${mention}* Detected sending NSFW`, m);
            await conn.sendMessage(m.chat, {
              delete: {
                remoteJid: m.chat,
                fromMe: false,
                id: m.key.id,
                participant: m.key.participant,
              },
            });
          } else {
console.log('media aman')
              conn.reply(m.chat, `media aman dengan score nsfw ${nsfw}`, m);
}
      } catch (e) {
        console.log(e);
        conn.reply(m.chat, "Error!", m);
      }
  }
    }
  };

module.exports = handler;
