const acrcloud = require('acrcloud');
const { inspect } = require('util'); // Jika Anda memerlukan util.inspect di bagian lain
const fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, command }) => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/video|audio/.test(mime)) {
		let buffer = await q.download()
		await m.reply(wait)
		try {
		let media = await convertToTelegraph(buffer)
        console.log(media)
		let json = await (await fetch(`${webapi}api/stalker/music?url=${media}&apikey=${apichan}`)).json()		
        conn.sendMessage(m.chat, { text: json.data }, { quoted: m })
        } catch (err) {
      throw `${eror}`
    }
 } else throw `Reply audio/video with command ${usedPrefix + command}`
};

// Menambahkan properti ke handler
handler.help = ['whatmusic'];
handler.tags = ['tools'];
handler.command = /^(whatmusic|whatsmusic|musikapa|whatmusik|detectmusic|deteksimusik|detectmusik)$/i;

// Mengekspor handler
module.exports = handler;

async function convertToTelegraph(buffer) {
    const fetch = require('node-fetch');
const FormData = require('form-data');
const fs = require('fs');
    try {

        // Membuat objek FormData dan menambahkan file ke dalamnya
        const form = new FormData();
        form.append('file', buffer, { filename: 'files.mp3' });

        // Kirim permintaan untuk mengunggah file ke tmpfiles.org
        const uploadResponse = await fetch('https://tmpfiles.org/api/v1/upload', {
            method: 'POST',
            body: form
        });

        // Mendapatkan respons JSON
        const data = await uploadResponse.json();

        // Cek jika respons sukses
        if (uploadResponse.ok) {
          //  console.log(data.data.url)
            // Kembalikan URL file yang diunggah
            const modifiedUrl = data.data.url.replace('org/', 'org/dl/');
            return modifiedUrl;
        } else {
            throw new Error(data.error || 'Failed to upload file');
        }
    } catch (error) {
        console.error('Error:', error);
        // Handle error accordingly
        return null;
    }
}
