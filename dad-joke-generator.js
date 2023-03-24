const generateDadJoke=async()=>{
    try{
        const joke_request=await fetch("https://icanhazdadjoke.com/",{headers:{"Accept":"application/json"}});
        const joke_result=await joke_request.json();
        return joke_result.joke;
    }
    catch(e)
    {
        return "Sorry, ran out of dad jokes. Going to the store to get more. Be back when you're famous. ";
    }
}

module.exports={generateDadJoke}