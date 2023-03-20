const {Events}=require('discord.js');

module.exports={
    name:Events.ClientReady,
    once:true,
    execute (_client)
    {
        console.log(`Logged in: ${_client.user.tag}`);
        // _client.channels.cache.get('1087253019005046857').send('Hey everyone! Techy here, react to the this message to receive your role 😁.\nWeb Developer - 🥒\nCompetititve Programmer - 🍊\nGame Developer - 🍇\nData Scientist - 🍒\n Embedded Systems Programmer - 🍌\n Network/ Cyber Security - 🧊\n Machine Learning - 🍎\nDigital Artist/3D Modeler - 🍄');
    }
}