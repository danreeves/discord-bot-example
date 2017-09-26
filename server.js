const Eris = require('eris');
 
const bot = new Eris(process.env.DISCORD_BOT_TOKEN);   // Replace DISCORD_BOT_TOKEN in .env with your bot accounts token
 
bot.on('ready', () => {                                // When the bot is ready
    console.log('Ready!');                             // Log "Ready!"
});
 
bot.on('messageCreate', (msg) => {                     // When a message is created
    if(msg.content === '1337') {                       // If the message content is "1337"
        bot.createMessage(msg.channel.id, 'damn it');  // Send a message in the same channel with "damn it"
    }
});
 
bot.connect();                                         // Get the bot to connect to Discord