let handler = async (m, { conn }) => {
    try {
   conn.tebaklirik = conn.tebaklirik ? conn.tebaklirik : {}
    let id = m.chat
    if (!(id in conn.tebaklirik)) throw false
    let json = conn.tebaklirik[id][1]
    let ans = json.jawaban.trim()
    delete conn.tebaklirik[id]
    m.reply(`anda berhasil menyerah dari soal tersebut\ndan jawabannya: ${ans}`)
    } catch (e) { m.reply('tidak ada soal untuk saat ini') }
    
}
handler.command = /^nyerah-teli$/i
handler.limit = true

module.exports = handler