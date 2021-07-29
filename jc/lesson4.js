// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
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


// створити пустий масив, наповнити його 10 об'єктами Client
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


// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sort = Clients.sort(function (a, b) {
//     return a.order.length - b.order.length;
// });
// console.log(sort);





// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і добавляет його в поточний об'єкт car
function Car(model, maker, gr_year, max_speed, engine_capacity) {
    this.model = model;
    this.maker = maker;
    this.gr_year = gr_year;
    this.max_speed = max_speed;
    this.engine_capacity = engine_capacity;

   this.drive = function (){
       return `їдемо зі швидкістю ${max_speed} на годину.`;
   }
   this.info = function (){
        return `Властивості моделі: ${model}.\nВиробник: ${maker}.\nРік випуску: ${gr_year}.Максимальна швидкість: ${max_speed}.\nОб\'єм двигуна: ${engine_capacity}.`;
    }
    this.increaseMaxSpeed = function (newSpeed){
       return max_speed+newSpeed;
    }
    this.changeYear = function (newValue){
       gr_year = newValue;
       return gr_year;
    }
    this.addDriver = function (driver){
        return this.driver = driver;
    }
}
let car = new Car('BMW','INRK',1999, 150, 10)
car.increaseMaxSpeed(30);
car.changeYear(2001);
car.addDriver({name: "ngg", age: 77});





// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// class Carr {
//     model: '';
//     maker:'';
//     gr_year: 0;
//     max_speed:0;
//     engine_capacity: 0;
// }
// let c = new Carr()