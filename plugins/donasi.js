let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Donasi • Dana 」
│ • Xl [087753812675]
│ • Gopay  [087753812675]
│ • Dana  [087753812675]
│ • Saweria  [https://saweria.co/RullZy]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6287753812675
│ _Hasil donasi akan digunakan buat server_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
│ _Klo Mau Tanpa Limit Bisa Ketik .sewa_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler