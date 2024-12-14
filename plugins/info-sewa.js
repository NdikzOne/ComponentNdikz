let handler = async m => m.reply(`Sewa Bot 5k / Bulan Minat?
Chat : https://wa.me/6283834713950
`.trim()) // Tambah sendiri kalo mau
handler.help = ['panel']
handler.tags = ['info']
handler.command = /^sewa$/i

module.exports = handler