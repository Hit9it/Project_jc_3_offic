// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//___________________________________
// class Client{
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//___________________________________


// створити пустий масив, наповнити його 10 об'єктами Client
//___________________________________
// let Clients= [
// new Client(1, 'Olya', 'Kitova', 'adfojne@feij.dwe', '+83898492839', ['order','order','order','order']),
// new Client(2, 'Vasya', 'Gidon', 'adfoje@feij.dwe', '+838298492839', ['order','order']),
// new Client(3, 'Petya', 'Njnvk', 'adfojne@feij.dwe', '+38298492839', ['order','order','order']),
// new Client(4, 'Tanya', 'Fkmre', 'adjne@feij.dwe', '+8388492839', ['order']),
// new Client(5, 'Olena', 'Ferg', 'adfe@feij.dwe', '+83822839', ['order','order','order','order','order','order']),
// new Client(6, 'Micha', 'Eergw', 'ane@feij.dwe', '+382992839', ['order','order','order','order','order','order','order','order']),
// new Client(7, 'Sanya', 'Defw', 'jne@feij.dwe', '+83829849239', ['order','order','order']),
// new Client(8, 'Nikita', 'Dungeon', 'dfojne@feij.dwe', '+8388492839', ['order','order','order','order']),
// new Client(9, 'Dima', 'Master', 'fojne@feij.dwe', '+3829849839', ['order','order','order']),
// new Client(10,'Vlad', 'Holl', 'ojne@feij.dwe', '+8298492839', ['order','order'])
// ];
//___________________________________


// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//___________________________________
// let sort = Clients.sort(function (a, b) {
//     return a.order.length - b.order.length;
// });
// console.log(sort);
//___________________________________




// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і добавляет його в поточний об'єкт car
//___________________________________
// function Car(model, maker, gr_year, max_speed, engine_capacity) {
//     this.model = model;
//     this.maker = maker;
//     this.gr_year = gr_year;
//     this.max_speed = max_speed;
//     this.engine_capacity = engine_capacity;
//
//    this.drive = function (){
//        return `їдемо зі швидкістю ${max_speed} на годину.`;
//    }
//    this.info = function (){
//         return this.driver
//             ? `Властивості моделі: ${model}.\nВиробник: ${maker}.\nРік випуску: ${gr_year}.\nМаксимальна швидкість: ${max_speed}.\nОб\'єм двигуна: ${engine_capacity}\nВодій:\n Ім'я - ${this.driver.name}\n Років - ${this.driver.age}.`
//             : `Властивості моделі: ${model}.\nВиробник: ${maker}.\nРік випуску: ${gr_year}.\nМаксимальна швидкість: ${max_speed}.\nОб\'єм двигуна: ${engine_capacity}.`
//     }
//     this.increaseMaxSpeed = function (newSpeed){
//        return max_speed+newSpeed;
//     }
//     this.changeYear = function (newValue){
//        gr_year = newValue;
//        return gr_year;
//     }
//     this.addDriver = function (driver){
//         return this.driver = driver;
//     }
// }
// let car = new Car('BMW','INRK',1999, 150, 10)
// car.increaseMaxSpeed(30);
// car.changeYear(2001);
// car.addDriver({name: "No name", age: 77});
// console.log(car.info());
//___________________________________



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//___________________________________
// class CarClass {
//     constructor(model, maker, gr_year, max_speed, engine_capacity) {
//         this.model = model;
//         this.maker = maker;
//         this.gr_year = gr_year;
//         this.max_speed = max_speed;
//         this.engine_capacity = engine_capacity;
//     }
//     drive(){
//         return `їдемо зі швидкістю ${(this.max_speed)} на годину`;
//     }
//
//     info(){
//         return this.driver
//             ? `Властивості моделі: ${this.model}.\nВиробник: ${this.maker}.\nРік випуску: ${this.gr_year}.\nМаксимальна швидкість: ${this.max_speed}.\nОб\'єм двигуна: ${this.engine_capacity}\nВодій:\n Ім'я - ${this.driver.name}\n Років - ${this.driver.age}.`
//             : `Властивості моделі: ${this.model}.\nВиробник: ${this.maker}.\nРік випуску: ${this.gr_year}.\nМаксимальна швидкість: ${this.max_speed}.\nОб\'єм двигуна: ${this.engine_capacity}.`
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         return this.max_speed + newSpeed;
//     }
//
//     changeYear(newValue) {
//         return this.gr_year = newValue;
//     }
//
//     addDriver(driver) {
//         this.driver = driver;
//     }
// }
// let carr = new CarClass('MWM', 'MMM', 1977, 333, 11.1);
//
// console.log(carr);
// console.log(carr.drive());
// console.log(carr.info());
// console.log(carr.increaseMaxSpeed(33));
// console.log(carr.changeYear(1999));
// carr.addDriver({name: 'No name', age: 777});
// console.log(carr.info());
//___________________________________




// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//___________________________________
// class Popelushka {
//
//     constructor(name, age, foot_size) {
//         this.name = name;
//         this.age = age;
//         this.foot_size = foot_size;
//     }
// }
// let pop = [
//     new Popelushka('Adda', 20, 27),
//     new Popelushka('Barbara', 30, 37),
//     new Popelushka('Angela', 40, 47),
//     new Popelushka('Noelia', 50, 57),
//     new Popelushka('Masha', 60, 67),
//     new Popelushka('Varvara', 70, 77),
//     new Popelushka('Ahtung', 80, 87),
//     new Popelushka('Alibababa', 90, 97),
//     new Popelushka('DeadMau5', 100, 107),
//     new Popelushka('Clava', 110, 117)
// ];
//
// class Prince {
//     constructor(name, age, found_shoe) {
//         this.name = name;
//         this.age = age;
//         this.found_shoe = found_shoe;
//     }
//
//
//     find_love = (arr) => {
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i].foot_size === prince.found_shoe) {
//                 return arr[i];
//             }
//
//         }
//     }
//
// }
//
// let prince = new Prince('Artur', 24, 27);
// console.log(prince.find_love(pop));
//
// let find = pop.find(item => item.foot_size === prince.found_shoe);
// console.log(find);
//___________________________________