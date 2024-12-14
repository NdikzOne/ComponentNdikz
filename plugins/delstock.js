let fs = require('fs')

let handler = async (m, { args }) => {
  const filePath = './database/linkstock.json';

  try {
    // Jika argumen yang diberikan adalah 'all', hapus semua stock
    if (args[0] && args[0].toLowerCase() === 'all') {
      // Hapus semua teks dan link dalam file JSON
      await fs.promises.writeFile(filePath, JSON.stringify({ links: [], texts: [] }, null, 2));
      return m.reply(`Berhasil Menghapus Semua Stock.`);
    }

    // Jika tidak, lanjutkan dengan proses penghapusan berdasarkan nomor urutan
    if (!args[0]) throw 'Masukkan nomor urutan dari teks atau link yang ingin dihapus.'

    // Baca isi file JSON jika sudah ada
    let jsonData = { links: [], texts: [] };
    if (fs.existsSync(filePath)) {
      let data = fs.readFileSync(filePath);
      jsonData = JSON.parse(data);
    }

    // Periksa apakah input berupa nomor dan dalam rentang yang valid
    let index = parseInt(args[0]) - 1;
    if (isNaN(index) || index < 0 || index >= jsonData.texts.length) {
      throw 'Nomor urutan tidak valid.';
    }

    // Hapus teks dan link sesuai dengan urutan
    jsonData.texts.splice(index, 1);
    jsonData.links.splice(index, 1);

    // Tulis kembali data JSON ke dalam file
    await fs.promises.writeFile(filePath, JSON.stringify(jsonData, null, 2));
    m.reply(`Berhasil Menghapus Stock.`);

  } catch (error) {
    console.error('Error:', error);
    m.reply('Gagal menghapus teks dan link dari database.');
  }
}

handler.help = ['delstock <nomor urutan>', 'delstock all']
handler.tags = ['tools']
handler.command = ['delstock']

module.exports = handler