let handler = async (m, { conn, text, isROwner, isOwner, isAdmin, usedPrefix, command }) => {
  if (text) {
    if (isROwner) global.conn.welcome = text
    else if ((isOwner || isAdmin)) conn.welcome = text
    global.db.data.chats[m.chat].sWelcome = text
    let tekss = 'Welcome berhasil diatur\n@user (Mention)\n@subject (Judul Grup)\n@desc (Deskripsi Grup)'
    conn.sendMessage(m.chat, {
text: tekss,
contextInfo: {
externalAdReply: {
title: namabot,
thumbnailUrl: fotobotnya,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
  } else throw `Teksnya mana?\n\ncontoh:\n${usedPrefix + command} hai, @user!\nSelamat datang di grup @subject\n\n@desc`
}
handler.help = ['setwelcome <teks>']
handler.tags = ['group']
handler.command = /^(setwelcome|setw)$/i
handler.group = true

module.exports = handler
