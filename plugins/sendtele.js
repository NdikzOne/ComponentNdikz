let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   const token = '7685292743:AAFiNEjHdpDSTwBalbidyGPW2JpASo3tYWI';
const chatId = '-5585327044';
const message = 'Hello from your Telegram bot!';

const apiUrl = `https://api.telegram.org/bot${token}/sendMessage`;

fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    chat_id: chatId,
    text: message,
  }),
})
  .then(response => response.json())
  .then(data => {
    console.log('Message sent successfully:', data);
  })
  .catch(error => {
    console.error('Error sending message:', error);
  });
}
handler.help = ['attp <teks>']
handler.tags = ['sticker']
handler.command = /^(sendtele)$/i
handler.limit = true
handler.premium = false

module.exports = handler