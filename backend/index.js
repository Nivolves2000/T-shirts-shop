const TelegramBot = require( 'node-telegram-bot-api' );

const token = '867867394:AAE2IQRq0wu0XI1UpwHLg4RUNpKPH3RKI0E';

const bot = new TelegramBot( token, { polling: true } );

function sendMessage( id, message ) {
  bot.sendMessage( id, message, { parse_mode: "Markdown" } );
}

bot.onText( /\/tShirts/, ( msg, match ) => {

  const chatId = msg.chat.id;
  bot.sendMessage( chatId, "Выберите действие", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Добавить товар',
            callback_data: 'add'
          },
          {
            text: 'Показать все товары',
            callback_data: 'show'
          },
        ],
        [
          {
            text: 'Изменить товар',
            callback_data: 'change'
          },
          {
            text: 'Удалить товар',
            callback_data: 'delete'
          },
        ]
      ]
    }
  } );
} );


bot.on( 'callback_query', query => {
  const id = query.message.chat.id;
  const action = query.data;

  switch ( action ) {
    case "add":
      sendMessage( id, "Добавить товар" )
      break;
    case "show":
      sendMessage( id, "Показать товары" )
      break;
    case "change":
      sendMessage( id, "Изменить товар" )
      break;
    case "delete":
      sendMessage( id, "Удалить товар" )
      break;
    default:
      break;
  }

} );