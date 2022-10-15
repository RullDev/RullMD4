import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
  
 let handler = m => m 
  
 handler.all = async function (m) { 
     if (m.chat.endsWith('status@broadcast')) { 
         console.log('sw cok') 
     } 
     let { isBanned } = db.data.chats[m.chat] 
     let { banned } = db.data.users[m.sender] 
     let { group } = db.data.settings[this.user.jid] 
     let setting = db.data.settings[this.user.jid] 
     let user = global.db.data.users[m.sender] 
      
     // salam 
     let reg = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i 
     let isSalam = reg.exec(m.text) 
     if (isSalam && !m.fromMe) { 
         m.reply(`وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\n_wa\'alaikumussalam wr.wb._`) 
     } 
      
     // update status  
      if (new Date() * 1 - setting.status > 1000) {  
          let _uptime = process.uptime() * 1000  
          let uptime = clockString(_uptime)  
   const ultah = new Date('April 4, 2023 23:59:59')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
        await this.setBio(`☘️ Ultah Ziv San : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik
⏲️ Runtime: ${uptime} | 🛰 Mode: ${global.opts['self'] ? 'Private' : setting.groupOnly ? 'Only Group' : 'Public'} | 💌 Made Ziv San`).catch(_ => _)  
          setting.status = new Date() * 1  
      } 
  
     // backup db 
     if (setting.backup) { 
         if (new Date() * 1 - setting.backupDB > 1000 * 60 * 60) { 
             let d = new Date 
             let date = d.toLocaleDateString('id', { 
                 day: 'numeric', 
                 month: 'long', 
                 year: 'numeric' 
             }) 
             await global.db.write() 
             this.reply(global.owner[0] + '@s.whatsapp.net', `Database: ${date}`, null) 
             let data = fs.readFileSync('./database.json') 
             await this.sendMessage(owner[0] + '@s.whatsapp.net', { document: data, mimetype: 'application/json', fileName: 'database.json' }, { quoted: m }) 
             setting.backupDB = new Date() * 1 
         } 
     } 
  
     return !0 
 } 
  
 export default handler
 function ucapan() { 
     const time = moment.tz('Asia/Jakarta').format('HH') 
     res = "Selamat dinihari" 
     if (time >= 4) { 
         res = "Selamat pagi" 
     } 
     if (time > 10) { 
         res = "Selamat siang" 
     } 
     if (time >= 15) { 
         res = "Selamat sore" 
     } 
     if (time >= 18) { 
         res = "Selamat malam" 
     } 
     return res 
 } 
  
 function clockString(ms) { 
     let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) 
     let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60 
     let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60 
     return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':') 
 } 
  
 function pickRandom(list) { 
     return list[Math.floor(Math.random() * list.length)] 
 }