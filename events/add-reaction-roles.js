const {Events}=require('discord.js');

module.exports={
    name:Events.MessageReactionAdd,
    once:false,
    async execute (reaction,user)
    {
        console.log('reaction detected');
        if(user.bot || reaction.message.channelId!='1087253019005046857' || reaction.message.id!='1087296471050760212')
        {
            return;
        }
            
        const {name}=reaction.emoji;
        const member=reaction.message.guild.members.cache.get(user.id);
        
        switch(name)
        {
            case '🥒':
                member.roles.add('1084121953712996433');
                break;
            case '🍊':
                member.roles.add('1084122874283053186');
                break;
            case '🍇':
                member.roles.add('1084123053904105503');
                break;
            case '🍒':
                member.roles.add('1084123167896912002');
                break;
            case '🍌':
                member.roles.add('1084123314051633345');
                break;
            case '🧊':
                member.roles.add('1084123469270241361');
                break;
            case '🍎':
                member.roles.add('1084123640330735657');
                break;
            case '🍄':
                member.roles.add('1084123964554629161');
                break;
        }
    }
}