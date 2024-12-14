let handler = async (m, { conn, text }) => {
  let premiumList = [
    {
      duration: "1 DAY",
      price: 2000,
      command: "1D",
    },
    {
      duration: "3 DAY",
      price: 4000,
      command: "3D",
    },
    {
      duration: "7 DAY",
      price: 6000,
      command: "7D",
    },
    {
      duration: "30 DAY",
      price: 10000,
      command: "30D",
    },
    {
      duration: "360 DAY",
      price: 100000,
      command: "360D",
    },
  ];

  if (!text) {
    let listText = "*PREMIUM LIST:*\n\n";
    premiumList.forEach((premium, index) => {
      listText += `${index + 1}. PREMIUM ${premium.duration}\n`;
      listText += `◦  Price : *${premium.price.toLocaleString()}* Saldo\n`;
      listText += `◦  *Command :* .buyprem ${premium.command}\n\n`;
    });

    conn.reply(m.chat, listText, m, {
      contextInfo: {
        externalAdReply: {
          title: namabot,
          body: "Hello, please choose your premium plan.",
          thumbnailUrl: "https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/20230602_095645.jpg",
          sourceUrl: "https://instagram.com/moe.sazumiviki",
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });

    return;
  }

  let days = parseInt(text);
  if (isNaN(days)) return conn.reply(m.chat, "Invalid input. Please enter the number of days you want to buy.", m);

  let selectedPremium = premiumList.find((premium) => premium.command.toLowerCase() === text.toLowerCase());
  if (!selectedPremium) return conn.reply(m.chat, "Premium not found.", m);

  let user = global.db.data.users[m.sender];
  if (!user) return conn.reply(m.chat, "nomor kamu belum terdaftar dalam database.", m);

  let balance = db.data.users[m.sender].saldo
  let price = selectedPremium.price;
 // if (balance > price) return conn.reply(m.chat, "Saldo kamu kurang silahkan deposit", m);
    if (balance < price) {
 m.reply('Saldo User Anda Kurang!. Silahkan Melakukan Deposit Terlebih Dahulu')
 } else if(balance > price) { 

  user.premium = true;
  user.premiumDate = Date.now() + days * 24 * 60 * 60 * 1000;
  user.limit += days;
    
  	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
db.data.users[m.sender].saldo -= price * 1

  conn.reply(m.chat, `You have successfully purchased *${selectedPremium.duration}* Premium.`, m);
 }
};

handler.command = /^buyprem$/i;
handler.help = ["buyprem [duration]"];
handler.tags = ["main"];
handler.register = true;

module.exports = handler;