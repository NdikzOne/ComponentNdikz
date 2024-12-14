const fsPromises = require('fs').promises;
const fetch = require("node-fetch");
const moment = require("moment-timezone");
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
const { createHash } = require('crypto')
 const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("@adiwajshing/baileys")
let handler = async (m, { conn, text, args, usedPrefix }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender;
    let user = global.db.data.users[m.sender];
    
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
    
    // Cek apakah input memiliki '.done' di akhir, lalu hilangkan '.done' untuk validasi
    if (text.endsWith('.done')) {
        text = text.replace('.done', '').trim(); // Hapus '.done' untuk validasi nama.umur
        // Cek dan inisialisasi jika `global.registers[m.sender]` belum ada
        if (!global.registers) global.registers = {}; // Inisialisasi `global.registers` jika undefined
        if (!global.registers[m.sender]) global.registers[m.sender] = {}; // Inisialisasi objek untuk user jika belum ada
        let zxx = global.registers[m.sender]
        user.name = zxx.nama;
        user.age = zxx.umur;
        user.reglast = new Date() * 1;
        user.registered = true;
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
        return;
    }
 //   let [ats, umr, anny] = text.split('.')
    
    if (user.registered === true) throw `Anda sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg <SN|SERIAL NUMBER>`;
    
    if (!Reg.test(text)) throw `Format salah\n*${usedPrefix}daftar nama.umur*`;
    
    let [_, name, splitter, age, anny] = text.match(Reg);
    
    if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)';
    if (!age) throw 'Umur tidak boleh kosong (Angka)';
    
    age = parseInt(age);
    
    if (age > 60) throw 'Umur terlalu tua 😂';
    if (age < 6) throw 'Bayi bisa ngetik sesuai format bjir ._.';
    
    let __waktuh = (new Date() - global.db.data.users[m.sender].reglast);
    let _waktuh = (3600000 - __waktuh);
    let waktuh = clockString(_waktuh);
    
    if (new Date() - global.db.data.users[m.sender].reglast > 86400000) {
        
        let pp = await conn.profilePictureUrl(who, 'image').catch(_ => "https://telegra.ph/file/bd49b3a2274bde2fb3c3a.jpg");

        // --------------------- REGISTER BUTTON -------------------------
        let capt = `Halo kak ${m.pushName}😉👋, Silahkan memilih\n🧮 Layanan Untuk Metode Verifikasi di bawah ya, pilih Lewat Gmail Atau Langsung`;
        
        let sections = [
            {
                title: `*PILIH METODE UNTUK VERIFIKASI*`,
                rows: [
                    { title: `📧 | Verfikasi Dari Email`, description: `Fitur Verifikasi Kode Melalui Email`, id: `.verify-emailauth` },
                    { title: `🛍️ | Verifikasi Langsung`, description: `Menu untuk jualan akun dan Fitur JB Lainnya`, id: `.daftar ${name}.${age}.done` },
                ]
            }
        ];
        
        let listMessage = {
            title: 'Pilih Metode', 
            sections
        };

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": {
                        "deviceListMetadata": {},
                        "deviceListMetadataVersion": 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        contextInfo: {
                            mentionedJid: [m.sender],
                            isForwarded: true,
                            businessMessageForwardInfo: { businessOwnerJid: conn.decodeJid(conn.user.id) },
                        },
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: capt
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: 'Silahkan pilih salah satu'
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            title: '',
                            subtitle: '',
                            hasMediaAttachment: true,
                            ...(await prepareWAMessageMedia({ image: { url: pp } }, { upload: conn.waUploadToServer }))
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                { "name": "single_select", "buttonParamsJson": JSON.stringify(listMessage) },
                                { "name": "quick_reply", "buttonParamsJson": `{"display_text":"OWNER 👑","id":".owner"}` },
                                { "name": "cta_url", "buttonParamsJson": "{\"display_text\":\"MY WEBSITE 🛍️\",\"url\":\"https://zxcoderid.my.id\"}" },
                            ],
                        }),
                    })
                }
            }
        }, {});

        if (!anny) {
           if (!global.registers) global.registers = {}; // Inisialisasi `global.registers` jika undefined
        if (!global.registers[m.sender]) global.registers[m.sender] = {}; // Inisialisasi objek untuk user jika belum ada
            global.registers[m.sender].nama = name;
            global.registers[m.sender].umur = age;
            await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
            return;
        }
    } else {
        m.reply(`Kamu sudah *daftar*.\nMohon tunggu ${waktuh} untuk bisa *daftar* kembali.`);
    }
}

handler.help = ['kuisy'];
handler.tags = ['game'];
handler.command = /^(reg|daftar|register|verify)$/i;
handler.group = false;
handler.private = false;
handler.limit = true;
handler.fail = null;

module.exports = handler;

function clockString(ms) {
    let h = Math.floor(ms / 3600000);
    let m = Math.floor(ms / 60000) % 60;
    let s = Math.floor(ms / 1000) % 60;
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':');
}
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}