var maps = [
    'Dust_2',
    'Cache',
    'Cobblestone',
    'Inferno',
    'Overpass',
    'Nuke',
    'Mirage',
    'Canals',
    'Train',
    'Subzero'
];

function randomMap(){
  var randomItem = maps[Math.floor(Math.random()*maps.length)];

  document.getElementById('result').innerHTML = randomItem;
};