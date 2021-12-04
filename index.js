const TelegramBot = require('node-telegram-bot-api');
const token = '';
const RandomAPI = require('./api/api_quotes');

const joke = new RandomAPI();


const bot = new TelegramBot(token, {polling: true});



bot.on('message', async (msg) => {
    let chatId1 = msg.chat.id;
    if (msg.text != "Get joke" && msg.text != "/start") {
        bot.sendMessage(chatId1, "Fuck you!");
    }

    joker = await joke.getRandomJoke();
    let chatId = msg.chat.id;
    if (msg.text === "Get joke") {
    bot.sendMessage(chatId, joker.data.value);}
  });

bot.onText(/\/start/, (msg) => {

    bot.sendMessage(msg.chat.id, "Welcome", {
    "reply_markup": {
        "keyboard": [["Get joke"]]
        }
    });
    
    });