const fs = require('fs');
const archiver = require('archiver');
const path = require('path');

let handler = async (m, { conn }) => {
  m.reply('Sedang mempersiapkan backup...')
  let backupName = `ZXcoderID.zip`
  let output = fs.createWriteStream(backupName);
  let archive = archiver('zip', { zlib: { level: 9 } });

  output.on('close', function () {
    let caption = `Berikut adalah file backup kode bot:\nNama file: ${backupName}\nUkuran file: ${(archive.pointer() / 1024 / 1024).toFixed(2)} MB`
    conn.sendFile(m.chat, backupName, backupName, caption, m)
  //  conn.sendMessage(m.chat, { document: backupName, mimetype: 'document', fileName: backupName}, {quoted: m})
  });

  archive.on('warning', function (err) {
    if (err.code === 'ENOENT') {
      console.warn(err);
    } else {
      throw err;
    }
  });

  archive.on('error', function (err) {
    throw err;
  });

  archive.pipe(output);
  archive.glob('**/*', {
    cwd: path.resolve(__dirname, '../'),
    ignore: ['node_modules/**', 'IchanZX.data.json/**', 'ZXcoderID.zip/**', '.npm/**', ]
  });
  archive.finalize();
}

handler.help = ['backup']
handler.tags = ['owner']
handler.command = /^backup$/i

handler.premium = true
module.exports = handler