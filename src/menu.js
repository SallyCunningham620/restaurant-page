import image1 from './img/leanna-myers-unsplash.jpg';
import image2 from './img/emanuel-ekstrom-unsplash.jpg';
import image3 from './img/pixzolo-photography-unsplash.jpg';
import image4 from './img/eaters-collective-unsplash.jpg';


function setBtnActive(id) {
  const activeBtn = document.querySelector('.tab.active');
  if (activeBtn) activeBtn.classList.remove('active');

  const homeBtn = document.getElementById(id);
  homeBtn.classList.add('active');
}

function createFood(src, text, price, alt) {
  const food = document.createElement('div');
  food.classList.add('food');
  const img = document.createElement('img');
  img.setAttribute('src', src);
  img.setAttribute('alt', alt);

  const description = document.createElement('div');
  description.classList.add('description');

  const foodName = document.createElement('h3');
  foodName.textContent = text;

  const foodPrice = document.createElement('h2');
  foodPrice.textContent = price;

  description.appendChild(foodName);
  description.appendChild(foodPrice);

  food.appendChild(img);
  food.appendChild(description);
  return food;
}

function loadMenu() {
  const content = document.getElementById('tab-content');
  content.classList.add('grid-lay');
  content.classList.remove('flex-lay');

  content.textContent = '';
  setBtnActive('menu');

  const foods = [
    createFood(
      image1,
      'Classic Mac',
      '$8.00',
      'Mac and Cheese on Unsplash by Leanna Myers'
    ),
    createFood(
      image2,
      'Pesto Mac and Cheese',
      '$10.00',
      'Pesto Mac and Cheese on Unsplash by Emanuel Ekstrom'
    ),
    createFood(
      image3,
      'Grilled Mac and Cheese',
      '$10.00',
      'Grilled Mac and Cheese on Unsplash by Pixzolo Photography'
    ),
    createFood(
      image4,
      'Creamy Chicken Pasta',
      '$15.00',
      'Chicken Pasta on Unsplash by Eaters Collective'
    )
  ];

  foods.forEach((food) => {
    content.appendChild(food);
  });
}

export default loadMenu;