import setBtnActive from './btnActive';

function createSection(name, data) {
  const section = document.createElement('section');
  section.classList.add('section');

  const title = document.createElement('h2');
  title.classList.add('section-title');
  title.textContent = name;
  section.appendChild(title);

  data.forEach((text) => {
    const para = document.createElement('p');
    para.classList.add('section-description');
    para.textContent = text;
    section.appendChild(para);
  });

  return section;
}

function loadContact() {
  const content = document.getElementById('tab-content');
  content.classList.add('flex-lay');
  content.classList.remove('grid-lay');
  content.textContent = '';
  setBtnActive('contact');

  const hoursSection = createSection('Hours', ['11:00 AM to 9:00 PM']);
  const phoneSection = createSection('Phones', [
    '(1) 123-456-7890'
  ]);

  const addressSection = createSection('Location', ['Muscatine, Iowa 52761']);

  content.appendChild(hoursSection);
  content.appendChild(phoneSection);
  content.appendChild(addressSection);
}

export default loadContact;