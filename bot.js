const { Client, Events, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();


const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.once(Events.ClientReady, client => {
	console.log(`Logged in as ${client.user.tag}`);
});

client.login(process.env.BOT_TOKEN);