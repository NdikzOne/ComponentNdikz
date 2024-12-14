const fetch = require('node-fetch');
let handler = m => m;

handler.before = async function(m, { conn }) {
    // Cek jika pesan dari bot sendiri (fromMe), lewati
    if (m.fromMe) return !0;
    
    // Cek jika bukan pesan dari grup, lewati
    if (!m.isGroup) return !1;
    
    let chat = global.db.data.chats[m.chat];
    
    // Cek jika fitur simi tidak diaktifkan di grup, lewati
    if (!chat.simi) return !0;
    
    try {
        // Fetch ke API Simi
        let res = await fetch(`https://api.lolhuman.xyz/api/simi?apikey=82389ffbed5cd3ab5e3bdd81&text=${encodeURIComponent(m.text)}&badword=true`);
        if (!res.ok) throw 'Maaf, simi lagi sibuk';
        
        let json = await res.json();
        if (json.result == "Request failed!") {
            await m.reply("Gapaham cok :'v");
        } else {
            await m.reply(`${json.result}`);
        }
    } catch (e) {
        // Menangani error jika terjadi
        await m.reply(e.toString());
    }
}

module.exports = handler;