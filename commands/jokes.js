const {SlashCommandBuilder} = require('discord.js');
const {generateJoke}=require('../joke_generator.js');

module.exports={
    data:new SlashCommandBuilder().setName('joke').setDescription('Replies with a joke'),
    async execute(interaction){
        await interaction.reply(generateJoke);
    },
};