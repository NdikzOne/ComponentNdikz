let handler = m => m

handler.before = function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let sender = global.db.data.chats[m.sender]
  

  let isSticker = m.mtype
  if (chat.antiSticker && isSticker) {
    if(isSticker === "stickerMessage"){
      if (global.opts) {
        if (isAdmin || !isBotAdmin){		  
        }else{
          m.reply('Sticker terdeteksi!\nMaaf Sticker Telah Di Hapus.')
          this.sendMessage(m.chat, { delete: m.key })
        }return true
      }
    }
  }
  return true
}

module.exports = handler