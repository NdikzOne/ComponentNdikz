let handler = async (m, { conn }) => {
    try {
        conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (!(id in conn.tebakbendera)) throw false
    let json = conn.tebakbendera[id][1]
    let ans = json.name.trim()
    delete conn.tebakbendera[id]
     m.reply(`anda berhasil menyerah dari soal tersebut\ndan jawabannya: ${ans}`)
    } catch (e) { m.reply('tidak ada soal untuk saat ini') }
}
handler.command = /^nyerah-tekbe$/i
handler.limit = false

module.exports = handler