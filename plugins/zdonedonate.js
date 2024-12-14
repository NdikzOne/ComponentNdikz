const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text, usedPrefix, command}) => {
    if (!text) return conn.reply(m.chat, `Silahkan masukan laporan kamu\n\nContoh: ${usedPrefix + command} mad bafuq,qris,5.142.`, m)
    if (text > 300) return conn.reply(m.chat, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', m)
    var nomor = m.sender
    const teks1 = `*[ DONATE 💲 ]*\nNomor : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${text}`
    conn.reply('6283834713950@s.whatsapp.net', teks1, m)
    conn.reply(m.chat, '✔️ berhasil input! tunggu beberapa saat, admin akan mengkonfirmasi melalui wa!', m)
}
handler.help = ['donedonate <nama>,<metode>,<jumlah>']
handler.tags = ['info']
handler.command = /^(donedonate|donedonates|doneedonate)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.limit = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler