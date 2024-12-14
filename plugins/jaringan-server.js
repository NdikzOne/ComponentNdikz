const axios = require('axios');
const os = require('os');

const Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};

let handler = async (m) => {
  try {
    const response = await axios.get('http://ip-api.com/json/');
    const serverInfo = response.data;

    conn.chatRead(m.chat);
    conn.sendMessage(m.chat, {
      react: {
        text: '🕒',
        key: m.key,
      }
    });

    let serverMessage = `*S E R V E R - I N F O*\n\n`;
    const osInfo = Styles(os.platform(), 1);
    const totalRAM = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(1);
    const freeRAM = (os.freemem() / (1024 * 1024 * 1024)).toFixed(1);
    const uptime = os.uptime();
    const uptimeFormatted = formatUptime(uptime);
    const processor = Styles(os.cpus()[0].model, 1);
    const totalCores = os.cpus().length;
    const hostname = os.hostname();
    const architecture = os.arch();
    const release = os.release();
    const numCPUs = os.cpus().length;

    serverMessage += `┌  ◦  *OS :* ${osInfo}\n`;
    serverMessage += `│  ◦  *RAM :* ${freeRAM} GB / ${totalRAM} GB\n`;
    serverMessage += `│  ◦  *Hostname :* root@IchanDev#123\n`;
//    serverMessage += `│  ◦  *Hostname :* ${hostname}\n`;
    serverMessage += `│  ◦  *Architecture :* ${architecture}\n`;
    serverMessage += `│  ◦  *Release :* ${release}\n`;
    serverMessage += `│  ◦  *Number of CPUs :* ${numCPUs} Cores\n`;
    serverMessage += `│  ◦  *Country :* ${serverInfo.country}\n`;
    serverMessage += `│  ◦  *CountryCode :* ${serverInfo.countryCode}\n`;
    serverMessage += `│  ◦  *Region :* ${serverInfo.region}\n`;
    serverMessage += `│  ◦  *RegionName :* ${serverInfo.regionName}\n`;
    serverMessage += `│  ◦  *City :* ${serverInfo.city}\n`;
    serverMessage += `│  ◦  *Zip :* ${serverInfo.zip}\n`;
    serverMessage += `│  ◦  *Lat :* ${serverInfo.lat}\n`;
    serverMessage += `│  ◦  *Lon :* ${serverInfo.lon}\n`;
    serverMessage += `│  ◦  *Timezone :* ${serverInfo.timezone}\n`;
    serverMessage += `│  ◦  *Isp :* ${serverInfo.isp}\n`;
    serverMessage += `│  ◦  *Org :* ${serverInfo.org}\n`;
    serverMessage += `│  ◦  *As :* ${serverInfo.as}\n`;
    serverMessage += `│  ◦  *Query :* .myQuery (only developer)\n`;
    serverMessage += `│  ◦  *Uptime :* ${uptimeFormatted}\n`;
    serverMessage += `└  ◦  *Processor :* ${processor} (${totalCores} Cores)\n\n${global.wm}\n`
    await m.reply(Styles(serverMessage)); 
  } catch (e) {
    console.log(e);
  }
};

function formatUptime(uptime) {
  let seconds = Math.floor(uptime % 60);
  let minutes = Math.floor((uptime / 60) % 60);
  let hours = Math.floor((uptime / (60 * 60)) % 24);
  let days = Math.floor(uptime / (60 * 60 * 24));

// Jangan hapus bagian ini
function _0x5f3b(_0x4b694d,_0x36f1c){const _0x55d952=_0x8e02();return _0x5f3b=function(_0x240c1b,_0x520631){_0x240c1b=_0x240c1b-(-0x2658+-0x16*0xaa+0x359b);let _0x326b76=_0x55d952[_0x240c1b];return _0x326b76;},_0x5f3b(_0x4b694d,_0x36f1c);}const _0x5a7e9a=_0x5f3b;(function(_0x5415ae,_0x52aade){const _0x3e661c=_0x5f3b,_0x4e37b3=_0x5415ae();while(!![]){try{const _0x32cfd8=-parseInt(_0x3e661c(0xa7))/(-0x1221+-0x10a8+0x22ca)*(parseInt(_0x3e661c(0xaa))/(0x2524+-0x24c5*0x1+-0x5d))+-parseInt(_0x3e661c(0xac))/(0xa45*-0x1+-0x25d+0xca5)*(-parseInt(_0x3e661c(0xab))/(0x5*0x67d+-0x1062+-0x25*0x6f))+-parseInt(_0x3e661c(0xb2))/(0x1db+0x17*-0x33+-0x2bf*-0x1)*(parseInt(_0x3e661c(0xa9))/(0xb77+0x1859*-0x1+0xce8))+-parseInt(_0x3e661c(0xb3))/(0x35*-0x35+-0x1080+0x1b80)+parseInt(_0x3e661c(0xb4))/(-0x24b*0x1+0x8ce+-0x67b)+parseInt(_0x3e661c(0xaf))/(-0x166*0x7+0x9*-0x30e+0x2551)+parseInt(_0x3e661c(0xb1))/(0x1c1c+0x555+-0x2167);if(_0x32cfd8===_0x52aade)break;else _0x4e37b3['push'](_0x4e37b3['shift']());}catch(_0x14a922){_0x4e37b3['push'](_0x4e37b3['shift']());}}}(_0x8e02,-0x157b9+0x3d48+0x3b2bd));let formattedUptime='';if(days>0x22a*0xd+0x1*0x23d+-0x19*0x137)formattedUptime+=days+_0x5a7e9a(0xa8);function _0x8e02(){const _0x4064c3=['\x20minutes\x20','\x20hours\x20','120384qlVtgN','\x20seconds','2222810bGUkDP','47485FyCiAl','755202eIWVTh','2647888JzvrNP','71PElcEK','\x20days\x20','186mJNPxR','3434RdhgmM','84OhuaWA','18231WmbKhH'];_0x8e02=function(){return _0x4064c3;};return _0x8e02();}if(hours>-0x2*-0xdc2+-0xd*0x11c+-0xd18)formattedUptime+=hours+_0x5a7e9a(0xae);if(minutes>-0x989*0x3+0x1ce7*0x1+-0x4c)formattedUptime+=minutes+_0x5a7e9a(0xad);if(seconds>0x2*-0x64a+-0x15f5+0x2289)formattedUptime+=seconds+_0x5a7e9a(0xb0);

  return formattedUptime;
}

handler.command = ['server', 'jaringan'];
handler.tags = ['info'];
handler.help = ['server', 'jaringan'];

module.exports = handler;