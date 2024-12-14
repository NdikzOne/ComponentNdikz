let handler = async (m, { conn }) => {
    conn.tebaktebakan = conn.tebaktebakan ? conn.tebaktebakan : {}
    let id = m.chat
    if (!(id in conn.tebaktebakan)) throw false
    let json = conn.tebaktebakan[id][1]
    let ans = json.jawaban.trim()
    let clue = ans.replace(/[AIUEO]/g, '_')
    conn.reply(m.chat, '```' + clue + '```\nBalas soalnya, bukan pesan ini', conn.tebaktebakan[id][0])
}
handler.command = /^teba$/i
handler.limit = true
module.exports = handler