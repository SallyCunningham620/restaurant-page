import setBtnActive from './btnActive';
import imageCheese from './img/andra-c-taylor-jr-unsplash.jpg';

function createAboutSection() {
  const about = document.createElement('section');
  about.classList.add('section');

  const title = document.createElement('h2');
  title.classList.add('section-title');
  title.textContent = 'About';

  about.appendChild(title);

  const para = document.createElement('p');
  para.classList.add('section-description');
  para.textContent =
    'For the love of cheese. Stringy, stretchy, squishy, creamy, delicious Mac and Cheese.';
  const para2 = document.createElement('p');
  para2.classList.add('section-description');
  para2.textContent =
    'Who wants some of this amazing food? I sure do!';

  about.appendChild(para);
  about.appendChild(para2);

  const img = document.createElement('img');
  img.setAttribute('src', imageCheese);
  img.setAttribute('alt', 'Sliced cheese on brown wooden chopping board from Unsplash by Andra C Taylor Jr.');
  img.classList.add('home-img');

  about.appendChild(img);
  return about;
}

function loadHome() {
  const content = document.getElementById('tab-content');
  content.classList.add('flex-lay');
  content.classList.remove('grid-lay');

  content.textContent = '';

  const aboutSection = createAboutSection();

  setBtnActive('home');

  content.appendChild(aboutSection);
}

export default loadHome;