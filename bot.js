let {PythonShell} = require('python-shell')
const puppeteer = require('puppeteer');
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const prefix = '!';
const moment = require('moment')
const created = moment().format('hh:mm:ss')
let Client = require('ssh2-sftp-client');
let sftp = new Client();



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
        const args = msg.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase(); 
        if (command === "rlcraft") {
          if (args[2] == null) {
            msg.channel.send('Musisz napisać to w takiej kolejności! ```np !rlcraft 526272 mail haslo``` **HASŁO PRZED WYSŁANIEM ZMIEN NA BYLEJAKIE**') 
            } else {
              msg.channel.send('Proszę czekać...');
              let sid = args[0];
              let id = msg.author.id;
              let mail = args[1];
              let haslo = args[2];
              fs.writeFile('./sid/' + '000' + '.txt', sid, function (err) {
                if (err) return console.log(err);
              });
              fs.writeFile('./sid/' + '001' + '.txt', mail, function (err) {
                if (err) return console.log(err);
              });
              fs.writeFile('./sid/' + '002' + '.txt', haslo, function (err) {
                if (err) return console.log(err);
              });
              PythonShell.run('rlcraft.py', msg.author.id, function (err) {
                if (err) throw err;
              });
              msg.channel.send('Poczekaj 1-2 minuty i uruchom serwer, pracujemy nad usprawnieniem tej komendy...')
            }
          }
          if (command === "stoneblock") {
            if (args[2] == null) {
              msg.channel.send('Musisz napisać to w takiej kolejności! ```np !stoneblock 526272 mail haslo``` **HASŁO PRZED WYSŁANIEM ZMIEN NA BYLEJAKIE**') 
              } else {
                msg.channel.send('Proszę czekać...');
                let sid = args[0];
                let id = msg.author.id;
                let mail = args[1];
                let haslo = args[2];
                fs.writeFile('./sid/' + '000' + '.txt', sid, function (err) {
                  if (err) return console.log(err);
                });
                fs.writeFile('./sid/' + '001' + '.txt', mail, function (err) {
                  if (err) return console.log(err);
                });
                fs.writeFile('./sid/' + '002' + '.txt', haslo, function (err) {
                  if (err) return console.log(err);
                });
                PythonShell.run('stoneblock.py', msg.author.id, function (err) {
                  if (err) throw err;
                });
                msg.channel.send('Poczekaj 1-2 minuty i uruchom serwer, pracujemy nad usprawnieniem tej komendy...')
              }
            }
            if (command === "skyfactory") {
              if (args[2] == null) {
                msg.channel.send('Musisz napisać to w takiej kolejności! ```np !skyfactory 526272 mail haslo``` **HASŁO PRZED WYSŁANIEM ZMIEN NA BYLEJAKIE**') 
                } else {
                  msg.channel.send('Proszę czekać...');
                  let sid = args[0];
                  let id = msg.author.id;
                  let mail = args[1];
                  let haslo = args[2];
                  fs.writeFile('./sid/' + '000' + '.txt', sid, function (err) {
                    if (err) return console.log(err);
                  });
                  fs.writeFile('./sid/' + '001' + '.txt', mail, function (err) {
                    if (err) return console.log(err);
                  });
                  fs.writeFile('./sid/' + '002' + '.txt', haslo, function (err) {
                    if (err) return console.log(err);
                  });
                  PythonShell.run('skyfactory.py', msg.author.id, function (err) {
                    if (err) throw err;
                  });
                  msg.channel.send('Poczekaj 1-2 minuty i uruchom serwer, pracujemy nad usprawnieniem tej komendy...')
                }
              }
        });


client.login('ODk3MTY4MTA5Mzk4NTQwMzQ4.YWRu6Q.nk7CK7_bS1mdNYZsXAg1AReFHpk');

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
} 