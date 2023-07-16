
const ulEl = document.querySelector('#categories');
console.log(ulEl);
const categoriesList = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesList.length}`)

categoriesList.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
});
//const liItemEl = ulEl.querySelectorAll('.item');
//console.log(`Number of categories: ${liItemEl.length}`);

//const items = document.querySelectorAll('.item');
//Array.prototype.forEach.call(items, (element) => {
  // const title = element.querySelector('h2').innerHTML;
   //const itemsLength = element.querySelectorAll('li').length;
   //console.log(`Category: ${title} 
    // Elements: ${itemsLength}`);
//});