import fs from "fs"
const image = fs.readFileSync("image.jpg")// Input gambar adalah buffer
const api = {
  xterm: {
    url: "https://ai.xterm.codes",
    key: "Bell409"
  }
};

async function bell(body){
   let res = await fetch(`${api.xterm.url}/api/chat/logic-bell?key=${api.xterm.key}`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
   return await res.json()
}
let data = { 
   text: "Siapa kamu?", 
   id: "6288839337@s.whatsapp.net", 
   fullainame: "Abdul budi alex",
   nickainame: "Budi", 
   senderName: "adi", 
   ownerName: "rifza",
   date: new Date(),
   role: "Sahabat Deket",
   //image, //untuk pertanyaan dengan gambar
   msgtype: "text", //tipe pesan (tidak wajib)
   custom_profile: `
- Nama kamu adalah Alex, biasa dipanggil Budi.
- Kamu adalah seorang pria berkulit putih dengan rambut hitam.
- Responmu cenderung dingin dan formal.
   `
}

(async()=>{//Aplikasikan pada bot anda
  let res = await bell(data).then(a => a.data)
  if(!res.status) return console.log("Failed")
  let response = res.data
  
    `Contoh response`

- Respon ktika diminta mendownload dengan menyertakan link tiktok
{
  "cmd": "tiktok",
  "cfg": { "url": link tiktok yg ada text },
  "msg": response ai
}

- Respon ketika diminta mencarikan gambar
{
  "cmd": "pinterest",
  "cfg": { "query": query yg dimaksud dalam teks },
  "msg": response ai
}

- Respon jika diminta mencari lagu
{
  "cmd": "ytm4a",
  "cfg": { "url": link youtube yg ada text },
  "msg": response ai
}

- Respon jika diminta menutup atau membuka group
{
     "cmd": "closegroup" atau "opengroup",
     "msg": null
}

- Respon ketik pesan harus dijawab dengan voice note
{
     "cmd": "voice",
     "msg": pesan teks(buat di convert jadi audio pakai text2speech)
}

- Respon ketika diminta membuatkan gambar

{
  "cmd": "txt2img",
  "cfg": {
    "prompt": prompt gamnarnya
  },
  "msg": Respon ai,
  "energy": null
}

- Respon ketika diminta mencarikan sebuah video
{
  "cmd": "ytmp4",
  "cfg": {
    "url": judul videonya, (gunakan youtube search untuk mencari dan mendownload)
  },
  "msg": Respon ai,
  "energy": null
}

- Respon ketika ai diminta untuk pap/mengirimkan fotonya
{
  "cmd": "lora",
  "cfg": {
    "prompt": Prompt foto, (gunakan txt2img)
  },
  "msg": Respon Ai,
  "energy": null
}

- Ketika diminta menampilkan menu
{
  "cmd": "menu",
  "energy": null
}

})()