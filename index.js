require('dotenv').config();
const axios = require('axios');
const {Client, GatewayIntentBits, messageLink} = require('discord.js');
const client = new Client({intents:[GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]})

client.on('ready',()=>{
  console.log('El Bot esta listo')  
})

client.on('messageCreate', async(message)=>{
    if (message.content === 'ping') {
        message.reply({
            content:'pong'
        })

    } else if (message.content === 'Hola') {
        message.reply({
            content:'Hola, como puedo ayudarte amigo'
        })
    } else if (message.content === 'dime una frase'){
        let res = await axios.get('https://api.quotable.io/random')
        const quote = res.data.content;
        message.reply({
            content:quote,
        })
    }
})

client.login(process.env.DISCORD_BOT_ID)