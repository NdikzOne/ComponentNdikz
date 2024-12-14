console.log("🍂Starting...");
require("./config");
const moment = require("moment-timezone");
let cluster = require("cluster");
let path = require("path");
const {
  color
} = require('./lib/color');
const {
  fnctions
} = require("./lib/env");
const Readline = require("readline");
const yargs = require("yargs/yargs");
const figlet = require("figlet");
const rl = Readline.createInterface(process.stdin, process.stdout);
const PORT = process.env.PORT || 0x1f90;
function msToDate(_0x2e2a5b) {
  temp = _0x2e2a5b;
  days = Math.floor(_0x2e2a5b / 86400000);
  daysms = _0x2e2a5b % 86400000;
  hours = Math.floor(daysms / 3600000);
  hoursms = _0x2e2a5b % 3600000;
  minutes = Math.floor(hoursms / 60000);
  minutesms = _0x2e2a5b % 60000;
  sec = Math.floor(minutesms / 0x3e8);
  return days + "H " + hours + "J " + minutes + 'M';
}
let wib = moment.tz('Asia/Jakarta').format("HH:mm:ss");
let wibh = moment.tz('Asia/Jakarta').format('HH');
let wibm = moment.tz("Asia/Jakarta").format('mm');
let wibs = moment.tz("Asia/Jakarta").format('ss');
let wit = moment.tz("Asia/Jayapura").format("HH:mm:ss");
let wita = moment.tz("Asia/Makassar").format("HH:mm:ss");
let wktuwib = wibh + ':' + wibm + ':' + wibs;
let d = new Date(new Date() + 0x36ee80);
let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][Math.floor(d / 0x50ae4c0) % 0x5];
let week = d.toLocaleDateString('id', {
  'weekday': 'long'
});
let datee = d.toLocaleDateString('id', {
  'day': "numeric",
  'month': "long",
  'year': 'numeric'
});
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jams = date.getHours();
var jamNow = date.getHours();
var menitNow = date.getMinutes();
var detikNow = date.getSeconds();
console.log(color(figlet.textSync("NdikzOne", {
  'font': "Standard",
  'horizontalLayout': "default",
  'vertivalLayout': "default",
  'width': 0x50,
  'whitespaceBreak': false
}), "blue"));
console.log(color("[•]", "aqua"), color("Hai          : Owner", "yellow"));
console.log(color('[•]', "aqua"), color("Bot Version  : 2.0.2", "lime"));
console.log(color('[•]', "aqua"), color("Status       : Online!", "white"));
console.log(color("[•]", "aqua"), color("Owner        : NdikzOne CoderID", "red"));
console.log(color("[•]", "aqua"), color("Devoloper    : @NdikzOne", 'magenta'));
switch (hari) {
  case 0x0:
    hari = 'Minggu';
    break;
  case 0x1:
    hari = "Senin";
    break;
  case 0x2:
    hari = "Selasa";
    break;
  case 0x3:
    hari = "Rabu";
    break;
  case 0x4:
    hari = "Kamis";
    break;
  case 0x5:
    hari = "Jum'at";
    break;
  case 0x6:
    hari = "Sabtu";
    break;
}
switch (bulan) {
  case 0x0:
    bulan = "Januari";
    break;
  case 0x1:
    bulan = "Februari";
    break;
  case 0x2:
    bulan = "Maret";
    break;
  case 0x3:
    bulan = "April";
    break;
  case 0x4:
    bulan = "Mei";
    break;
  case 0x5:
    bulan = "Juni";
    break;
  case 0x6:
    bulan = "Juli";
    break;
  case 0x7:
    bulan = "Agustus";
    break;
  case 0x8:
    bulan = "September";
    break;
  case 0x9:
    bulan = "Oktober";
    break;
  case 0xa:
    bulan = 'November';
    break;
  case 0xb:
    bulan = "Desember";
    break;
}
switch (jams) {
  case 0x0:
    jams = "Malam";
    break;
  case 0x1:
    jams = "Malam";
    break;
  case 0x2:
    jams = "Malam";
    break;
  case 0x3:
    jams = "Pagi";
    break;
  case 0x4:
    jams = "Pagi";
    break;
  case 0x5:
    jams = 'Pagi';
    break;
  case 0x6:
    jams = "Pagi";
    break;
  case 0x7:
    jams = "Pagi";
    break;
  case 0x8:
    jams = "Pagi";
    break;
  case 0x9:
    jams = "Pagi";
    break;
  case 0xa:
    jams = "Pagi";
    break;
  case 0xb:
    jams = "Siang";
    break;
  case 0xc:
    jams = "Siang";
    break;
  case 0xd:
    jams = 'Siang';
    break;
  case 0xe:
    jams = "Siang";
    break;
  case 0xf:
    jams = "Sore";
    break;
  case 0x10:
    jams = "Sore";
    break;
  case 0x11:
    jams = "Sore";
    break;
  case 0x12:
    jams = "Malam";
    break;
  case 0x13:
    jams = "Malam";
    break;
  case 0x14:
    jams = "Malam";
    break;
  case 0x15:
    jams = "Malam";
    break;
  case 0x16:
    jams = 'Malam';
    break;
  case 0x17:
    jams = 'Malam';
    break;
}
switch (jamNow) {
  case 0x0:
    jamNow = '00';
    break;
  case 0x1:
    jamNow = '01';
    break;
  case 0x2:
    jamNow = '02';
    break;
  case 0x3:
    jamNow = '03';
    break;
  case 0x4:
    jamNow = '04';
    break;
  case 0x5:
    jamNow = '05';
    break;
  case 0x6:
    jamNow = '06';
    break;
  case 0x7:
    jamNow = '07';
    break;
  case 0x8:
    jamNow = '08';
    break;
  case 0x9:
    jamNow = '09';
    break;
  case 0xa:
    jamNow = '10';
    break;
  case 0xb:
    jamNow = '11';
    break;
  case 0xc:
    jamNow = '12';
    break;
  case 0xd:
    jamNow = '13';
    break;
  case 0xe:
    jamNow = '14';
    break;
  case 0xf:
    jamNow = '15';
    break;
  case 0x10:
    jamNow = '16';
    break;
  case 0x11:
    jamNow = '17';
    break;
  case 0x12:
    jamNow = '18';
    break;
  case 0x13:
    jamNow = '19';
    break;
  case 0x14:
    jamNow = '20';
    break;
  case 0x15:
    jamNow = '21';
    break;
  case 0x16:
    jamNow = '22';
    break;
  case 0x17:
    jamNow = '23';
    break;
}
switch (menitNow) {
  case 0x0:
    menitNow = '00';
    break;
  case 0x1:
    menitNow = '01';
    break;
  case 0x2:
    menitNow = '02';
    break;
  case 0x3:
    menitNow = '03';
    break;
  case 0x4:
    menitNow = '04';
    break;
  case 0x5:
    menitNow = '05';
    break;
  case 0x6:
    menitNow = '06';
    break;
  case 0x7:
    menitNow = '07';
    break;
  case 0x8:
    menitNow = '08';
    break;
  case 0x9:
    menitNow = '09';
    break;
  case 0xa:
    menitNow = '10';
    break;
  case 0xb:
    menitNow = '11';
    break;
  case 0xc:
    menitNow = '12';
    break;
  case 0xd:
    menitNow = '13';
    break;
  case 0xe:
    menitNow = '14';
    break;
  case 0xf:
    menitNow = '15';
    break;
  case 0x10:
    menitNow = '16';
    break;
  case 0x11:
    menitNow = '17';
    break;
  case 0x12:
    menitNow = '18';
    break;
  case 0x13:
    menitNow = '19';
    break;
  case 0x14:
    menitNow = '20';
    break;
  case 0x15:
    menitNow = '21';
    break;
  case 0x16:
    menitNow = '22';
    break;
  case 0x17:
    menitNow = '23';
    break;
  case 0x18:
    menitNow = '24';
    break;
  case 0x19:
    menitNow = '25';
    break;
  case 0x1a:
    menitNow = '26';
    break;
  case 0x1b:
    menitNow = '27';
    break;
  case 0x1c:
    menitNow = '28';
    break;
  case 0x1d:
    menitNow = '29';
    break;
  case 0x1e:
    menitNow = '30';
    break;
  case 0x1f:
    menitNow = '31';
    break;
  case 0x20:
    menitNow = '32';
    break;
  case 0x21:
    menitNow = '33';
    break;
  case 0x22:
    menitNow = '34';
    break;
  case 0x23:
    menitNow = '35';
    break;
  case 0x24:
    menitNow = '36';
    break;
  case 0x25:
    menitNow = '37';
    break;
  case 0x26:
    menitNow = '38';
    break;
  case 0x27:
    menitNow = '39';
    break;
  case 0x28:
    menitNow = '40';
    break;
  case 0x29:
    menitNow = '41';
    break;
  case 0x2a:
    menitNow = '42';
    break;
  case 0x2b:
    menitNow = '43';
    break;
  case 0x2c:
    menitNow = '44';
    break;
  case 0x2d:
    menitNow = '45';
    break;
  case 0x2e:
    menitNow = '46';
    break;
  case 0x2f:
    menitNow = '47';
    break;
  case 0x30:
    menitNow = '48';
    break;
  case 0x31:
    menitNow = '49';
    break;
  case 0x32:
    menitNow = '50';
    break;
  case 0x33:
    menitNow = '51';
    break;
  case 0x34:
    menitNow = '52';
    break;
  case 0x35:
    menitNow = '53';
    break;
  case 0x36:
    menitNow = '54';
    break;
  case 0x37:
    menitNow = '55';
    break;
  case 0x38:
    menitNow = '56';
    break;
  case 0x39:
    menitNow = '57';
    break;
  case 0x3a:
    menitNow = '58';
    break;
  case 0x3b:
    menitNow = '59';
    break;
}
switch (detikNow) {
  case 0x0:
    detikNow = '00';
    break;
  case 0x1:
    detikNow = '01';
    break;
  case 0x2:
    detikNow = '02';
    break;
  case 0x3:
    detikNow = '03';
    break;
  case 0x4:
    detikNow = '04';
    break;
  case 0x5:
    detikNow = '05';
    break;
  case 0x6:
    detikNow = '06';
    break;
  case 0x7:
    detikNow = '07';
    break;
  case 0x8:
    detikNow = '08';
    break;
  case 0x9:
    detikNow = '09';
    break;
  case 0xa:
    detikNow = '10';
    break;
  case 0xb:
    detikNow = '11';
    break;
  case 0xc:
    detikNow = '12';
    break;
  case 0xd:
    detikNow = '13';
    break;
  case 0xe:
    detikNow = '14';
    break;
  case 0xf:
    detikNow = '15';
    break;
  case 0x10:
    detikNow = '16';
    break;
  case 0x11:
    detikNow = '17';
    break;
  case 0x12:
    detikNow = '18';
    break;
  case 0x13:
    detikNow = '19';
    break;
  case 0x14:
    detikNow = '20';
    break;
  case 0x15:
    detikNow = '21';
    break;
  case 0x16:
    detikNow = '22';
    break;
  case 0x17:
    detikNow = '23';
    break;
  case 0x18:
    detikNow = '24';
    break;
  case 0x19:
    detikNow = '25';
    break;
  case 0x1a:
    detikNow = '26';
    break;
  case 0x1b:
    detikNow = '27';
    break;
  case 0x1c:
    detikNow = '28';
    break;
  case 0x1d:
    detikNow = '29';
    break;
  case 0x1e:
    detikNow = '30';
    break;
  case 0x1f:
    detikNow = '31';
    break;
  case 0x20:
    detikNow = '32';
    break;
  case 0x21:
    detikNow = '33';
    break;
  case 0x22:
    detikNow = '34';
    break;
  case 0x23:
    detikNow = '35';
    break;
  case 0x24:
    detikNow = '36';
    break;
  case 0x25:
    detikNow = '37';
    break;
  case 0x26:
    detikNow = '38';
    break;
  case 0x27:
    detikNow = '39';
    break;
  case 0x28:
    detikNow = '40';
    break;
  case 0x29:
    detikNow = '41';
    break;
  case 0x2a:
    detikNow = '42';
    break;
  case 0x2b:
    detikNow = '43';
    break;
  case 0x2c:
    detikNow = '44';
    break;
  case 0x2d:
    detikNow = '45';
    break;
  case 0x2e:
    detikNow = '46';
    break;
  case 0x2f:
    detikNow = '47';
    break;
  case 0x30:
    detikNow = '48';
    break;
  case 0x31:
    detikNow = '49';
    break;
  case 0x32:
    detikNow = '50';
    break;
  case 0x33:
    detikNow = '51';
    break;
  case 0x34:
    detikNow = '52';
    break;
  case 0x35:
    detikNow = '53';
    break;
  case 0x36:
    detikNow = '54';
    break;
  case 0x37:
    detikNow = '55';
    break;
  case 0x38:
    detikNow = '56';
    break;
  case 0x39:
    detikNow = '57';
    break;
  case 0x3a:
    detikNow = '58';
    break;
  case 0x3b:
    detikNow = '59';
    break;
}
var tampilWaktu = "Jam : " + wib;
console.log(color(datee, "green"));
console.log(color(tampilWaktu, 'green'));
console.log(color("Waktu TimeZone : Jakarta", "green"));
console.log(color(figlet.textSync("NdikzOne", {
  'font': "Standard",
  'horizontalLayout': "default",
  'vertivalLayout': "default",
  'width': 0x50,
  'whitespaceBreak': false
}), 'yellow'));
console.log(namabot + " server is running on port " + PORT);
var isRunning = false;
async function start(_0x4ef4d6) {
  if (isRunning) {
    return;
  }
  try {
    if (!(await fnctions())) {
      return;
    }
    isRunning = true;
    let _0xc51d80 = [path.join(__dirname, _0x4ef4d6), ...process.argv.slice(0x2)];
    cluster.setupMaster({
      'exec': path.join(__dirname, _0x4ef4d6),
      'args': _0xc51d80.slice(0x1)
    });
    let _0x1944e8 = cluster.fork();
    _0x1944e8.on("message", _0x140689 => {
      console.log('[RECEIVED]', _0x140689);
      switch (_0x140689) {
        case "reset":
          _0x1944e8.process.kill();
          isRunning = false;
          start.apply(this, arguments);
          break;
        case 'uptime':
          _0x1944e8.send(process.uptime());
          break;
      }
    });
    _0x1944e8.on("exit", (_0x36a740, _0x4edc60) => {
      _0x1944e8.process.kill();
      isRunning = false;
      start.apply(this, arguments);
    });
    let _0x5ebd27 = new Object(yargs(process.argv.slice(0x2)).exitProcess(false).parse());
    if (!_0x5ebd27.test) {
      if (!rl.listenerCount()) {
        rl.on('line', _0x2df65d => {
          _0x1944e8.emit("message", _0x2df65d.trim());
        });
      }
    }
  } catch (_0x1a5f58) {
    console.error("Terjadi kesalahan:", _0x1a5f58);
  }
}
start("main.js");
require("http").createServer((_0x33bf34, _0x2d36c0) => _0x2d36c0.end("Uptime!")).listen(0x1f90);