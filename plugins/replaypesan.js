let handler = async (m, { conn }) => {
    if (!m.quoted) {
        conn.reply(m.chat, 'Maaf, kamu harus reply pesan yang ingin dikembalikan.', m)
        return
    }

    let target = m.quoted
    let text = target.text || target.caption || (target.message && target.message.text)

    if (text) {
        conn.reply(m.chat, text, m)
    } else {
        conn.reply(m.chat, 'Pesan yang di-reply tidak memiliki teks.', m)
    }
}

handler.help = ['kembalikan']
handler.tags = ['tools']
handler.command = /^kembalikan$/i
handler.limit = true
handler.group = true

module.exports = handler