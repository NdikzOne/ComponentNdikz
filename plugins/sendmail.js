const nodemailer = require('nodemailer')
let handler = async (m) => {

try {
      const inboxGmail = `<div
        style="width: 600px; height: 500px;margin: auto;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
        <div
            style="line-height: 2; letter-spacing: 0.5px; position: relative; padding: 10px 20px; width: 540px;min-height: 360px; margin: auto; border: 1px solid #DDD; border-radius: 14px;">
            <h3>Selamat Datang Di Tools-Store ZXcoderID</h3>
            <p>
                Tools Ini Hanya Untuk IP Script IchanZX Agar tidak Di colong!!
				IP Addreas: 1213
				Reason: Belum Terdaftar
			<p>
				Lapor IP anda ke WhatsApp Owner Agar Bisa menggunakan Script ini
            </p>
            <a style="cursor: pointer;text-align: center; display: block; width: 160px; margin: 30px auto; padding: 10px 10px; border: 1px solid #00FFFA; border-radius: 14px; color: #FF5700; text-decoration: none; font-size: 1rem; font-weight: 500;"
                href="https://api.whatsapp.com/send?phone=6281232615640&text=kak%20bantu%20saya%20untuk%20ip%201231%20agar%20bisa%20menggunakan%20script%20mohon%20izin">Klik Disini</a>
            <span style="display: block;">Jika Kamu Tidak Melakukan Tindakan Itu,
Silakan Abaikan <br>Email Ini
<br>
<br>
Laporkan Ini Pada Saya, Silahkan Hubungin Saya Via <span
                    style="color: #4D96FF;"><a href="https://api.whatsapp.com/send?phone=6281232615640&text=kak%20bantu%20saya%20untuk%20ip%20123123%20agar%20bisa%20menggunakan%20script%20mohon%20izin">WhatsApp</a></span></span>
            <span style="display: block;"><br>By,<br>ZXcoderID</span>
        </div>
    </div>
      `;

      let transporter = nodemailer.createTransport({
proxy: "http://caliph:cLph123@147.139.209.55:3128",
host: 'miku.kawaiihost.net',
port: 465,
secure: true,
auth: {
user: 'ichandev@caliphdev.my.id',
pass: 'MKG,!KaXd4=K}5K#J',
        },
      });

      let mailOptions = {
        from: '"IchanZX" <ichandev@caliphdev.my.id>',
        to: "indahalafahra@gmail.com",
        subject: 'Alert Email - SC IchanZX',
        html: inboxGmail,
      };

      transporter.sendMail(mailOptions, (err) => {
        if (err) { console.log(err); }
      });
    } catch (error) { console.log(error); }
}
handler.help = ['dompet [@user]']
handler.tags = ['xp']
handler.command = /^(sendmail)$/i
handler.owner = true
module.exports = handler