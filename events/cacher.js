const {Events} = require('discord.js');

//caches the reaction roles message 
module.exports={
    name: Events.ClientReady,
    once:true,
    async execute(client)
    {
        const guild=await client.guilds.fetch('1082665299372945449');
        const channel=guild.channels.cache.get('1087253019005046857');
        const message=await channel.messages.fetch('1087296471050760212');
    }
}