let handler = async (m, { conn }) => {
    try {
  conn.tebakgame = conn.tebakgame ? conn.tebakgame : {}
    let id = m.chat
    if (!(id in conn.tebakgame)) throw false
    let json = conn.tebakgame[id][1]
    let ans = json.jawaban.trim()
    delete conn.tebakgame[id]
     m.reply(`anda berhasil menyerah dari soal tersebut\ndan jawabannya: ${ans}`)
    } catch (e) { m.reply('tidak ada soal untuk saat ini') }
}
handler.command = /^nyerah-tega$/i
handler.limit = false

module.exports = handler