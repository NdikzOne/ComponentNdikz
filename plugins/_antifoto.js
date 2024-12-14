/*
By : Aine
*/
let handler = m => m

handler.before = function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let sender = global.db.data.chats[m.sender]
  

  let isFoto = m.mtype
  if (chat.antiFoto && isFoto) {
    if(isFoto === "imageMessage"){
      if (global.opts) {
        if (isAdmin || !isBotAdmin){		  
        }else{
         // m.reply('*Sticker detected*\nSorry I deleted 😅') // ganti text terserah kamu 
          this.sendMessage(m.chat, { delete: m.key })
          // this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
        }return true
      }
    }
  }
  return true
}

handler.group = true
module.exports = handler
