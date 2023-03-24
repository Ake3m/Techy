const {SlashCommandBuilder} =require('discord.js');
const {generateDadJoke}=require('../dad-joke-generator');

module.exports={
    data:new SlashCommandBuilder().setName('dad-joke').setDescription('Replies with a dad joke'),
    async execute(interaction)
    {
        const joke=await generateDadJoke()
        await interaction.reply(joke);
    }
}