const generateRizz=async()=>{
    try{
        const rizz_request=await fetch("https://vinuxd.vercel.app/api/pickup");
        const rizz_results=await rizz_request.json();
        return rizz_results.pickup;
    }
    catch(e)
    {
        return "Rizz Levels low right now. Please try again later."
    }
}

module.exports={generateRizz};