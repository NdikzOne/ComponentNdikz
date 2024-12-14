var { fg } = require('api-dylux')
let fetch = require('node-fetch')
let axios = require('axios')
var { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let limit = 350 
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
	if (!args || !args[0]) throw `✳️ Contoh :\n${usedPrefix + command} https://www.instagram.com/xxxxx`
function createShortLink(longUrl) {
  // Mengimpor modul 'axios' untuk melakukan permintaan HTTP
  const axios = require('axios');

  // Endpoint TinyURL API
  const apiUrl = 'https://api.tinyurl.com/dev/api-create.php?url=';

  // Mengirim permintaan ke TinyURL API untuk membuat shortlink
  axios.get(apiUrl + encodeURIComponent(longUrl))
    .then(response => {
      const shortLink = response.data;
      console.log('Shortlink:', shortLink);
    })
    .catch(error => {
      console.error('Terjadi kesalahan:', error);
    });
}

// Contoh penggunaan
const longUrl = args;
createShortLink(longUrl);
    
 //   m.reply(`shortlink:${}`)
    }

handler.help = ['tessht']
handler.tags = ['downloader']
handler.command = /^(tsh)$/i

module.exports = handler