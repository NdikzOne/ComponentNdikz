let handler = async (m, { conn }) => {
    try {
   conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
    let id = m.chat
    if (!(id in conn.tebakgambar)) throw false
    let json = conn.tebakgambar[id][1]
    let ans = json.jawaban.trim()
    delete conn.tebakgambar[id]
     m.reply(`anda berhasil menyerah dari soal tersebut\ndan jawabannya: ${ans}`)
    } catch (e) { m.reply('tidak ada soal untuk saat ini') }
}
handler.command = /^nyerah-hint$/i
handler.limit = false

module.exports = handler