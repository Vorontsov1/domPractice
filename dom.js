// Создать div
const div = document.createElement('div');
// Добавить к нему класс wrapper
div.classList.add('wrapper');
// Поместить его внутрь тэга body
const body = document.body;
body.appendChild(div);
// Создать заголовок H1 "DOM (Document Object Model)"
const header = document.createElement('h1');
header.textContent = 'DOM(Document Object Model)';
// Добавить H1 перед DIV с классом wrapper 
div.insertAdjacentElement('beforebegin', header);


// Создать список <ul></ul>
// Добавить в него 3 элемента с текстом "один, два, три"
const ul = `
<ul>
<li>one</li>
<li>two</li>
<li>three</li>
 </ul>`;

// Поместить список внутрь элемента с классом wrapper
div.innerHTML = ul;
// =================================================
// Создать изображение
const img = document.createElement('img');
// Добавить следующие свойства к изображению
// 1. Добавить атрибут source
img.src = 'https://picsum.photos/240';
// 2. Добавить атрибут width со значением 240
img.width = 240;
// 3. Добавить класс super
img.classList.add('super');
// 4. Добавить свойство alt со значением "Super Man"
img.alt = 'Super Man';
// Поместить изображение внутрь элемента с классом wrapper
div.appendChild(img);
// Используя HTML строку, создать DIV с классом 'pDiv' + c 2-мя параграфами
const elemHTML = `
<div class = 'pDiv'>
<p>Paragraf 1</p>
<p>Paragraf 2</p>
</div>`;

// Поместить этот DIV до элемента <ul></ul>
const ulList = div.querySelector('ul');
ulList.insertAdjacentHTML('beforebegin', elemHTML);
// Добавить для 2-го параграфа класс text
const pDiv = document.querySelector('.pDiv');
pDiv.children[1].classList.add('text');
console.log(pDiv.children);
// Удалить 1-й параграф
pDiv.firstElementChild.remove();
// Создать функцию generateAutoCard, 
// которая принимает 3 аргумента: brand, color, year

// Функция должна возвращать разметку HTML:
// <div class="autoCard">
//   <h2>BRAND YEAR</h2>
//   <p>Автомобиль BRAND - YEAR года. Возраст авто - YEARS лет.</p>
// </div>

// Создать новый DIV с классом autos

// Создать 3 карточки авто, используя функцию generateAutoCard
// const carsList = [
//     { brand: 'Tesla', year: 2015, color: 'Красный' },
//     { brand: 'Lexus', year: 2016, color: 'Серебристый' },
//     { brand: 'Nissan', year: 2012, color: 'Черный' },
// ];

// Поместить эти 3 карточки внутрь DIV с классом autos

// Поместить DIV c классом autos на страницу DOM - до DIV с классом wrapper

// Добавить кнопку Удалить на каждую карточку авто

// При клике на кнопку - удалять карточку из структуры DOM
// 1. Выбрать все кнопки
// 2. Создать функцию удаления
// 3. Использовать цикл - чтобы повесить обработчик события на каждую кнопку
