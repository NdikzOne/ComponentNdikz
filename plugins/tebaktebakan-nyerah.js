let handler = async (m, { conn }) => {
      conn.tebaktebakan = conn.tebaktebakan ? conn.tebaktebakan : {}
    let id = m.chat
    if (!(id in conn.tebaktebakan)) throw false
    let json = conn.tebaktebakan[id][1]
    let ans = json.jawaban.trim()
    delete conn.tebaktebakan[id]
    m.reply(`anda berhasil menyerah dari soal tersebut\ndan jawabannya: ${ans}`)
}
handler.command = /^nyerah-teba$/i
handler.limit = true

module.exports = handler