let handler = m => m;
const similarity = require('similarity')
const util = require('util');
const { createHash } = require('crypto')
const moment = require("moment-timezone");
// Definisikan threshold untuk kesamaan jawaban
const threshold = 0.75;
handler.before = async function (m) {
    
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss');
    let wibh = moment.tz('Asia/Jakarta').format('HH');
    let wibm = moment.tz('Asia/Jakarta').format('mm');
    let wibs = moment.tz('Asia/Jakarta').format('ss');
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss');
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss');
    let wktuwib = `${wibh}:${wibm}:${wibs}`;
   
    let d = new Date(new Date() + 3600000);
    let locale = 'id';
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5];
    let week = d.toLocaleDateString(locale, { weekday: 'long' });
    const date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    
    try {
        let id = m.sender;
        let reward = randomInt(100, 800);
        let users = global.db.data.users[m.sender];
        let body = (typeof m.text == 'string' ? m.text : '');
        conn.emailsauth = conn.emailsauth ? conn.emailsauth : {};

        if (id in conn.emailsauth) {
            let json = conn.emailsauth[id][1];
            let isSurrender = /^(cancel)$/i.test(body);
            let isHint = /^(hint)$/i.test(body);
            if (isHint) {
            let ans = json.jawaban.trim()
    let clue = ans.replace(/[AIUEOaiueo]/g, '_')
    conn.reply(m.chat, '```' + clue + '```\n', conn.emailsauth[id][0])
            return;
        }
        if (isSurrender) {
            await conn.reply(m.chat, `🚩 Membatalkan Pendaftaran`, m);
            clearTimeout(conn.emailsauth[id][3]);
            delete conn.emailsauth[id];
            return;
        }
            if (m.text.toLowerCase() == json.toLowerCase().trim()) {
                // Cek dan inisialisasi jika `global.registers[m.sender]` belum ada
        if (!global.registers) global.registers = {}; // Inisialisasi `global.registers` jika undefined
        if (!global.registers[m.sender]) global.registers[m.sender] = {}; // Inisialisasi objek untuk user jika belum ada
        let zxx = global.registers[m.sender]
        users.name = zxx.nama;
        users.age = zxx.umur;
        users.reglast = new Date() * 1;
        users.registered = true;
        let limitnye = global.db.data.users[m.sender].limit += 20;
        let sn = createHash('md5').update(m.sender).digest('hex');
        // Pendaftaran Berhasil
        await conn.sendMessage(m.chat, {
            text: `╭─「 Status 」\n│◉ Status: ☑️ Sukses Terdaftar\n│◉ Nama: ${zxx.nama}\n│◉ Umur: ${zxx.umur} tahun\n╰────────────\n◉ SN: ${sn}\n\nJangan lupa baca rules ya kak...\nData user yang tersimpan dijamin aman tanpa tersebar 📁\n*.allmenu [Menampilkan Semua Fitur]*\n\n⻝ Date: ${week}, ${date}\n⻝ Time: ${wktuwib}`,
            contextInfo: {
                externalAdReply: {
                    title: "✅ Sukses Daftar",
                    body: 'Sekarang Kamu Bisa Menggunakan Fiturku',
                    thumbnailUrl: pickRandom(waifu),
                    sourceUrl: "",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        });
                clearTimeout(conn.emailsauth[id][3]);
                delete conn.emailsauth[id];
            } else if (similarity(m.text.toLowerCase(), json.toLowerCase().trim()) >= threshold) {
                m.reply(`*Dikit Lagi!*`);
            } else {
                m.reply(`*Salah!*`);
            }
        }
    } catch (e) {
        return conn.reply(m.chat, util.format(e), m);
    }
    return true;
}

handler.exp = 0;

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatNumber(number) {
    return number.toLocaleString();
}

module.exports = handler;
