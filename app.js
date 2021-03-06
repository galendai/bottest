var restify = require('restify');
var builder = require('botbuilder');

// Setup the bot
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function() {
  console.log('%s listening to %s', server.name, server.url);
});

// create chat bot
var connector = new builder.ChatConnector({
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MCIROSOFT_APP_PASSWORD
});

var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

// Bots dialogs
bot.dialog('/', function (session) {
  session.send("Hello Wolrd");
});