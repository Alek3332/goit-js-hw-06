const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const ulEl = document.querySelector('.gallery');
console.log('ulEl', ulEl)
const markup = images
	.map(image => `<li><img class="picture" src=${image.url} width = '400' alt='${image.alt}'></img></li>`)
	.join('')

  ulEl.insertAdjacentHTML('beforeend', markup)
    // const img = document.createElement('img')
  
//const pictures = document.querySelectorAll('.picture')
//ulEl.style.display = 'flex';
//ulEl.style.flexWrap = 'column-reverse'
//ulEl.style.listStyle = 'none'
//ulEl.style.gap = '40px'
//ulEl.style.justifyContent = 'center'