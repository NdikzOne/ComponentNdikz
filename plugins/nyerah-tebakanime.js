let handler = async (m, { conn }) => {
    try {
        conn.tebakanime = conn.tebakanime ? conn.tebakanime : {}
    let id = m.chat
    if (!(id in conn.tebakanime)) throw false
    let json = conn.tebakanime[id][1]
    let ans = json.jawaban.trim()
    delete conn.tebakanime[id]
    m.reply(`anda berhasil menyerah dari soal tersebut\ndan jawabannya: ${ans}`)
    } catch (e) { m.reply('tidak ada soal untuk saat ini') }
}
handler.command = /^nyerah-nime$/i
handler.limit = true

module.exports = handler