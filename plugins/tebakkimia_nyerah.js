let handler = async (m, { conn }) => {
    try {
   conn.tebakkimia = conn.tebakkimia ? conn.tebakkimia : {}
    let id = m.chat
    if (!(id in conn.tebakkimia)) throw false
    let json = conn.tebakkimia[id][1]
    let ans = json.unsur.trim()
    delete conn.tebakkimia[id]
      //  clearTimeout(this.tebakkimia[id][3])
     m.reply(`anda berhasil menyerah dari soal tersebut\ndan jawabannya: ${ans}`)
    } catch (e) { m.reply('tidak ada soal untuk saat ini') }
}
handler.command = /^nyerah-teki$/i
handler.limit = false

module.exports = handler