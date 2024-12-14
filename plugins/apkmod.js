let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
    let img = 'https://telegra.ph/file/c5621567cdcde0a24da4e.jpg'
    let cap = `〣𝐆𝐮𝐝𝐚𝐧𝐠 𝐀𝐩𝐥𝐢𝐤𝐚𝐬𝐢 𝐌𝐨𝐝〣\n
Bingung Mau Cari Aplikasi Mod? Tenang ada *Sanemoku* yang bisa membantu kamu, untuk mendapatkan aplikasi mod APK\n
langsung Aja Cek : https://www.sanemoku.com/\n
Atau kalian ketik aja .sanemoku WhatsApp Immune`
    conn.sendFile(m.chat, img, null, cap, m)
    }

handler.help = ['apkmod']
handler.tags = ['downloader']
handler.limit = 5
handler.command = /^apk(mod|cheat)$/i

module.exports = handler