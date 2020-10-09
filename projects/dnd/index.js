/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
import './dnd.html';

const homeworkContainer = document.querySelector('#app');

const randomInteger = (from, to) => parseInt(from + Math.random() * to - from);

let currentDrag;
let startX = 0;
let startY = 0;

document.addEventListener('mousemove', (e) => {
  if (currentDrag) {
    currentDrag.style.top = e.clientY - startY + 'px';
    currentDrag.style.left = e.clientX - startX + 'px';
  }
});

export function createDiv() {
  const newDiv = document.createElement('div');

  const minSize = 20;
  const maxSixe = 300;
  const color = 0xffffff;

  newDiv.className = 'draggable-div';
  newDiv.style.background = '#' + randomInteger(0, color).toString(16);
  newDiv.style.top = randomInteger(0, window.innerHeight) + 'px';
  newDiv.style.left = randomInteger(0, window.innerWidth) + 'px';
  newDiv.style.width = randomInteger(minSize, maxSixe) + 'px';
  newDiv.style.height = randomInteger(minSize, maxSixe) + 'px';
  newDiv.style.border = '3px solid black';
  newDiv.style.cursor = 'pointer';
  newDiv.addEventListener('mousedown', (e) => {
    currentDrag = newDiv;
    startX = e.offsetX;
    startY = e.offsetY;
  });

  newDiv.addEventListener('mouseup', () => (currentDrag = false));

  return newDiv;
}

const addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function () {
  const newDiv = createDiv();
  homeworkContainer.appendChild(newDiv);
});
