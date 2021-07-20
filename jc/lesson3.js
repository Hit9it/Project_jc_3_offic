// - створити функцію яка приймає масив та виводить його
// function mass(arr){
// console.log(arr);
// }
// let arr1 = [11,22,3,4,5,66,7,23];
// mass(arr1);

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function min(a,b,c){
//     let min;
//      if(a<b && a<c){min=a}
//      if(b<a && b<c){min=b}
//      if(c<b && c<a){min=c}
//      console.log(min);
// }
// min(10,111111,-222222);
//
// // - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function max(a,b,c){
//     let min;
//     if(a>b && a>c){min=a}
//     if(b>a && b>c){min=b}
//     if(c>b && c>a){min=c}
//     console.log(min);
// }
// max(10,111111,-222222);

// - створити функцію яка повертає найбільше число з масиву
// function maxArr(max_arr){
//     let max=max_arr[0];
//     for (let i=0; i<max_arr.length; i++){
//         if (max_arr[i]>max){
//             max=max_arr[i];
//         }
//     }
//     console.log(max)
//     return max;
// }
// let arr2=[1,2,3,4,5,6,7,8,9,10];
// maxArr(arr2);

// - створити функцію яка повертає найменьше число з масиву
// function minArr(min_arr){
//     let min=min_arr[0];
//     for (let i=0; i<min_arr.length; i++){
//         if (min_arr[i]<min){
//             min=min_arr[i];
//         }
//     }
//     console.log(min)
//     return min;
// }
// let arr3=[1,2,3,4,5,6,7,8,9,10];
// minArr(arr3);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function sumArr(sumArr){
//     let sum=0;
//     for (let i=0; i<sumArr.length; i++){
//        sum=sumArr[i]+sum;
//     }
//     console.log(sum);
//     return sum;
// }
// let arr4=[1,2,3,4,5,6,7,8,9,10];
// sumArr(arr4);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function srArr(srArr){
//     let sr=0;
//     let all=0;
//     for (let i=0; i<srArr.length; i++){
//        sr=srArr[i]+sr;
//        all++;
//     }
//     sr=sr/all;
//     console.log(sr);
//     return sr;
// }
// let arr5=[1,2,3,4,5,6,7,8,9,10];
// srArr(arr5);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//     Для виведення використати попередню функцію.
// function random() {
//     let number = Math.round(Math.random() * 100);
//     let arr=[];
//     for(let i=0; i<number; i++) {
//          arr.push(Math.round(Math.random() * 100));
//     }
//     console.log(arr);
// }
// random()

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// function objectKey1(arr){
//     let all = []
//     for ( const object of arr){
//         for (const objectKey in object) {
//             all.push(objectKey);
//         }
//     }
//     console.log(all);
//     return all;
// }
// let arr6 = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// objectKey1(arr6);

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// function object (arr){
//     let all = [];
//     for(const object of arr){
//         all = [...all, ...Object.values(object)];
//     }
//
//     console.log(all);
//     return all;
// }
// let arr7 = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// object(arr7);