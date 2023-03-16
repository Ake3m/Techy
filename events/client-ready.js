const {Events}=require('discord.js');

module.exports={
    name:Events.ClientReady,
    once:true,
    execute (_client)
    {
        console.log(`Logged in: ${_client.user.tag}`)
    }
}