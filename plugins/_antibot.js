let handler = m => m

handler.before = async function(m, { isAdmin, isBotAdmin, isBaileys }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let sender = global.db.data.chats[m.sender]
  let hapus = m.key.participant
  let bang = m.key.id
  if (chat.antibot) {
    if (m.isBaileys && m.fromMe == true){
        if (isAdmin || !isBotAdmin){		  
        } else {
          m.reply(`Bot Lain Terdeteksi\n\nHusshhh Sana Pergi Dari Grup Ini!!!`)
    return await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }return true
    }
  }
  return true
}

module.exports = handler