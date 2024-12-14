const FormData = require('form-data');
const axios = require('axios')
let levelling = require('../lib/levelling')
let handler = async m => {
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/bd49b3a2274bde2fb3c3a.jpg')
        let ppUrl = await convertToTelegraph(pp)
          let user = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
    var img = `${webapi}api/canvas/rankbar?pp=${ppUrl}&nama=${user.name}&rank=${user.role}&level=${user.level}&xp=${user.exp - min}&xpmax=${max - user.exp}&apikey=${apichan}`
    let capt = `┌───⊷ LEVEL
▢ Nama : *${user.name}*
▢ Level : *${user.level}*
▢ XP : *(${user.exp - min}/${xp})*
▢ Role : *${user.role}*
└──────────────

Kurang *${max - user.exp}* Untuk Naik Level!`
conn.sendFile(m.chat, img, null, capt, m);
}

handler.help = ['levelup']
handler.tags = ['xp']
handler.register = true
handler.command = /^level(|up)$/i

module.exports = handler

async function convertToTelegraph(imageUrl) {
    const fetch = require('node-fetch');
const FormData = require('form-data');
const fs = require('fs');
    try {
        // Mengunduh gambar dari URL
        const response = await fetch(imageUrl);
        const buffer = await response.buffer();

        // Membuat objek FormData dan menambahkan file ke dalamnya
        const form = new FormData();
        form.append('file', buffer, { filename: 'image.jpg' });

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