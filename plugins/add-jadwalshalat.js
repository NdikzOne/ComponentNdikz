let { MessageType } = require('@adiwajshing/baileys')
const fs = require('fs')
let handler = async (m, { conn, text, usedPrefix }) => {
    const filePath = './database/idgc.json';
    const jsonData = { chatId: m.chat }; // Misalnya Anda ingin menyimpan ID grup dalam objek JSON

    try {
        // Tulis data JSON ke dalam file
        await fs.promises.writeFile(filePath, JSON.stringify(jsonData, null, 2)); // Menggunakan fs.promises untuk menggunakan Promise API
        m.reply(`Berhasil mengaktifkan jadwal shalat dan tidur pada grup\nID GC: ${m.chat}`);
    } catch (error) {
        console.error('Gagal membuat file JSON:', error);
        m.reply('Gagal membuat file JSON.');
    }
}
handler.help = ['addtojadwal']
handler.tags = ['owner']
handler.command = /^(addtojadwal)$/i
handler.admin = true
handler.rowner = true
handler.group = true
handler.fail = null
module.exports = handler