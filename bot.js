var Botkit = require('botkit');
var config = require('./config');
var controller = Botkit.slackbot();
var items = config.items;

var bot = controller.spawn({
  token: config.token
});

function getRandomId(){
	return Math.floor(Math.random()*items.length)
}

bot.startRTM(function(err,bot,payload) {
  if (err) {
    throw new Error('Could not connect to Slack');
  }
});
controller.hears(config.keywords, ["direct_message","direct_mention","mention","ambient"],function(bot,message) {
  var id = getRandomId();
  bot.reply(message, items[id]);
});
