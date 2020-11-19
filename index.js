const discord = require("discord.js");
const config = require("./config.json");

const client = new discord.Client();
const prefix = "/"

client.on("message", function(message) { 
    if (message.author.bot) return;
    else if(!message.content.startsWith(prefix)) return;
    else {
        const command = message.content.slice(prefix.length).toLowerCase();
        if(command === "meow"){
            message.reply("(=‘.’=)");
        }
        else if(command === "grim stare"){
            message.reply("( – -)");
        }
        else if(command === "shock"){
            message.reply("( ‘ o ‘ )");
        }
        else if(command === "naughty"){
            message.reply("( ͡ ° ͜ʖ ͡ ° )");
        }
        else if(command === "owl"){
            message.reply("(\"◎ ▼ ◎\")");
        }
        else if(command === "mob confused"){
            message.reply("(⊙.⊙(◉̃_᷅◉)⊙.⊙)");
        }
        else if(command === "russian tableflip"){
            message.reply("In Soviet Russia table flips you! ノ┬─┬ノ ︵ ( \\o°o)\\");
        }
        else if(command === "grip"){
            message.reply("༼ つ ◕_◕ ༽つ");
        }
        else if(command === "fight"){
            message.reply("(ง '̀͜ '́ )ง");
        }
        else if(command === "sad"){
            message.reply("(⨪_⨪)");
        }
        else if(command === "crazy"){
            message.reply("(⊙_☉)");
        }
        else if(command === "cry"){
            message.reply("o(╥﹏╥)o");
        }
        else if(command === "zombie"){
            message.reply("[¬º-°]¬");
        }
        else if(command === "meh"){
            message.reply("┐(￣ヮ￣)┌");
        }
        else if(command === "mafia"){
            message.reply("(-(-.(-.(-.-).-).-)-)");
        }
        else if(command === "fuck you"){
            message.reply("凸(｀⌒´メ)凸");
        }
        else if(command === "pewpew"){
            message.reply("(　-_･)σ - - - - - - - - ･ #pewpew");
        }
        else{
            message.reply("We only have a few commands: pewpew, fuck you, mafia, meh, zombie, cry, crazy, sad, fight, grip, russian tableflip, naughty, owl ,mob confused,shock, meow, grim stare");
        }
    }
}); 

client.login(config.BOT_TOKEN);