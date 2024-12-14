let handler = async(m, { conn, text, usedPrefix }) => {
let [pesan, cs] = text.split `|`

    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya', m)
    if (!cs) return conn.reply(m.chat, 'Silahkan masukan Nomornya contoh /zx yes|6222xxxxx', m)
    if (text > 2000) return conn.reply(m.chat, 'Teks Kepanjangan!', m)
    
    let user = global.db.data.users[m.sender]

    let korban = cs
    var nomor = m.sender
    let spam1 = `${pesan}`

   // conn.reply(korban + '@g.us', spam1, m)
    conn.sendMessage(korban + '@s.whatsapp.net', {text: spam1 })

    let logs = `[!] Berhasil mengirim pesan ke nomor ${korban}`
    conn.reply(m.chat, logs, m)
}
handler.help = ['email']
handler.tags = ['owner']

handler.command = /^(zx)$/i
handler.rowner = true
handler.limit = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler