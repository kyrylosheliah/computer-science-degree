// Задачи на функции работы со строками (методы: toUpperCase, toLowerCase, length, substr, substring, slice).
// 1. Дана строка 'js'. Сделайте из нее строку 'JS'. Затем сделайте из нее снова строку 'js'.
let str = "js";
str += " -> " + str.toUpperCase();
console.log("Задание 1: " + str);
// 2. Преобразуйте первую букву каждого слова строки в верхний регістр.
str = "преобразуйте первую букву каждого слова строки в верхний регистр";
let strArr = str.split(" ");
for (let i = strArr.length - 1; i >= 0; --i) {
	strArr[i] = strArr[i].slice(0, 1).toUpperCase() + strArr[i].slice(1);
}
str = strArr.join(" ");
console.log("Задание 2: " + str);
// 3. Преобразуйте строку 'var_test_text' в 'varTestText'.
str = "var_test_text";
strArr = str.split("_");
for (let i = strArr.length - 1; i >= 1; --i) {
	strArr[i] = strArr[i].slice(0, 1).toUpperCase() + strArr[i].slice(1);
}
str += " -> " + strArr.join("");
console.log("Задание 3: " + str);
// 4. Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.
str = "я учу javascript!";
console.log("Задание 4: '" + str + "'.lenght = " + str.length);
// 5.  Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript'тремя разными способами (через substr, substring, slice).
str += "\nstr.substr():\t\t" + str.substr(2, 3) + ", " + str.substr(6, 10);
str += "\nstr.substring():\t" + str.substring(2, 5) + ", " + str.substring(6, 16);
str += "\nstr.slice():\t\t" + str.slice(2, 5) + ", " + str.slice(6, 16);
console.log("Задание 5: " + str);
// 6. Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.
num = str.indexOf("учу");
console.log("Задание 6: '" + str + "'.indexOf('учу') = " + num);
// 7.  Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по следующему принципу: если количество символов этого текста больше заданного в переменной n, то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'. В противном случае в переменную result запишем содержимое переменной str.
num = Number(prompt("Введите размер str", 15));
let strAdd = "...";
if (num > str.length){
    num = str.length;
    strAdd = ""
}
str = str.slice(0, num) + strAdd;
console.log("Задание 7: " + str);
// Работа с replace, split, join
// 8. Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены. 
str = 'Я-учу-javascript!';
strAdd = str;
while (strAdd.indexOf("-") != -1){
    strAdd = strAdd.replace("-", "!");
}
str += " -> " + strAdd;
console.log("Задание 8: " + str);
// 9. Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива. 
str = 'Я-учу-javascript!';
strArr = str.split("-");
str += " -> ";
for (let i = 0; i < strArr.length; ++i){
    str += "[" + strArr[i] + "] ";
}
console.log("Задание 9: " + str);
// 10.  В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'. 
str = "2025-12-31";
strArr = str.split("-");
str += " -> " + (strArr.reverse()).join(".");
console.log("Задание 10: " + str);
// 11. Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'. Показать решение.
strArr = ['я', 'учу', 'javascript', '!'];
str = strArr.join("+");
console.log("Задание 11: " + str);
// Задачи на функции работы с масивами (методы concat, reverse, push, unshift, shift, pop, slice, splice sort, Object.keys)
// 12. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);
console.log("Задание 12: [" + arr1 + "] + [" + arr2 + "] = [" + arr3 + "]");
// 13. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1] не используя цикл.
arr3 = arr1.slice();
arr3.reverse();
console.log("Задание 13: [" + arr1 + "].reverse() = [" + arr3 + "]");
// 14. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6
arr1 = [1, 2, 3];
arr2 = [4, 5, 6];
arr3 = arr1.concat(arr2);
console.log("Задание 14: [" + arr1 + "] + [" + arr2 + "] = [" + arr3 + "]");
// 15. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6
arr1 = [1, 2, 3];
arr2 = [4, 5, 6];
arr3 = arr2.concat(arr1);
console.log("Задание 15: [" + arr2 + "] + [" + arr1 + "] = [" + arr3 + "]");
// 16. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и последний элементы при помощи функцій shift и pop
strArr = ['js', 'css', 'jq'];
str = "strArr = [" + strArr + "]; "
str += "strArr.shift() = '" + strArr.shift() + "'; "; 
str += "strArr.pop() = '" + strArr.pop() + "'; ";
console.log("Задание 16: " + str);
// 17. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3]\
arr1 = [1, 2, 3, 4, 5];
arr2 = arr1.slice(0, 3);
console.log("Задание 17: [" + arr1 + "].slice(0, 3) = [" + arr2 + "]");
// 18. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
arr1 = [1, 2, 3, 4, 5];
arr2 = arr1.slice();
arr2.splice(1, 2);
console.log("Задание 18: [" + arr1 + "].splice(1, 2) = [" + arr2 + "]");
// 19. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
arr1 = [1, 2, 3, 4, 5];
arr2 = arr1.slice();
arr3 = arr1.slice();
arr2.splice(-2);
arr3.splice(0, 3);
let arr4 = arr2.concat(['a','b','c']).concat(arr3);
console.log("Задание 19: [" + arr2 + "] + ['a', 'b', 'c'] + [" + arr3 + "] = [" + arr4 + "]");
// 20. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
arr1 = [3, 4, 1, 2, 7];
arr2 = arr1.slice();
arr2.sort();
console.log("Задание 20: [" + arr1 + "].sort() = [" + arr2 + "]");
// 21. Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
let obj = {js:'test', jq: 'hello', css: 'world'};
strArr = Object.keys(obj);
console.log("Задание 21: [" + obj + "].keys() = [" + strArr + "]");
// Работа со стандартными функциями
// 22. Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения.
str = "cделайте заглавным первый символ этой строки";
str += " -> " + str.slice(0, 1).toUpperCase() + str.slice(1);
console.log("Задание 22: '" + str + "'");
// 23.  Дана строка. Сделайте заглавным последний символ этой строки не используя цикл. Найдите два решения.
str = "cделайте заглавным последний символ этой строки";
num = str.length;
str += " -> " + str.slice(0, num-1) + str.slice(num-1).toUpperCase();
console.log("Задание 23: '" + str + "'");
// 24.  Дано число, например, 3751. Отсортируйте цифры в нем (сделайте из него 1357) не используя цикл. 
num = 3751;
str = String(num);
arr1 = str.split("");
arr1.sort();
str = String(num) + " -> " + arr1.join("");
console.log("Задание 24: " + str);
// 25. Проверьте, что строка начинается на http://. 
str = "https://meet.google.com/bjq-smsv-dbu";
let str1 = " - не https протокол"
if (str.startsWith("https://")){
    str1 = " - https протокол";
}
str += str1;
console.log("Задание 25: " + str);
// 26. Проверьте, что строка заканчивается на .html.
str = "file:///C:/Users/I/Desktop/web%20t%20lab3/index.html";
str1 = " - не html файл"
if (str.endsWith(".html")){
    str1 = " - html файл";
}
str += str1;
console.log("Задание 26: " + str);
// 27. Дана строка вида '/folder1/folder2/folder3/folder4/'. Строки между слешеми могут быть любыми. Получите содержимое второго блока (в нашем случае 'folder2').
str = "/folder1/folder2/folder3/folder4/";
strArr = str.split("/");
while (strArr[0] == ""){ strArr.splice(0,1); }
strArr.splice(1, 1);
str += " -> " + strArr.join("/");
console.log("Задание 27: " + str);
// 28. Дана строка вида '/folder1/folder2/folder3/folder4/'. Строки между слешеми могут быть любыми. Удалите из нее блок с заданным номером. Найдите два решения, оба без цикла.
str = "/folder1/folder2/folder3/folder4/";
strArr = str.split("/");
while (strArr[0] == ""){ strArr.splice(0,1); }
num = Number(prompt("Введите удаляемый из ["+strArr+"] номер строки", 3));
num -= 1;
strArr.splice(num, 1);
str += " -> " + strArr.join("/");
console.log("Задание 28: " + str);
// Работа с пользовательскими функціями
// 29. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
function toSquare(toSq) { return toSq*toSq; }
num = Number(prompt("Введите число для возведения в квадрат", 906));
str = num + "^2 = " + toSquare(num);
console.log("Задание 29: " + str);
// 30. Сделайте функцию, которая возвращает сумму двух чисел.
function toSum(term1, term2) { return term1+term2; }
let num1 = Number(prompt("Введите первое число", 906));
let num2 = Number(prompt("Введите второе число", 609));
str = num1 + "+" + num2 + " = " + toSum(num1, num2);
console.log("Задание 30: " + str);
// 31. Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
function aHeckingThiCCfunction(term1, term2, term3) { return (term1-term2)/term3; }
let num3 = Number(prompt("Введите третее число", 960));
str = "(" + num1 + "-" + num2 + ")/" + num3 + " = " + aHeckingThiCCfunction(num1, num2, num3);
console.log("Задание 31: " + str);
// 32. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
let dayArr = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
function getDayName(term, dayArr) { 
    term = Number(term) % 8;
    switch (term) {
        case 1: case 2: case 3: case 4: case 5: case 6: case 7: 
            return dayArr[term-1];
        default:
            return "'Error: cant interpret 0 as a day'";
    }
}
num1 = Number(prompt("Введите номер дня недели", 7));
str = "getDayName(" + num1 + ", [" + dayArr + "]) = " + getDayName(num1, dayArr);
console.log("Задание 32: " + str);
// 33. Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.
function areEqual(term1, term2) { return term1==term2; }
str = "areEqual("+num1+","+num2+") = " + areEqual(num1,num2);
console.log("Задание 33: " + str);
// 34.  Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть функция вернет true, а если нет - false.
function sumIsBiggerThan10(term1, term2) { return (term1+term2)>10; }
str = "sumIsBiggerThan10("+num1+","+num2+") = " + sumIsBiggerThan10(num1,num2);
console.log("Задание 34: " + str);
// 35.  Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.
function isNegative(term1) { return term1<0; }
str = "isNegative("+num1+") = " + isNegative(num1);
console.log("Задание 35: " + str);
// 36. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
function isInRange(term1, from, to) { 
    if (from > to) { let tmp = from; from = to; to = tmp; }
    return (term1 > from)&&(term1 < to);
}
str = "isInRange("+num1+", 0, 10) = " + isInRange(num1, 0 , 10);
console.log("Задание 36: " + str);
// 37. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
function getSymbolSum(symbols) {
    let toReturn = 0;
    if (typeof(symbols)=="string" || Array.isArray(symbols)){
        for (let i = symbols.length-1; i >=0; --i){
            toReturn += Number(symbols[i]);
        }
    } else {
        toReturn = symbols;
    }
    return toReturn;
}
str = "getSymbolSum('123987') = " + getSymbolSum("123987");
console.log("Задание 37: " + str);
// 38. Сделайте функцию getDividers, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число). Сделайте функцию, которая параметром принимает 2 числа, а возвращает массив их общих делителей. Для этого используйте вспомогательную функцию getDividers
function getDivisors(term) {
    let toReturn = [];
    for (let i = term; i > 0; --i) {
        if (term % i == 0) {
            toReturn.push(i);
        }
    }
    return toReturn;
}
function getCommonDivisors(term1, term2) {
    let toCompare1 = getDivisors(term1);
    let toCompare2 = getDivisors(term2);
    let toReturn = toCompare1.filter(function(item) { return toCompare2.indexOf(item) >= 0; });
    return toReturn;
}
str = "getCommonDivisors(12, 16) = " + getCommonDivisors(12, 16);
console.log("Задание 38: " + str);
// 39. Пусть у нас есть автобусные билеты. Номер каждого билета состоит из 6 цифр. Счастливый билет - это билет, сумма первых трех цифр которого равна сумме вторых трех цифр. Сделайте функцию isHappy, которая проверяет, счастливый билет или нет. Если это так - пусть функция возвращает true, а если не так - то false.
function ArrayStringSum(term) {
    let toReturn = 0;
    for (let i = term.length-1; i >= 0; --i) {
        toReturn += Number(term[i]);
    }
    return toReturn;
}
function isALuckyTicket(symbols) {
    if (symbols.length % 2 != 0) { return false; }
    if (typeof(symbols)=="string" || Array.isArray(symbols)) {
        let tempSize = symbols.length;
        let toCompare1 = symbols.slice(0,tempSize/2);
        let toCompare2 = symbols.slice(tempSize/2);
        if (ArrayStringSum(toCompare1) == ArrayStringSum(toCompare2)) {
            return true;
        } else { return false; }
    }
}
str = "isALuckyTicket('123321') = " + isALuckyTicket("123321");
console.log("Задание 39: " + str);
// 40. Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой. Подсказка: используйте метод split, чтобы разбить строку на слова в массив и затем в цикле примените вашу функцию ucfirst для каждого элемента этого массива. Затем слейте этот массив обратно с помощью join.
function applyToUpperCase_firstLetter(term) {
    if(term.length > 0)
    return term.slice(0, 1).toUpperCase() + term.slice(1);
}
str = "сделайте заглавным первый символ каждого слова этой строки";
strArr = str.split(" ");
str += " -> ";
for (let i = 0; i < strArr.length; ++i) {
    strArr[i] = applyToUpperCase_firstLetter(strArr[i]);
}
str += strArr.join(" ");
console.log("Задание 40: " + str);
// 41. Дана строка с дефисами, например '12-345-67-89-10'. Замените первые 3 дефиса на !.
str = "12-345-67-89-10";
strArr = str.split("-");
num = 4;
if (strArr.length < num+1) {
    num = strArr.length;
    str1 = strArr.join("!")
    str += " -> " + str1;
} else {
    let strArr1 = strArr.slice(0, num);
    let strArr2 = strArr.slice(num);
    str1 = strArr1.join("!")
    let str2 = strArr2.join("-");
    let strArr3 = [str1, str2];
    str += " -> " + strArr3.join("-");
}
console.log("Задание 41: " + str);
// 42. Сделайте функцию strReplace, которая будет осуществлять поиск и замену. Первым параметром функция должна принимать массив 'что меняем', а вторым параметром массив 'на что меняем'. Третьим параметром строку, в которой меняем. Функция должна искать в строке элементы первого массива и менять их на соответствующие элементы второго массива.
function stringReplace(what, withWhat, where) {
    num = where.indexOf(what);
    if (num >= 0) {
        let tempLenght = what.length;
        let strArr1 = [where.slice(0, num), where.slice(num, num+tempLenght), where.slice(num+tempLenght)];
        strArr1[1] = withWhat;
        return strArr1.join("");
    } else {
        return where;
    }
}
str = "123 321 1234567890";
str1 = "3456789";
str2 = "...";
str += " -> " + stringReplace(str1, str2, str);
console.log("Задание 42: " + str);
// 43. Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.
function ArrayContainsSequenceMention(what, where) {
    for (let i = where.length - 1; i >= 0; --i){
        num = where[i].indexOf(what);
        if(num >= 0){
            return true;
        }
    }
    return false;
}
strArr = ["123", "321", "1324567891230"];
str1 = "123";
str = "ArrayContainsSequenceMention('"+str1+"', ["+strArr+"]) = " + ArrayContainsSequenceMention(str1, strArr);
console.log("Задание 43: " + str);
// 44. Сделайте функцию, которая меняет местами ключи и значения в объекте.
function objectKeyToValueSwap(where){
    for (let key of Object.keys(where)) {
        where[where[key]] = key;
        delete where[key];
    }
}
function objectToString(fromObject){
    let temp = [];
    for (let key in fromObject){
        temp.push(key+": "+fromObject[key]);
    }
    return temp.join(", ");
}
obj = { key0: "value0", key1: "value1", key2: "value2", key3: "value3" };
str = "{ "+objectToString(obj)+" }";
objectKeyToValueSwap(obj);
str += " -> { "+objectToString(obj)+" }";
console.log("Задание 44: " + str);
// 45. Сделайте функцию, которая принимает параметрами два массива и сливает их в объект так, что элементы первого массива становятся ключами, а второго - значениями.
function ArraysToObject(term1, term2){
    if (term1.length == term2.length){
        let toReturn = {};
        for (let i = term1.length-1; i>=0; --i){
            toReturn[term1[i]] = term2[i];
        }
        return toReturn;
    } else {
        return Object();
    }
}
strArr1 = ["1-1", "1-2", "1-3", "1-4"];
strArr2 = ["2-1", "2-2", "2-3", "2-4"];
obj = ArraysToObject(strArr1, strArr2);
str = "ArraysToObject(["+strArr1+"], ["+strArr2+"]) = { "+objectToString(obj)+" }";
console.log("Задание 45: " + str);
// 46. Дан массив вида [1, 2, 3, 4, 5, 6, 7, 8, 9]. Сделайте функцию, которая будет разбивать его в двухмерный массив. Первым параметром функция принимает массив для разбиения, а вторым - сколько элементов должно быть в подмассиве. Например, так func([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) мы получим [[1, 2, 3], [4, 5, 6], [7, 8, 9]], а так func([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) мы получим [[1, 2], [3, 4], [5, 6], [7, 8], [9]].
function divideOnDimensions(where, elementsInDimension){
    let toReturn = [];
    let counter = 0;
    for (let i = 0; i < where.length;){
        toReturn.push([]);
        if (i + elementsInDimension > where.length - 1){
            for (let j = 0; i+j < where.length; ++j){
                toReturn[counter].push(where[i+j]);
            }
            break;
        }
        for (let j = 0; j < elementsInDimension; ++j){
            toReturn[counter].push(where[i+j]);
        }
        i += elementsInDimension;
        ++counter;
    }
    return toReturn;
}
function ArrToStrSyntax(term){
    if (typeof(term)=="object"){
        if (typeof(term[0])=="object"){
            return "[" + ((term.length>1) ? ArrToStrSyntax(term[0])+","+ArrToStrSyntax(term.slice(1)) : (ArrToStrSyntax(term[0])));
        } else {
            return ((term.length>1) ? term[0].toString()+","+ArrToStrSyntax(term.slice(1)) :(term[0].toString())+"]");
        }
    } else {
        return term;
    }
}
arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr2 = divideOnDimensions(arr1, 2);
str = "divideOnDimensions(["+arr1+"], 2) = ";
str += "["+ArrToStrSyntax(arr2)+"]";
console.log("Задание 46: " + str);
// 47.  Дана строка, которая содержит список классов CSS - слов, разделенных пробелом: str='open menu'. Создайте функцию addClass(str, 'class'), которая добавляет в список новый класс, но только если его там еще нет. Метод classList использовать запрещено. Примеры: addClass('open menu', 'class') сделает строку 'open menu class'. А вот addClass('open menu', 'menu') вернет строку 'open menu', так как класс menu уже есть в строке.
function addUniqueArrayItemsToString(what, where){
    let temp = where.split(" ");
    for (let i = what.length-1; i >= 0; --i){
        if(!temp.includes(what[i])){
            temp.push(what[i]);
        }
    }
    return temp.join(" ");
}
str = "row col-xl-6 align-center float";
strArr = ["row", "col-xl-6", "mt20", "hidden", "script-onclick"];
str = "'"+str+"' -> '"+addUniqueArrayItemsToString(strArr, str)+"'";
console.log("Задание 47: " + str);
// 48. Сделайте функцию removeClass, которая будет удалять заданный класс. Метод classList использовать запрещено. Примеры: removeClass('open menu class', 'menu') сделает строку 'open class'. А вот removeClass('open menu class', 'test') вернет строку 'open menu class', так как класса test нет в строке и удалять его не надо.
function deleteArrayItemsFromString(what, where){
    let temp = where.split(" ");
    for (let i = what.length-1; i >= 0; --i){
        if(temp.includes(what[i])){
            temp.splice(temp.indexOf(what[i]), 1);
        }
    }
    return temp.join(" ");
}
str = "row col-xl-6 align-center float";
strArr = ["row", "col-xl-6", "mt20", "hidden", "script-onclick"];
str = "'"+str+"' -> '"+deleteArrayItemsFromString(strArr, str)+"'";
console.log("Задание 48: " + str);
// 49.  Сделайте функцию toggleClass(str, 'class'), которая будет работать так: если класс есть - удалит его, если класса нет - добавит. Метод classList использовать запрещено.
function toggleArrayItemsInString(what, where){
    let temp = where.split(" ");
    for (let i = what.length-1; i >= 0; --i){
        if(temp.includes(what[i])){
            temp.splice(temp.indexOf(what[i]), 1);
        } else {
            temp.push(what[i]);
        }
    }
    return temp.join(" ");
}
str = "row col-xl-6 align-center float";
strArr = ["row", "col-xl-6", "mt20", "hidden", "script-onclick"];
str = "'"+str+"' -> '"+toggleArrayItemsInString(strArr, str)+"'";
console.log("Задание 49: " + str);
// 50.  Сделайте функцию, которая принимает строку на русском языке, а возвращает ее транслит.
obj = { "?": "?", "!": "!", ",": ",", ".": ".",
а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "yo",
ж: "zh", з: "z", и: "i", й: "j", к: "k", л: "l", м: "m",
н: "n", о: "o", п: "p", р: "r", с: "s", т: "t", у: "u",
ф: "f", х: "h", ц: "c", ч: "ch", ш: "sh", щ: "shch", ъ: "``",
ы: "y`", ь: "`", э: "e`", ю: "yu", я: "ya", А: "A", Б: "b",
В: "V", Г: "G", Д: "D", Е: "E", Ё: "Yo", Ж: "Zh", З: "Z",
И: "I", Й: "J", К: "K", Л: "L", М: "M", Н: "n", О: "O",
П: "P", Р: "R", С: "S", Т: "T", У: "U", Ф: "F", Х: "H",
Ц: "C", Ч: "Ch", Ш: "Sh", Щ: "Shch", Ъ: "``", Ы: "Y`",
Ь: "`", Э: "E`", Ю: "Yu", Я: "Ya" }
function CyrrToRomanTransliteration(what){
    let temp1 = [];
    let temp2 = [];
    if (typeof(what)=="string"){
        temp1 = what.split(" ");
    } else { temp1 = what; }
    for(let i = temp1.length-1; i >= 0; --i){
        temp2 = temp1[i].split("");
        for(let j = temp2.length-1; j >= 0; --j){
            temp2[j] = obj[temp2[j]];
        }
        temp1[i] = temp2.join("");
    }
    return temp1.join(" ");
}
str = "В чащах юга жил бы цитрус? Да, но фальшивый экземпляр!";
str += " -> " + CyrrToRomanTransliteration(str);
console.log("Задание 50: " + str);
// 51.  Сделайте функцию, которая возвращает множественное или единственное число существительного. Пример: 1 яблоко, 2 (3, 4) яблока, 5 яблок. Функция первым параметром принимает число, а следующие 3 параметра — форма для единственного числа, для чисел два, три, четыре и для чисел, больших четырех, например, func(3, 'яблоко', 'яблока', 'яблок').
function switchPlural(term, terms) {
    let seсondDigit = Math.abs(term) % 100;
    let firstDigit = seсondDigit % 10;
    if (seсondDigit > 10 && seсondDigit < 20) { return terms[2]; }
    else if (firstDigit > 1 && firstDigit < 5) { return terms[1]; }
    else if (firstDigit == 1) { return terms[0]; }
    else { return terms[2]; }
}
strArr = ['яблоко', 'яблока', 'яблок'];
num = prompt("Введите число яблок", 123);
str = "Получается "+num+" "+switchPlural(num, strArr);
console.log("Задание 51: " + str);
// 52. Дружественные числа – два различных числа, для которых сумма всех собственных делителей первого числа равна второму числу и наоборот, сумма всех собственных делителей второго числа равна первому числу. Например, 220 и 284. Делители для 220 это 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 и 110, сумма делителей равна 284. Делители для 284 это 1, 2, 4, 71 и 142, их сумма равна 220.
function numbersAreFriends(term1, term2) {
    let div1 = getDivisors(term1);
    let div2 = getDivisors(term2);
    let comp1 = getSymbolSum(div1);
    let comp2 = getSymbolSum(div2);
    console.log(`Задание 52: div1=${div1}; div2=${div2}; comp1=${comp1}; comp2=${comp2}`);
    if (comp1 == comp2) { return true; }
    else { return false; }
}
str = "numbersAreFriends(220, 284) = " + numbersAreFriends(220, 284);
console.log("Задание 52: " + str);
// 53. Задача: найдите все пары дружественных чисел в промежутке от 1 до 10000. Для этого сделайте вспомогательную функцию, которая находит все делители числа и возвращает их в виде массива. Также сделайте функцию, которая параметром принимает массив, а возвращает его сумму.
function friendNumbersInRange(from, to){
    if (from > to) { num = from; from = to; to = num; }
    let toReturn = [];
    let tmp = {};
    for (let i = from; i <= to; ++i){
        tmp[i]=getSymbolSum(getDivisors(i));
    }
    for (key1 in tmp) {
        for (key2 in tmp) {
            if (tmp[key1] == tmp[key2] && key1!=key2){ toReturn.push([key1, key2]); }
        }
    }
    return toReturn;
}
arr1 = friendNumbersInRange(1, 100);
let temp;
for (let i = arr1.length-1; i >= 0; --i){
    if(arr1[i][0] > arr1[i][1]){
        arr1[i][0] = [arr1[i][1], arr1[i][1] = arr1[i][0]][0];
    }
}
function ArrayUnique(term){
    term = [...new Set(term)];
    return term;
}
arr2 = ArrayUnique(arr1);
str = "Дружественные числа в диапазоне от 1 до 10000: " + ArrToStrSyntax(arr2);
console.log("Задание 53: " + str);
// 54.  Реализуйте функцию shuffle, которая перемешивает элементы массива в случайном порядке.
function ArrayShuffle(term) {
    term.sort(() => Math.random() - 0.5);
    return term;
}
arr1 = [1,2,3,4,5,6,7,8,9];
arr2 = ArrayShuffle(arr1.slice());
str = "["+arr1+"] -> ["+arr2+"]";
console.log("Задание 54: " + str);
// 55.  Реализуйте функцию strShuffle, которая перемешивает символы строки в случайном порядке.
function StringShuffle(term) {
    let temp = term.split("");
    temp.sort(() => Math.random() - 0.5);
    return temp.join("");
}
str1 = "123456789";
str2 = StringShuffle(str1);
str = "'"+str1+"' -> '"+str2+"'";
console.log("Задание 55: " + str);
// 56.  Реализуйте функцию unique, которая будет удалять дубли из массива. Пример: unique([1, 2, 3, 4, 3]) вернет [1, 2, 3, 4].
arr1 = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
arr2 = ArrayUnique(arr1.slice());
str = "["+arr1+"] -> ["+arr2+"]";
console.log("Задание 56: " + str);
// 57.  Реализуйте функцию intersection, которая вернет массив из элементов, встречающихся в каждом из переданных массивов. Пример: intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]) вернет [1, 2].
function ArraysGetCommonItems(term) {
    let toReturn = term[0].slice();
    for(let i = 0; i < term.length; ++i){
        toReturn = toReturn.filter((item) => term[i].includes(item));
    }
    return toReturn;
}
arr1 = [1, 2, 3];
arr2 = [101, 2, 1, 10];
arr3 = [2, 1];
arr4 = ArraysGetCommonItems([arr1, arr2, arr3]);
str = "ArraysGetCommonItems(["+arr1+"], ["+arr2+"], ["+arr3+"]) = " + arr4;
console.log("Задание 57: " + str);
// 58.  Реализуйте функцию union, которая объединит уникальные элементы всех массивов, переданных ей параметром. Пример: union([1, 2, 3], [101, 2, 1, 10], [2, 1]) вернет [1, 2, 3, 101, 10].
function ArraysGetUniqueItems(term){
    let toReturn = [];
    let temp = ArraysGetCommonItems(term);
    for (let i = 0; i < term.length; ++i){
        for (let j = 0; j < term[i].length; ++j){
            if (!temp.includes(term[i][j])){
                toReturn.push(term[i][j]);
            }
        }
    }
    return toReturn;
}
arr1 = [1, 2, 3];
arr2 = [101, 2, 1, 10];
arr3 = [2, 1];
arr4 = ArraysGetUniqueItems([arr1, arr2, arr3]);
str = "ArraysGetUniqueItems(["+arr1+"], ["+arr2+"], ["+arr3+"]) = " + arr4;
console.log("Задание 58: " + str);
// 59. Сделайте функцию cut, которая первым параметром будет принимать строку, а вторым параметром - сколько первых символов оставить в этой строке. Второй параметр должен быть необязательным и по умолчанию принимать значение 10.
function StringCut(term, count = 10){
    if (count > term.length) { return term; }
    else {
        let toReturn = term.slice(0, count);
        return toReturn;
    }
}
str = "01";
str1 = "0123456789";
str2 = "0123456789ABCDEF";
str += ` -> ${StringCut(str, 8)}; ${str1} -> ${StringCut(str1, 8)}; ${str2} -> ${StringCut(str2)};`;
console.log("Задание 59: " + str);
// 60. Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл.
function recursiveArrayToString(term, curPos = 0){
    return (curPos==term.length) ? "" : term[curPos] + recursiveArrayToString(term,curPos+1);
}
strArr = ["1a", "2b", "3c", "4d", "5e", "6f", "7g", "8h"];
str = `"strArr=[${strArr}]; recursiveArrayToString(strArr)='${recursiveArrayToString(strArr)}';`;
console.log("Задание 60: " + str);
// 61. Дан массив с числами. Найдите сумму элементов этого массива используя рекурсию и не используя цикл.
function recursiveArraySum(term){
    return (term.length==1) ? term[0] : term[0] + recursiveArraySum(term.slice(1));
}
arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
str = `"arr1=[${arr1}]; recursiveArraySum(arr1)=${recursiveArraySum(arr1)};`;
console.log("Задание 61: " + str);
// 62. Дан многомерный массив с числами произвольного уровня вложенности. Найдите сумму элементов этого массива используя рекурсию и не используя цикл.
function recursiveMultiDimensionArraySum(term){
    if (typeof(term)=="object"){
        if (typeof(term[0])=="object"){
            return recursiveMultiDimensionArraySum(term[0]) + ((term.length>1) ? recursiveMultiDimensionArraySum(term.slice(1)) : 0);
        } else {
            return term[0] + ((term.length>1) ? recursiveMultiDimensionArraySum(term.slice(1)) : 0);
        }
    } else {
        return term;
    }
}
arr1 = [[1, 2], [3, [4, 5, 6], 7], 8];
str = `"arr1=[${ArrToStrSyntax(arr1)}]; recursiveMultiDimensionArraySum(arr1)=${recursiveMultiDimensionArraySum(arr1)};`;
console.log("Задание 62: " + str);
// 63. Дан многомерный массив с числами, массив произвольного уровня вложенности. Найдите сумму элементов этого массива, используя рекурсию и не используя цикл.
arr1 = [[1, 2], [3, [4, 5, 6], 7], 8];
str = `"arr1=[${ArrToStrSyntax(arr1)}]; recursiveMultiDimensionArraySum(arr1)=${recursiveMultiDimensionArraySum(arr1)};`;
console.log("Задание 63: " + str);
// 64. Дан многомерный массив произвольного уровня вложенности. Узнайте его уровень вложенности.
function ArrToStrDimensions(term, level = 1){
    if (typeof(term)=="object"){
        if (typeof(term[0])=="object"){
            return "[" + ((term.length>1) ? ArrToStrDimensions(term[0], level+1)+","+ArrToStrDimensions(term.slice(1), level) : (ArrToStrDimensions(term[0], level+1)));
        } else {
            return ((term.length>1) ? level.toString()+"d,"+ArrToStrDimensions(term.slice(1), level) :(level.toString()+"d")+"]");
        }
    } else {
        return term;
    }
}
arr1 = [[1, 2], [3, [4, 5, 6], 7], 8,[2]];
str = `"arr1=[${ArrToStrSyntax(arr1)}]; ArrToStrDimensions(arr1)=[${ArrToStrDimensions(arr1)}];`;
console.log("Задание 64: " + str);
// 65. Дан многомерный массив с числами, массив произвольного уровня вложенности, например, [1, [2, [3, 4]], 5]. Сделайте функцию flatten, которая из нашего массива сделает [1, 2, 3, 4, 5]. Массив, конечно же, может быть любым.
function ArrToStr(term){
    if (typeof(term)=="object"){
        if (typeof(term[0])=="object"){
            return  ((term.length>1) ? ArrToStr(term[0])+","+ArrToStr(term.slice(1)) : (ArrToStr(term[0])));
        } else {
            return ((term.length>1) ? term[0].toString()+","+ArrToStr(term.slice(1)) :(term[0].toString()));
        }
    } else {
        return term;
    }
}
arr1 = [[1, 2], [3, [4, 5, 6], 7], 8];
str = `"arr1=[${ArrToStrSyntax(arr1)}]; ArrToStr(arr1)='${ArrToStr(arr1)}';`;
console.log("Задание 65: " + str);
// 66. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).
function sequenceSumUntilLessThan(what="10", lessThan = 9){
    let toReturn = 0;
    for (let i = what.length-1; i >= 0; --i){
        toReturn += Number(what[i]);
    }
    console.log("Задание 66: what = '"+what+"'; toReturn = " + toReturn);
    if (toReturn > lessThan) {
        return sequenceSumUntilLessThan(String(toReturn));
    }
    return toReturn;
}
strArr = "123456789";
str = `"arr1=[${strArr}]; sequenceSumUntilLessThan(strArr)=${sequenceSumUntilLessThan(strArr)};`;
console.log("Задание 66: " + str);
// 67. Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл.
arr1 = [[1, 2], [3, [4, 5, 6], 7], 8];
str = `"arr1=[${arr1}]; ArrToStrSyntax(arr1)=${ArrToStrSyntax(arr1)};`;
console.log("Задание 67: " + str);