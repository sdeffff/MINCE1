let message = 'Hello!',
user = "Max",
age = '13';

//---------ОСНОВЫ--------------\\

//alert(1/0) если хотим использовать переменную в alert то пишем без ''

//let isGreater = 4 > 1; // true
//let value = true;
//alert(typeof value);

//let str = "123";
//alert(typeof str);
//let num = Number(str);
//alert("4" + "2");

//_____________________________________\\

//---------ОПЕРАТОРЫ--------------\\

//-----------------------\\
//как работает бинарный плюс(+) складывает строки, не цифры!
//let s = "моя" + "строка";
//alert(s); // моястрока

//-----------------------\\

//унарный минус(-)
//let x = 1;
//x = -x;
//alert(x);

//-----------------------\\

//унарный плюс (+) он преобразовует строки в числа 
//let x = 1;
//alert(+true)

//маленький пример для унарного плюса:
//let pineapples = "8";
//let oranges = "19";
//console.log (+pineapples + +oranges)


//---------ПРИОРИТЕТЫ--------------\\
//короче говоря сначала происходит арифметика потом присваивание знаком "="
//let a = b = c = 2 + 2;
//console.log(a);
//console.log(b);
//console.log(c);

//более сложное уравнение:
let a = 5;
let b = 9;

let c = 3 - (a = b + 2);
console.log(c);
console.log(a);