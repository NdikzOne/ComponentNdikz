let handler = async(m, { conn, text, usedPrefix }) => {
let pesan = text

    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya', m)
    if (text > 2000) return conn.reply(m.chat, 'Teks Kepanjangan!', m)
    
    let user = global.db.data.users[m.sender]

    let korban = `120363087660869913`
    var nomor = m.sender
    let spam1 = `${pesan}`

    conn.sendMessage(korban + '@g.us', {text: spam1 })

    let logs = `[!] Berhasil mengirim pesan ke nomor ${korban}`
    conn.reply(m.chat, logs, m)
}
handler.help = ['email']
handler.tags = ['owner']

handler.command = /^(zx2)$/i
handler.rowner = false
handler.limit = true
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler