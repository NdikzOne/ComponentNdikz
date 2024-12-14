let handler = async (m, { conn }) => {
      conn.tebakkata = conn.tebakkata ? conn.tebakkata : {}
    let id = m.chat
    if (!(id in conn.tebakkata)) throw false
    let json = conn.tebakkata[id][1]
    let ans = json.jawaban.trim()
    delete conn.tebakkata[id]
    m.reply(`anda berhasil menyerah dari soal tersebut\ndan jawabannya: ${ans}`)
}
handler.command = /^nyerah-teka$/i
handler.limit = true

module.exports = handler