let handler = async (m, { conn }) => {
    try {
  conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {}
    let id = m.chat
    if (!(id in conn.tebaklagu)) throw false
    let json = conn.tebaklagu[id][1]
    let nya = json.judul
    delete conn.tebaklagu[id]
    m.reply(`anda berhasil menyerah dari soal tersebut\ndan jawabannya: ${nya}`)
    } catch (e) { m.reply('tidak ada soal untuk saat ini') }
}
handler.command = /^nyerah-cek$/i
handler.limit = true

module.exports = handler