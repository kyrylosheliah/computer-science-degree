//1. Напишіть гру «Вгадай число від 1 до 10». Варіанти відповідей: «Тепло», «Холодно», «Гаряче», «Вгадав». Число вибирається по елементу випадковості.
let num = 0;//Math.round(Math.random()*9 + 1);
let numAnswer = -1;
let numTemp = 0;
numAnswer = prompt("Угадайте число 1-10", 0);
while (numAnswer != num){
    numTemp = Math.abs(num - numAnswer);
    if (numTemp >= 6){
      numAnswer = prompt("Холодно", 0);
    } else if (numTemp >= 3){
      numAnswer = prompt("Тепло", 0);
    } else if (numTemp >= 1){
      numAnswer = prompt("Горячо", 0);
    } else {
      numAnswer = num;
      alert("не важно");
    }
}
console.log("Задание 1: num = " + num);
//2. Створіть на вашій сторінці посилання-перехід на іншу сторінку, в результаті переходу користувачеві виводиться повідомлення:
notify.onclick = function() { alert("Клик по ссылке"); };
console.log(`Задание 2: notify.onclick = function() { alert("Клик по ссылке"); };`);
//3. У вікні діалогу користувач вводить текстове речення. Скрипт повинен порахувати, скільки в реченні голосних букв, скільки приголосних, скільки знаків пунктуації та вивести відповідне вікно діалогу з результатами.
function switchPlural(term, terms) {
    let seсondDigit = Math.abs(term) % 100;
    let firstDigit = seсondDigit % 10;
    if (seсondDigit > 10 && seсondDigit < 20) { return terms[2]; }
    else if (firstDigit > 1 && firstDigit < 5) { return terms[1]; }
    else if (firstDigit == 1) { return terms[0]; }
    else { return terms[2]; }
}
let strArr = [];
let str1 = prompt("Введите предложение", "В чащах юга жил бы циртрус? Да, но фальшивый экземпляръ!");
let num1 = 0, num2 = 0, num3 = 0;
{   let temp1 = str1.match(/[ауоыиэяюёе]/gi);
    let temp2 = str1.match(/[бвгджзйклмнпрстфхцчшщ]/gi);
    let temp3 = str1.match(/[.,?!":()]/gi);
    num1 = (temp1==null) ? (0) : (temp1.length);
    num2 = (temp2==null) ? (0) : (temp2.length);
    num3 = (temp3==null) ? (0) : (temp3.length); }
let str = `в предложении '${str1}' ${num1} ${switchPlural(num1, ['гласный', 'гласных', 'гласных'])}, ${num2} ${switchPlural(num2, ['согласный', 'согласных', 'согласных'])} букв и ${num3} ${switchPlural(num3, ['знак', 'знака', 'знаков'])} препинания`;
console.log("Задание 3: " + str);
//4. У діалоговому вікні з'являється поле з написом "Введіть сюди своє ім'я" і за замовчуванням в полі "Гарі Поттер". Введене значення збережіть в змінній. Організуйте висновок введеного значення імені у вікно браузера у вигляді: "Ваше ім'я <... ..>". Доповніть код, щоб в новому діалоговому вікні з'явився напис "Почати заново?" При позитивній відповіді з'являлося діалогове вікно: "Не набридло?", При відмові - "Ну і правильно!".
let str2 = "";
num = -1;
while (1){
    str1 = prompt("Введите ваше название", "ГАГАрри 300 hundred bucks");
    alert(`Вас зовут: ${str1}`);
    if (num > 2){
        str2 = prompt("Лоботомия (да/нет)", "нет");
    } else {
        str2 = prompt("А вы приходите сами? (да/нет)", "нет");
    }
    ++num;
    if (str2 == "нет") { break; }
}
console.log(`Задание 4: тупил ${num} ${switchPlural(num, ['раз','раза','раз'])}`);
//5. Створіть HTML-документ, в якому буде 2 посилання: перше посилання повинно посилатися на PDF файл; при натисканні на неї випадає повідомлення з попередженням про те, що для завантаження документа потрібно програма Acrobat, і продовжити завантаження чи ні; використовуйте для написання метод confirm (...) для підтвердження завантаження; друга посилання повинне містити такий код, щоб при наведенні на неї миші змінювався колір фону документа на червоний.
id1ref.onclick = function() { 
  if (confirm("Для открытия этого документа необходима программа Adobe Acrobat. Продолжить?")){
    window.open("web t lab3 done.pdf");
  }
};

let id2ref = document.getElementById('id2ref');
let id2refBackgroundTemp = id2ref.style.background;
id2ref.addEventListener("mouseover", () => (handle1(document.body)));
id2ref.addEventListener("mouseout", () => (handle2(document.body)));
function handle1(term) {
  term.style.background = 'red';
}
function handle2(term) {
  term.style.background = id2refBackgroundTemp;
}
//6. Напишіть скрипт, в якому користувача просять ввести правильний пароль. Якщо пароль правильний, у вікні браузера з'являється повідомлення про те, що пароль вірний. При введенні неправильного пароля - випадає повідомлення про неправильно введений пароль. Для виконання завдання введіть змінну password, в яку збережіть вірне значення пароля.
let password = "1";
let pointer = document.createElement("button");
pointer.setAttribute("id", "passwordFieldToggle");
pointer.style.width = "200px";
pointer.style.height = "200px";
pointer.addEventListener("click", toggleInputPassword);
document.body.appendChild(pointer);
pointer.textContent = "Включить поле для ввода пароля";
pointer = document.createElement("button");
pointer.setAttribute("id", "passwordFieldSubmit");
pointer.style.width = "200px";
pointer.style.height = "200px";
pointer.addEventListener("click", checkPassword);
pointer.textContent = "Отправить";
document.body.appendChild(pointer);
function checkPassword(){
  if (document.getElementById("passwordField")==null){
    alert("Форма ввода не существует и не заполнена, нажмите на кноpochque");
    return false;
  } else {
    if(document.getElementById("passwordField").value == password){
      alert("Пароль верный");
      return true;
    } else {
      alert("Пароль неверный");
      return false;
    }
  }
}
function toggleInputPassword() {
  if (document.getElementById("passwordField") == null){
    let beforeElement = document.getElementById("passwordFieldToggle");
    pointer = document.createElement("input");
    pointer.setAttribute("id", "passwordField");
    pointer.setAttribute("type", "password");
    beforeElement.after(pointer);
    beforeElement = pointer;
  } else {
    document.getElementById("passwordField").remove();
  }
}
//7. Створіть простий HTML-документ. Додайте два абзаци з довільним текстом. Організуйте між двома абзацами формування діалогового вікна привітання, задавши необхідні команди всередині тега <script>. Додайте команду виведення вікна повідомлення після закриття діалогового вікна.
//Виконайте все теж саме, задавши необхідні команди JavaScript в зовнішньому файлі.
pointer = document.createElement("div");
pointer.textContent = "Додайте два абзаци з довільним текстом";
document.body.appendChild(pointer);
alert("Організуйте між двома абзацами формування діалогового вікна привітання");
pointer = document.createElement("div");
pointer.textContent = "Додайте два абзаци з довільним текстом";
document.body.appendChild(pointer);
//8. За допомогою об'єкта Screen дізнайтеся і виведіть дозвіл екрана, висоту і ширину екрана, глибину кольору (вимірюється в бітах на піксель) встановлені у користувача
pointer = document.createElement("div");
pointer.textContent = `screen.height = ${screen.height}; screen.width = ${screen.width}; screen.pixelDepth = ${screen.pixelDepth}; screen.availHeight = ${screen.availHeight}; screen.availWidth = ${screen.availWidth}; screen.colorDepth = ${screen.colorDepth};`;
document.body.appendChild(pointer);
//9. Створіть простий HTML-документ. Додайте скрипт, на основі якого будуть виконуватися наступні умови: якщо на сторінку зайшов користувач через браузер Microsoft Internet Explorer, направте його автоматично на сторінку Ex1.html; якщо на сторінку зайшов користувач через будь-який інший браузер, направте його на сторінку Ex2.html.
window.onload = function() { 
  if ((/mozilla/.test(window.navigator.userAgent) &&
       !/firefox/.test(window.navigator.userAgent) &&
       !/chrome/.test(window.navigator.userAgent) &&
       !/safari/.test(window.navigator.userAgent) &&
       !/opera/.test(window.navigator.userAgent)) ||
       /msie/.test(window.navigator.userAgent)){
         if (confirm("Ваш браузер IE, вы будете перенаправлены на страницу")){
          window.open("IE_page.html");
         }
  } else {
    if (confirm("Ваш браузер не IE, вы будете перенаправлены на страницу")){
      window.open("NON_IE_page.html");
    }
  }
};
//10. Створіть простий HTML документ, в якому представлені кнопки переходу Вперед, Назад і Перейти на ... кроків з полем для введення кроків по історії перегляду.
pointer = document.createElement("button");
pointer.setAttribute("name", "history.back()");
pointer.style.width = "200px";
pointer.style.height = "200px";
pointer.addEventListener("click", ()=>(history.back()));
pointer.textContent = "Назад по истории";
document.body.appendChild(pointer);
pointer = document.createElement("button");
pointer.setAttribute("name", "history.forward()");
pointer.style.width = "200px";
pointer.style.height = "200px";
pointer.addEventListener("click", ()=>(history.forward()));
pointer.textContent = "Вперед по истории";
document.body.appendChild(pointer);
pointer = document.createElement("button");
pointer.setAttribute("name", "window.location.href");
pointer.style.width = "200px";
pointer.style.height = "200px";
pointer.addEventListener("click", windowLocationHrefCallHolder);
pointer.textContent = "Перейти по ссылке ... (ввод)";
document.body.appendChild(pointer);
function windowLocationHrefCallHolder(){
  let term = prompt("Введите адрес для перехода");
  if (term.match(/http:\/\/https:\/\//gi)){
    location = term;
  } else {
    location = "http://"+term;
  }
}
//11. Створіть довільний HTML документ, включивши в нього теги TITLE, HEAD, BODY, DIV, P, коментарі, пробіли, UL, LI, TABLE, TR, TD, FORM і ін. Виведіть на екран наступну інформацію по даному документу: перелік всіх вузлів DOM і їх типів, найменування тегів для елементів.
//Зчитайте HTML-вміст довільних елементів у вигляді рядка. Замініть їх вміст кількома способами: innerHTML, outerHTML, data. Підкресліть в чому відмінності даних способів.
str = "";
for (let item of document.childNodes){
  str += `item.tagName: ${item.tagName}
item.attributes:
${item.attributes}\n`;
}
console.log("Задание 11:\n" + str);
//12. Для нижче наведеної сторінки напишіть (трьома способами) код, який отримує елемент HEAD; напишіть код, який отримує UL; напишіть код, який отримує другий LI.
//<!DOCTYPE HTML>
//<html>
//<head>
//  <meta charset="utf-8">
//</head>
//<body>
//  <div>Пользователи:</div>
//  <ul>
//    <li>Маша</li>
//    <li>Вовочка</li>
//  </ul>
//  <!-- комментарий -->
//  <script>
//    // ... ваш код
//  </script>
//</body>
//</html>
str = `document.head.textContent: \n${document.head.textContent}\n
document.getElementsByTagName("ul").textContent: \n${document.getElementsByTagName("ul")[0].textContent}\n
document.querySelector("ul").children[1].textContent: \n${document.querySelector("ul").children[1].textContent}\n`
console.log("Задание 12:\n" + str);
//13. Створіть HTML-сторінку що містить наступну форму заповнення даних. Додайте скрипт, який перевіряє такі дані: чи заповнене поле імені, чи введений пароль і містить він більше 4-х символів, чи збігаються значення, введені в обидва поля для паролів, чи заповнене поле електронної адреси і чи містить воно символ @, чи заповнене поле повідомлення та чи містить воно більше 10 символів. При недотриманні умов, курсор повинен встановитися в те поле, де користувачем введено невірне значення
document.getElementById("submit").addEventListener("click", formCheck);
function formCheck(){
  console.log("Задание 13:\n" + `Имя заполнено: ${(document.getElementById("name").value!="")?"Да":"Нет"};
Пароль заполнен: ${(document.getElementById("password1").value!="")?"Да":"Нет"};
В пароле больше 4х символов: ${(document.getElementById("password1").value.length>4)?"Да":"Нет"};
Пароли совпадают: ${(document.getElementById("password1").value==document.getElementById("password2").value)?"Да":"Нет"};
Почта заполнена: ${(document.getElementById("email").value!="")?"Да":"Нет"};
В почте присутствует символ "@": ${((/@/).test(document.getElementById("email").value))?"Да":"Нет"};
Поле сообщения заполнено: ${(document.getElementById("comment").value!="")?"Да":"Нет"};
В поле сообщения больше 10ти сиволов: ${(document.getElementById("comment").value.length>10)?"Да":"Нет"};`);
}
//14. Придумайте найкоротший код для перевірки, чи порожній елемент elem. «Порожній» - значить немає дочірніх вузлів, навіть текстових.
//if (/*...ваш код проверки elem... */) { узел elem пуст }
pointer = document.getElementById("emptyDiv");
if (pointer.innerHTML=="") {console.log("Задание 13: elem пуст"); }
else { console.log("Задание 14: elem не пуст"); }
//15. Вивести і вивчити властивості об'єкта image. Розробити функцію для зміни розмірів зображення, розміри зображення вводити в діалозі.
num1 = Math.abs(Math.round(prompt("Введите ширину изображения", 200).replace(/[^0-9]/)));
num2 = Math.abs(Math.round(prompt("Введите высоту изображения", 200).replace(/[^0-9]/)));
let img = new Image(num1, num2);
img.src = 'picture.png';
document.body.appendChild(img);
console.log("Задание 15: " + img);
//16. Вивести і вивчити властивості об'єкта form. Розробити функцію для зміни тексту в полі форми, текст водити в діалозі.
let formObject = new FormData();
str1 = "";
str2 = "";
while (1){
    str1 = prompt("Введите ключ", "ГАГАрри 300 hundred bucks");
    str2 = prompt("Введите значение", "ГАГАрри 300 hundred bucks");
    formObject.append(str1, str2);
    alert(`Добавление ключа '${str1}' и значения '${str2} к данным формы'`);
    if (str1 == "ГАГАрри 300 hundred bucks" || str2 == "ГАГАрри 300 hundred bucks") { break; }
}
console.log("Задание 16: formObject: " + formObject);