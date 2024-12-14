let handler = async (m, { conn, usedPrefix, command }) => {
    await conn.reply(m.chat,`“${pickRandom(global.gombal)}”`, m)
    conn.sendFile(m.chat, './mp3/menu.mp3', '', null, m, true, { type: "audioMessage", ptt: true, fileLength: 88738 })
}
handler.help = ['gombal']
handler.tags = ['quotes']
handler.command = /^(gombal)$/i

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
}

global.gombal = [
"Kamu tau gak? Kenapa kalau aku menghafal lihatnya ke atas? soalnya kalau merem langsung kebayang wajahmu.",
"Orang kurus itu setia, makan aja tidak pernah nambah apalagi pasangan.",
"Kamu tu kayak warteg, sederhana namun berkualitas.",
"Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.",
"Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.",
"Kamu tau gak apa persamaannya kamu sama AC? Sama-sama bikin aku sejuk.",
"Aku hanya ingin hidup cukup. Cukup lihat senyummu setiap hari.",
"Aku rela ikut lomba lari keliling dunia, asalkan engkau yang menjadi garis finisnya.",
"Kalau orang kebutuhan primernya ada tiga yaitu sandang pangan dan papan, tapi kalau aku : kamu, kamu, kamu.",
"Cita-citaku dulu pengen jadi dokter, tapi setelah mengenalmu, berubah jadi ingin membahagiakanmu.",
"Enak ya jadi kamu, kalau mau liat bidadari, tinggal liat di kaca.",
"Jika kamu tanya berapa kali kamu datang ke pikiranku, jujur saja, cuma sekali. Habisnya, gak pergi-pergi sih!",
"Jangan GR deh. Aku kangen kamu sedikit aja kok. Sedikit berlebihan maksudnya.",
"Tanggal merah sekalipun aku tidak libur untuk memikirkan kamu.",
"Cintaku padamu bagai diare. Tak bisa kutahan, terus keluar begitu saja.",
"Aku ga lulus ulangan umum sayang, gara-gara di bagian essay-nya aku tulis surat cinta buat kamu.",
"Tahu gak kenapa kita cuma bisa lihat pelangi setengah lingkaran? Sebab setengahnya lagi ada di mata kamu.",
"Kalo kamu lagi di AS, Patung Liberty ga akan bawa obor tapi bakal bawa BUNGA!",
"Aku rela jadi abang nasi goreng asalkan setiap malam aku bisa lewat depan rumah kamu.",
"Aku rela dipenjara seumur hidup asalkan pelanggarannya karena mencintaimu.",
"Kamu tau gak? Lukisan itukan makin lama makin antik, kalo kamu makin lama makin cantik",
"Seandainya kau adalah kamera, aku akan terus membidikmu.",
"Seandainya kamu adalah bintang, aku akan jadi astronom yang selalu mengamatimu.",
"Kamu bagaikan karya seni yang menginspirasi, selalu memikat hatiku setiap kali kulihat.",
"Aku rela jadi batu bata, asalkan aku bisa menjadi tembok yang melindungi kamu.",
"Setiap kali aku melihat kamu, aku merasa seperti dalam dongeng yang penuh keajaiban.",
"Jika hidupku adalah buku, setiap halamannya akan kusisipi dengan kisah cinta kita.",
"Kamu adalah bunga di taman hatiku yang selalu kuharapkan mekar setiap hari.",
"Aku akan terus memandangimu seperti matahari yang menyinari dunia, tak pernah lelah meskipun terbenam di ufuk barat.",
"Seandainya cintaku adalah bensin, kamu akan menjadi mobil yang membuatku terus bergerak maju.",
"Jika kebersamaan kita adalah lagu, aku ingin lagu itu terus berputar selamanya.",
"Setiap kali aku mendengar namamu, hatiku berdetak lebih kencang dari biasanya.",
"Aku akan selalu berada di sampingmu, seperti bayangan yang tak pernah meninggalkan tubuhmu.",
"Aku rela menjadi petani, asalkan aku bisa menanam benih cinta di hatimu dan melihatnya tumbuh bersama kita.",
"Setiap kali aku berpikir tentang masa depan, kamu selalu menjadi bagian terindah yang kuharapkan bersamaku.",
"Aku tidak tahu bagaimana menjelaskan betapa besar rasa cintaku padamu, karena kata-kata tidak cukup untuk menggambarkan perasaanku.",
"Setiap detik yang kulewati bersamamu adalah momen berharga yang akan selalu kuingat sepanjang hidupku.",
"Cintaku padamu bukanlah sekadar kata-kata, tapi sebuah perasaan yang mendalam dan abadi.",
"Aku berjanji akan selalu setia mendampingimu, seperti angin yang selalu menemani langit biru.",
"Jika aku bisa memilih, aku akan memilih untuk terus mencintaimu setiap hari tanpa batas.",
"Kamu adalah pilihan terbaik dalam hidupku, dan aku tidak akan pernah menyesal memilihmu.",
"Aku akan selalu menjagamu dengan penuh kasih, seperti pelukan yang hangat melindungi dari dinginnya dunia ini.",
"Setiap kali aku memikirkanmu, senyum selalu terukir di wajahku tanpa sadar.",
"Kamu adalah impian yang menjadi kenyataan dalam hidupku, keajaiban yang selalu kumiliki setiap hari.",
"Aku bersyukur memiliki kamu dalam hidupku, karena kamu adalah berkah terindah yang pernah kuterima.",
"Aku akan selalu ada untukmu, seperti bintang yang bersinar di langit gelap saat malam tiba.",
"Jika aku bisa memberikanmu satu hal dalam hidup ini, aku akan memberikanmu kebahagiaan tanpa batas.",
"Kamu adalah pangeran/princess dalam cerita cintaku yang takkan pernah berakhir bahagia tanpamu."
]