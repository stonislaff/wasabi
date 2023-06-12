const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const cors = require('cors');
const botToken = '6172729665:AAHFPE_VqLqCSJ5RpWoMSm1weSc5XUWuOPA';
const channelId = '-902308119';

const bot = new TelegramBot(botToken, { polling: true });

const app = express();
app.use(express.json());
app.use(cors());

app.post('/send-message', (req, res) => {
    const message = req.body.message;

    bot.sendMessage(channelId, message)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.error('Error sending message:', error);
            res.sendStatus(500);
        });
});

const port = 5000;

app.listen(port, () => {
    console.log('Server started on port 5000');
});
