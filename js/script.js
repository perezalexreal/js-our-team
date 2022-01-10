const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

let container = document.querySelector('.team-container');

for (let i = 1; i < team.length; i++) {
  //creo elementi 
  let teamcard = document.createElement('div');
  let cardimage = document.createElement('div');
  let cardtext = document.createElement('div');
  let h3 = document.createElement('h3');
  let paragraph = document.createElement('p');
  let img = document.createElement('img');
  // assegno classi a elementi

  teamcard.classList.add('team-card');
  cardimage.classList.add('card-image');
  cardtext.classList.add('card-text');

  // aggiungo valori ad elementi 
  img.src = `img/${team[i]['image']}`
  h3.textContent = team[i]['name'];
  paragraph.textContent = team[i]['role'];

  // aggiungo elementi html in ordine 

  container.append(teamcard);
  teamcard.append(cardimage);
  cardimage.append(img)
  teamcard.append(cardtext);
  cardtext.append(h3);
  cardtext.append(paragraph);
}