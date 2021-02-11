let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • TRI [089606032177]
│ • Dana [089606032177]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
