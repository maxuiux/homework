const player1 = {

  name: 'Scorpion',
  hp: 1000,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['katana'],

  attack: function () {
    console.log(player1.name + 'fight ' + player1.name + 'Fight...');
  }

};

const player2 = {

  name: 'Sonya',
  hp: 1000,
  img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  weapon: ['katana'],

  attack: function () {
    console.log(player2.name + 'fight ' + player2.name + 'Fight...');
  }

};


function createPlayer(player, name, hp) {

  const $player1 = document.createElement('div');
  $player1.classList.add(player1);

  const $player2 = document.createElement('div');
  $player2.classList.add(player2);

  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');
  $player1.appendChild($progressbar);
  $player2.appendChild($progressbar);

  const $character = document.createElement('div');
  $character.classList.add('character');
  $player1.appendChild($character);
  $player2.appendChild($character);

  const $img = document.createElement('img');
  $img.src = player1.img, player2.img;
  $character.appendChild($img);

  const $life = document.createElement('div');
  $life.classList.add('life');
  $progressbar.appendChild($life);
  $life.style.width = '100';

  const $name = document.createElement('div');
  $name.classList.add('name');
  $progressbar.appendChild($name);
  $name.innerText = name;

  return player, name, hp;
}

const $player1 = createPlayer('player1', 'SCORPION', 50);
const $player2 = createPlayer('player2', 'SUB-ZERO', 80);


const $arenas = document.querySelector('.arenas');
$arenas.appendChild($player1);
$arenas.appendChild($player2);