const axios = require("axios");
const fetch = require("node-fetch");
const { MessageType } = require('@adiwajshing/baileys');

let handler = async (m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'Harap masukkan username', m);

    await m.reply('Sedang mencari...');

    try {
        let response = await fetchJson(`https://api.github.com/users/${text}`);
        let thumb = await getBuffer(response.avatar_url);

        let createdDate = new Date(response.created_at);
        let formattedDate = `${createdDate.getDate()}-${createdDate.getMonth() + 1}-${createdDate.getFullYear()}`;

        let hasil = `*── 「 GITHUB STALK 」 ──*
➸ *Bio*: ${response.bio || '-'}
➸ *Perusahaan*: ${response.company || '-'}
➸ *Repo Publik:* ${response.public_repos || '-'}
➸ *Gists Publik:* ${response.public_gists || '-'}
➸ *Follower:* ${response.followers || '-'}
➸ *Following:* ${response.following || '-'}
➸ *Lokasi:* ${response.location || '-'}
➸ *Tanggal Pembuatan Akun:* ${formattedDate || '-'}
➸ *Link:* ${response.html_url || '-'}`;

        await conn.sendMessage(m.chat, { image: thumb, caption: hasil, quoted: m });
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        await conn.sendMessage(m.chat, 'Terjadi kesalahan saat melakukan pencarian di GitHub.', MessageType.text);
    }
}

handler.help = ['githubstalk <username>'];
handler.tags = ['internet'];
handler.command = /^(ghstalk|githubstalk)$/i;
handler.limit = true;

module.exports = handler;

const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            resolve(json);
        })
        .catch((err) => {
            reject(err);
        });
});

const getBuffer = async (url, options) => {
    try {
        options ? options : {};
        const res = await axios({
            method: "get",
            url,
            headers: {
                'DNT': 1,
                'User-Agent': 'GoogleBot',
                'Upgrade-Insecure-Request': 1
            },
            ...options,
            responseType: 'arraybuffer'
        });
        return res.data;
    } catch (e) {
        console.error(`Error : ${e}`);
    }
}