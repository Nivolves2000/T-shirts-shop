const TelegramBot = require( "node-telegram-bot-api" );
const MongoClient = require( "mongodb" ).MongoClient;
const express = require( "express" );
const app = express();
const fs = require( "fs" );
const image2base64 = require( "image-to-base64" );


const token = "867867394:AAE2IQRq0wu0XI1UpwHLg4RUNpKPH3RKI0E";
const dbName = "t-shirt-shop";

const bot = new TelegramBot( token, { polling: true } );

//-------------------------------------------get query-----------------------------

app.get( "/t-shirts", ( req, res ) => {
  MongoClient.connect( "mongodb://Nivolves:Danya2000@ds149596.mlab.com:49596/t-shirt-shop", ( error, database ) => {
    if ( error ) {
      bot.sendMessage( id, error, { parse_mode: "Markdown" } );
    } else {
      const db = database.db( dbName );
      db.collection( "tShirts" ).find().toArray( ( error, goods ) => {
        if ( error ) {
          return res.sendStatus( 500 );
        } else {
          res.send( goods );
        }
      } );
    }
  } );

} );

// ------------------------------------------ Add good -----------------------------

function Add( id ) {

  let good = {
    photo: undefined,
    name: undefined,
    price: undefined,
    size: undefined,
  }

  addToDB = ( good ) => {
    MongoClient.connect( "mongodb://Nivolves:Danya2000@ds149596.mlab.com:49596/t-shirt-shop", ( error, database ) => {
      if ( error ) {
        bot.sendMessage( id, error, { parse_mode: "Markdown" } );
      } else {
        const db = database.db( dbName );
        db.collection( "tShirts" ).insert( good, ( error, result ) => {
          if ( error ) {
            bot.sendMessage( id, error, { parse_mode: "Markdown" } );
          } else {
            bot.sendMessage( id, "Добавление прошло успешно", { parse_mode: "Markdown" } );
          }
        } );
      }
    } );
  }

  addGood = () => {
    if ( fs.readdirSync( "./img/" ) == false || !good.name || !good.price || !good.size ) {
      bot.sendMessage( id, "Заполните все поля", { parse_mode: "Markdown" } );
    } else {
      image2base64( `img/${ fs.readdirSync( "./img/" )[ 0 ] }` )
        .then(
          ( response ) => {
            good.photo = `data:image/jpeg;base64,${ response }`
            fs.unlink( `img/${ fs.readdirSync( "./img/" )[ 0 ] }`, function ( err ) {
              if ( err ) throw err;
            } );
            addToDB( good );
          }
        )
        .catch(
          ( error ) => {
            bot.sendMessage( id, error, { parse_mode: "Markdown" } );
          }
        )
    }
  }

  addSize = () => {
    bot.sendMessage( id, "Введите размер", { parse_mode: "Markdown" } );
    bot.on( "message", ( msg ) => {
      if ( !good.size ) {
        good.size = msg.text;
        addGood();
      }
    } );
  }


  addPrice = () => {
    bot.sendMessage( id, "Введите цену", { parse_mode: "Markdown" } );
    bot.on( "message", ( msg ) => {
      if ( !good.price ) {
        good.price = +msg.text;
        addSize();
      }
    } );
  }

  addName = () => {
    bot.sendMessage( id, "Введите название", { parse_mode: "Markdown" } );
    bot.on( "message", ( msg ) => {
      if ( !good.name ) {
        good.name = msg.text;
        addPrice();
      }
    } );
  }

  addPhoto = () => {
    bot.sendMessage( id, "Добавьте фото", { parse_mode: "Markdown" } );
    bot.on( "photo", ( msg ) => {
      const photoId = msg.photo[ msg.photo.length - 1 ].file_id;
      if ( fs.readdirSync( "./img/" ) == false ) {
        bot.downloadFile( photoId, "./img" ).catch( err => bot.sendMessage( id, err, { parse_mode: "Markdown" } ) );
        addName();
      }
    } );
  }

  addPhoto();
  if ( fs.readdirSync( "./img/" )[ 0 ] ) {
    fs.unlink( `img/${ fs.readdirSync( "./img/" )[ 0 ] }`, function ( err ) {
      if ( err ) throw err;
    } );
  }
}

// ------------------------------------------ Show goods -----------------------------

function Show( id ) {
  MongoClient.connect( "mongodb://Nivolves:Danya2000@ds149596.mlab.com:49596/t-shirt-shop", ( error, database ) => {
    if ( error ) {
      bot.sendMessage( id, error, { parse_mode: "Markdown" } );
    } else {
      const db = database.db( dbName );
      db.collection( "tShirts" ).find().toArray( ( error, data ) => {
        if ( error ) {
          bot.sendMessage( id, error, { parse_mode: "Markdown" } );
        } else {
          data.map( ( { name, _id } ) => {
            bot.sendMessage( id, `name: ${ name }; \n id: ${ _id }`, { parse_mode: "Markdown" } );
          } );
        }
      } );
    }
  } );
}

// ------------------------------------------ Delete good -----------------------------

function Delete( id ) {

  let good = {
    _id: undefined,
  }

  deleteGood = () => {
    const _id = new require( 'mongodb' ).ObjectID( good._id );
    MongoClient.connect( "mongodb://Nivolves:Danya2000@ds149596.mlab.com:49596/t-shirt-shop", ( error, database ) => {
      if ( error ) {
        bot.sendMessage( id, error, { parse_mode: "Markdown" } );
      } else {
        const db = database.db( dbName );
        db.collection( "tShirts" ).deleteOne( { _id }, ( error ) => {
          if ( error ) {
            bot.sendMessage( id, error, { parse_mode: "Markdown" } );
          } else {
            bot.sendMessage( id, "Товар удален", { parse_mode: "Markdown" } );
          }
        } );
      }
    } );
  }

  bot.sendMessage( id, "Введите id (id можно получить нажав на кнопку 'Показать все товары')", { parse_mode: "Markdown" } );
  bot.on( "message", ( msg ) => {
    if ( !good._id ) {
      good._id = msg.text;
      deleteGood();
    }
  } );
}



bot.onText( /\/tShirts/, ( msg, match ) => {

  const chatId = msg.chat.id;
  bot.sendMessage( chatId, "Выберите действие", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Добавить товар",
            callback_data: "add"
          },
        ],
        [
          {
            text: "Показать все товары",
            callback_data: "show"
          },
          {
            text: "Удалить товар",
            callback_data: "delete"
          },
        ]
      ]
    }
  } );
} );


bot.on( "callback_query", query => {
  const id = query.message.chat.id;
  const action = query.data;

  switch ( action ) {
    case "add":
      Add( id );
      break;
    case "show":
      Show( id );
      break;
    case "delete":
      Delete( id );
      break;
    default:
      break;
  }

} );

app.listen( 8000, () => {
  console.log( '8000' );
} );


