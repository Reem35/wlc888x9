const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ";";


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
//حط الاكواد تحت هذه الجملة

 client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':regional_indicator_n: :a: :m: :regional_indicator_e:  | ***الاسم*** :  ',`${member}`)
        .addField(':pencil:  | ***مرحبا بك في السيرفر***' , `***مرحبا بك في السيرفر,*** ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('?| ***انت العضو رقم***',`${member.guild.memberCount}`)
                   .addField("***الاسم***:",`<@` + `${member.id}` + `>`, true)
                                      .addField(' ***الـسيرفر***', `${member.guild.name}`,true)
.setImage('https://cdn.discordapp.com/attachments/445335688628666388/477469283878961160/gfd.jpg','https://cdn.discordapp.com/attachments/445335688628666388/477605580203098112/images.png','https://cdn.discordapp.com/attachments/445335688628666388/477608211197722634/images.png','https://cdn.discordapp.com/attachments/445335688628666388/477608355632775178/images.png')
      .setFooter(`${member.guild.name}`)
        .setTimestamp()
       channel.sendEmbed(embed);
    });
     client.on('guildMemberRemove', member => {
    var MoCodes = new Discord.RichEmbed()
    .setThumbnail(member.user.avatarURL)
    .setDescription('***راح الحبيب*** '+'<@'+`${member.user.id}`+'>'+'T-T')
.setImage('https://cdn.discordapp.com/attachments/445335688628666388/477597893822382091/gd.jpg','https://cdn.discordapp.com/attachments/385163493512445962/480899764494401559/9k.png','https://cdn.discordapp.com/attachments/445335688628666388/477609046568861696/Z.png')
    .setColor('RANDOM')
var channel =member.guild.channels.find('name', 'welcome')
if (!channel) return;
channel.send({embed : MoCodes});
});
const developers = ["512672135580221450"]
const adminprefix = ".";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**?   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**?   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**?   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**?**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});

client.login(process.env.BOT_TOKEN);//لا تعدل او تحط توكن بوتك فيها
