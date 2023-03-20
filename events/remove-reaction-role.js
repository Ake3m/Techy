const {Events}=require('discord.js');
const { execute } = require('./client-ready');

module.exports={
    name: Events.MessageReactionRemove,
    once: false,
    async execute(reaction, user){
        if(user.bot || reaction.message.id!='1087296471050760212' || reaction.message.channelId!='1087253019005046857')
        {
            return;
        }
        const {name}=reaction.emoji;
        const member=reaction.message.guild.members.cache.get(user.id);
        switch(name)
        {
            case '🥒':
                member.roles.remove('1084121953712996433');
                break;
            case '🍊':
                member.roles.remove('1084122874283053186');
                break;
            case '🍇':
                member.roles.remove('1084123053904105503');
                break;
            case '🍒':
                member.roles.remove('1084123167896912002');
                break;
            case '🍌':
                member.roles.remove('1084123314051633345');
                break;
            case '🧊':
                member.roles.remove('1084123469270241361');
                break;
            case '🍎':
                member.roles.remove('1084123640330735657');
                break;
            case '🍄':
                member.roles.remove('1084123964554629161');
                break;
        }
    }
};

