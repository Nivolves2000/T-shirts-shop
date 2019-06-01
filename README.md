# T-shirts-shop (Appenlication)

The idea is to create an administrative panel for the site in Telegram

You can add, delete and view products on your site, you can also view orders.

To create this application I used:

Backend: Nodejs, express 4.16.4, telegramAPI 0.30.0, MongoDb 3.2.3, Mlab, RestAPI, image2base64 2.0.1

Frontend: ReactJs 16.8.6, StyledComponents 4.2.0

To start the application, open the backend directory in the terminal and enter the command npm i && npm start, then open the frontend director in the terminal and enter the command npm i && npm start

## Working with the admin panel

To work with the administrative panel of the application, go to Telegram and in the search bar, enter @tShirtShopAdmin_bot
then enter the / tShirts command, you will be shown a menu for working with the administration panel.

To add a product, click "Добаить товар" and follow the instructions of the bot.

To view all products, click "Показать все товары".

To delete an item, click "Удалить товар" and enter the item id, which you can get by clicking on "Показать все товары".

To view orders click on "Посмотреть заказы".
