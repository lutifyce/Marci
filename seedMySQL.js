var mysql = require('mysql2');

var drop = 'TRUNCATE TABLE marcis;'
var seedQuery = 'INSERT INTO marcis (title, nick, avatar, about) VALUES ("Марси в аниме", "marci_anime", "/images/marci_anime.jpg", "У Марси много обожателей, но о её происхождении известно немногим. Обычно она сопровождает в пути принцессу Мирану, но корни их дружбы сплетены в таких секретах, которые ни одна из них не раскроет без надобности."), ("Марси в игре", "marci_in_game", "/images/in_dota_marci.jpg", "Marci (Марси) является героем ближнего боя с основной характеристикой Сила. Роли: Поддержка, Керри, Инициация, Контроль, Побег. Скорость передвижения: 310, бронь: 2.8, сила: 23 + 3.3, ловкость: 20 + 2.4, интеллект: 19 + 1.9. Сложность героя: 2 из 3. На сегодняшний день игроки ходят этим героем в сложную линию: около 53%, в легкую линию: 24%, в центр: 18%. Похоже это оптимальный вариант, ведь умения Марси позволяют усиливать союзника на линии и наносить урон по области плюс оглушать.."), ("Промо Марси", "marci_promo", "/images/marci_promo.jpg", "Компания Valve в ходе чемпионата The International 10 представила нового героя Dota 2. И им стала Марси, персонаж аниме «DOTA: Кровь дракона», которое вышло на Netflix. Это служанка и телохранитель Мираны, немая девушка с необычайными боевыми навыками.Марси станет 121-м героем Dota 2. До неё самым свежим персонажем была Донбрейкер, она появилась в игре 9 апреля. Встреча с Марси должна состояться до конца осени.");'

var connection = mysql.createConnection({
host : '127.0.0.1',
port: '3306',
user : 'root',
password : 'zxcluti',
database: 'marci'
});
connection.connect()



console.log("Running SQL seed...")


// Drop content
connection.query(drop, err => {
if (err) {
throw err
}
// Seed content
connection.query( seedQuery, err => {
if (err) {
throw err
}
console.log("SQL seed completed!")
connection.end()
})
})