// Command/guessNumber.js
const GuessNumber = require("../Lib/guessNumber");

let handler = async (m, { conn }) => {
    conn.game = conn.game ? conn.game : {};
    if (Object.values(conn.game).find(room => room.id.startsWith('guessNumber') && room.players.includes(m.sender))) throw 'Kamu masih dalam game';
    let room = {
        id: 'guessNumber-' + (+new Date),
        players: [m.sender],
        game: new GuessNumber(),
    };

    let number = room.game.getNumber(); // Get the number for testing purposes only

    let text = 'Ayo tebak angka antara 1 dan 100! Kamu punya maksimal 5 percobaan.';
    m.reply(text);
    conn.game[room.id] = room;
}

handler.command = /^guess$/i;
handler.tags = ['game'];

module.exports = handler;