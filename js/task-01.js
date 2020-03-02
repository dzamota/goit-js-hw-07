'use strict';

const listCategory = document.querySelectorAll('li.item');

console.log(`В списке ${listCategory.length} категорий.`);

listCategory.forEach(element =>
  console.log(
    `Категория: ${element.firstElementChild.textContent} 
Количество элементов: ${element.lastElementChild.children.length}.`
  )
);
