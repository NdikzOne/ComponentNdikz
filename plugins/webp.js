const axios = require('axios');
const cheerio = require('cheerio');
let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
    let url = text.trim();
    if (!url.startsWith('http')) throw 'Masukkan URL yang valid';
    
    try {
        let downloadLink = await getDownloadLink(url);
        if (!downloadLink) throw 'Tautan unduhan tidak ditemukan';
        
        // Unduh file
        let response = await fetch(downloadLink);
        if (!response.ok) throw `Gagal mengunduh file (${response.status}: ${response.statusText})`;
        
        // Kirim file ke pengguna
        let mediaData = await response.buffer();
        conn.sendMessage(m.chat, { video: mediaData, caption: wm }, {quoted: m})
      //  conn.sendFile(m.chat, mediaData, 'file.webp', 'Berhasil mengunduh file', m);
    } catch (err) {
        throw `Terjadi kesalahan: ${err}`;
    }
}

handler.help = ['getwebp <url>'];
handler.tags = ['tools'];
handler.command = /^getwebp$/i;

module.exports = handler;

async function getDownloadLink(url) {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const downloadLink = $('.download').attr('href');
    return downloadLink;
}