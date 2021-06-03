const player1 = {

  name: 'Scorpion',
  hp: 1000,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['katana'],

  attack: function () {
    console.log(name + 'fight ' + name + 'Fight...');
  }

};

function createPlayer(player, name, hp) {

    const $player1 = document.createElement('div');
    $player1.classList.add('player1');

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');
    $player1.appendChild($progressbar);

    const $character = document.createElement('div');
    $character.classList.add('character');
    $player1.appendChild($character);

    const $img = document.createElement('img');
    $img.src = player1.img;
    $character.appendChild($img);
    
    const $life = document.createElement('div');
    $life.classList.add('life');
    $progressbar.appendChild($life);
    $life.style.width = '100%';

    const $name = document.createElement('div');
    $name.classList.add('name');
    $progressbar.appendChild($name);
    $name.innerText = player1.name;

    return player, name, hp;
    
}

createPlayer('player1', 'SCORPION', 50);
createPlayer('player2', 'SUB-ZERO', 80);