let handler = m => m
handler.before = async (m, { conn, isjadibot, owner }) => {
	if (isjadibot) {
    if (new Date() * 1 >= global.db.data.users[m.sender].jadibotDate) {
      conn.reply(m.chat, "*Maaf waktu untuk status *Jadibot* anda telah berakhir :(*\n*Ketik .b-tiketbot untuk membelinya*", m).then(() => {
        global.db.data.users[m.sender].jadibot = false
        const data = global.owner.filter(([id, isCreator]) => id && isCreator)
         this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m).then(() => {
    //       this.sendContact(m.chat, owner[0], this.getName(owner[0] + '@s.whatsapp.net'), m).then(() => {
           })
        })
      }
    }
 }
module.exports = handler