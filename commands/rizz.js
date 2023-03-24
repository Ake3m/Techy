const {SlashCommandBuilder} =require('discord.js');
const {generateRizz} =require('../rizz-generator');


module.exports={
    data:new SlashCommandBuilder().setName('rizz').setDescription('Gives top tier rizz'),
    async execute(interaction)
    {
        const rizz=await generateRizz();
        await interaction.reply(rizz);
    }
}
