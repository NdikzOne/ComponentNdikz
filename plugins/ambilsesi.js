const fs = require('fs');
const archiver = require('archiver');
const path = require('path');

let handler = async (m, { conn }) => {
  m.reply('Sedang mempersiapkan backup...')
// Usage example
const sourceFolder = '../IchanZX';
const outputZip = '../';

archiveFolder(sourceFolder, outputZip);
}

handler.help = ['backup']
handler.tags = ['owner']
handler.command = /^ambilsesi$/i

handler.premium = true
module.exports = handler
function archiveFolder(sourceFolder, outputZip) {
  // Create a write stream to the output ZIP file
  const output = fs.createWriteStream(outputZip);
  const archive = archiver('zip', {
    zlib: { level: 9 } // Set compression level (optional)
  });

  // Pipe the archive data to the output file
  archive.pipe(output);

  // Add the source folder to the archive
  archive.directory(sourceFolder, false);

  // Finalize the archive and close the write stream
  archive.finalize();

  console.log('Folder archived successfully!');
}