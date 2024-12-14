let fs = require('fs')

let handler = async (m, { conn }) => {
  const filePath = './database/linkstock.json';
  let jsonData = { links: [], texts: [], prices: [] };

  try {
    // Baca isi file JSON jika sudah ada
    if (fs.existsSync(filePath)) {
      let data = fs.readFileSync(filePath);
      jsonData = JSON.parse(data);
    }

    // Pastikan ada setidaknya satu link tersedia dalam data JSON
    if (!jsonData.links || jsonData.links.length === 0) {
      throw '*Tidak ada stock yg tersedia* :v.';
    }

    // Kirim semua media yang tersedia beserta teks, harga, dan urutan stock
    for (let i = 0; i < jsonData.links.length; i++) {
      let text = jsonData.texts[i] || ''; // Ambil teks jika ada, jika tidak, gunakan string kosong
      let price = jsonData.prices[i] || ''; // Ambil harga jika ada, jika tidak, gunakan string kosong
      let order = i + 1; // Hitung urutan stock
      let caption = `Stock #${order}\n${text}\nPrice: ${price}`; // Gabungkan urutan, teks, dan harga ke dalam caption
      await conn.sendFile(m.chat, jsonData.links[i], '', caption, m);
    }

  } catch (error) {
    console.error('Error:', error);
    m.reply('*Tidak ada stock yg tersedia* :v.');
  }
}

handler.help = ['produk|stock']
handler.tags = ['tools']
handler.command = /^(stock|stok|produk|produc)$/i

module.exports = handler