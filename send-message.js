const {client} = require('./index.js');
const channelID = "1085915732015054918";
const channel=client.channels.cache.get(channelID);

if(channel)
{
    channel.send('Test');
}
else{
    console.error('could not find channel');
}