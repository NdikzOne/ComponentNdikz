let fs = require('fs')

let uploadFile = require('../lib/uploadFile.js')
let uploadImage = require('../lib/uploadImage.js')

let handler = async (m, { text }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No media found'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  
  // Simpan link media ke dalam file
  const filePath = './database/linkstock.json';
  let jsonData = { links: [], texts: [], prices: [] };

  try {
      // Baca isi file JSON jika sudah ada
      if (fs.existsSync(filePath)) {
          let data = fs.readFileSync(filePath);
          jsonData = JSON.parse(data);
      }

      // Tambahkan teks, link, dan harga ke dalam array JSON
      if (text && text.trim().length > 0) {
          let [teks, harga] = text.trim().split('|'); // Pisahkan teks dan harga menggunakan |
          jsonData.texts.push(teks.trim());
          jsonData.links.push(link);
          jsonData.prices.push(parseFloat(harga)); // Konversi harga menjadi nomor
      } else {
          jsonData.links.push(link);
      }

      // Mendapatkan urutan hasil Array yang disimpan
      let index = jsonData.links.length;

      // Tulis kembali data JSON ke dalam file
      await fs.promises.writeFile(filePath, JSON.stringify(jsonData, null, 2));
      m.reply(`*Berhasil menyimpan stock silahkan cek .stock*\n*Stock Urutan: ${index}*`);
  } catch (error) {
      console.error('Gagal menyimpan link media:', error);
      m.reply('Gagal menyimpan link media.');
  }
}
handler.help = ['addstock <reply|media> [teks|harga]']
handler.tags = ['tools']
handler.command = ['addstock']

module.exports = handler