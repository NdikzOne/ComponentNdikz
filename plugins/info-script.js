let handler = async (_0x539c03, {
  conn: _0x40b63f,
  text: _0x2e98d2,
  usedPrefix: _0x5cfef5,
  command: _0x316f25
}) => {
  _0x40b63f.reply(_0x539c03.chat, "Jangan lupa #donasi ya pak, biar bot selalu on 24/7 buat kamu<3", _0x539c03);
  _0x40b63f.relayMessage(_0x539c03.chat, {
    'requestPaymentMessage': {
      'currencyCodeIso4217': "IDR",
      'amount1000': 0x2160ec0,
      'requestFrom': _0x539c03.sender,
      'noteMessage': {
        'extendedTextMessage': {
          'text': " *Cari Sc Ya Pak? WokWokWok😂*\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕",
          'contextInfo': {
            'externalAdReply': {
              'showAdAttribution': false
            }
          }
        }
      }
    }
  }, {});
};
handler.help = ['sc'];
handler.tags = ["main"];
handler.command = /^(sc|script)$/i;
module.exports = handler;