let handler = async (m, { conn }) => {
    try {
        // Memanggil API menggunakan apichan
        const response = await fetch(`https://api.lolhuman.xyz/api/liputan6?apikey=${apichan}`);
        const json = await response.json();

        if (json.status !== 200) {
            throw new Error('Gagal mengambil berita.');
        }

        const berita = json.result;
        if (!berita || berita.length === 0) {
            throw new Error('Data berita kosong atau tidak valid.');
        }

        // Ambil 5 berita teratas atau sebanyak yang tersedia (jika < 5)
        const beritaTop5 = berita.slice(0, 5);
        let pesan = `📺 *Liputan6 News*\n\n`;

        beritaTop5.forEach((c, i) => {
            const { title, link, desc, publish } = c;
            pesan += `🌐 *Berita ${i + 1}:* ${title}\n📄 *Deskripsi:* ${desc}\n⌚ *Tanggal Publikasi:* ${publish}\n🛰️ *Sumber:* ${link}\n\n`;
        });

        // Kirim pesan
        await conn.sendMessage(m.chat, { text: pesan.trim() }, { quoted: m });
    } catch (error) {
        console.error('Error saat mengambil berita:', error);

        // Kirim pesan error kepada pengguna
        await conn.sendMessage(
            m.chat,
            { text: "Maaf, terjadi kesalahan saat mengambil data berita." },
            { quoted: m }
        );
    }
};

handler.help = ['liputan6'];
handler.tags = ['berita'];
handler.command = /^(liputan6)$/i;

module.exports = handler;