let fs = require('fs');

let handler = async (m, { conn }) => {
    // Mengurutkan nomor owner secara ascending
    const sortedOwners = global.owner.sort((a, b) => a.localeCompare(b));

    // Menyiapkan list vCard dari nomor owner
    let list = sortedOwners.map((owner, index) => {
        return {
            displayName: `Owner ${index + 1}`,
            vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:Owner ${index + 1}\nitem1.TEL;waid=${owner}:${owner}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
        };
    });

    // Mengirim pesan dengan vCard dari daftar nomor owner
    conn.sendMessage(m.chat, {
        contacts: {
            displayName: `Daftar ${list.length} Nomor Owner`,
            contacts: list
        }
    }, { quoted: m });
};

handler.help = ['ouy'];
handler.tags = ['info'];
handler.command = /^kontakowner|ctowner|contactowner$/i;

module.exports = handler;