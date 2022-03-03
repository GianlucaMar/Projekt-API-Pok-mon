const pokemon = [
  'https://img.pokemondb.net/artwork/large/bulbasaur.jpg',
  'https://img.pokemondb.net/artwork/large/ivysaur.jpg',
  'https://img.pokemondb.net/artwork/large/venusaur.jpg',
  'https://img.pokemondb.net/artwork/large/charmander.jpg',
  'https://img.pokemondb.net/artwork/large/charmeleon.jpg',
  'https://img.pokemondb.net/artwork/large/charizard.jpg',
  'https://img.pokemondb.net/artwork/large/squirtle.jpg',
  'https://img.pokemondb.net/artwork/large/wartortle.jpg',
  'https://img.pokemondb.net/artwork/large/blastoise.jpg',
  'https://img.pokemondb.net/artwork/large/caterpie.jpg',
  'https://img.pokemondb.net/artwork/large/metapod.jpg',
  'https://img.pokemondb.net/artwork/large/butterfree.jpg',
  'https://img.pokemondb.net/artwork/large/weedle.jpg',
  'https://img.pokemondb.net/artwork/large/kakuna.jpg',
  'https://img.pokemondb.net/artwork/large/beedrill.jpg',
  'https://img.pokemondb.net/artwork/large/pidgey.jpg',
  'https://img.pokemondb.net/artwork/large/pidgeotto.jpg',
  'https://img.pokemondb.net/artwork/large/pidgeot.jpg',
  'https://img.pokemondb.net/artwork/large/rattata.jpg',
  'https://img.pokemondb.net/artwork/large/raticate.jpg',
  'https://img.pokemondb.net/artwork/large/spearow.jpg',
  'https://img.pokemondb.net/artwork/large/fearow.jpg',
  'https://img.pokemondb.net/artwork/large/ekans.jpg',
  'https://img.pokemondb.net/artwork/large/arbok.jpg',
  'https://img.pokemondb.net/artwork/large/pikachu.jpg',
  'https://img.pokemondb.net/artwork/large/raichu.jpg',
  'https://img.pokemondb.net/artwork/large/sandshrew.jpg',
  'https://img.pokemondb.net/artwork/large/sandslash.jpg',
  'https://img.pokemondb.net/artwork/large/nidoran-f.jpg',
  'https://img.pokemondb.net/artwork/large/nidorina.jpg',
  'https://img.pokemondb.net/artwork/large/nidoqueen.jpg',
  'https://img.pokemondb.net/artwork/large/nidoran-m.jpg',
  'https://img.pokemondb.net/artwork/large/nidorino.jpg',
  'https://img.pokemondb.net/artwork/large/nidoking.jpg',
  'https://img.pokemondb.net/artwork/large/clefairy.jpg',
  'https://img.pokemondb.net/artwork/large/clefable.jpg',
  'https://img.pokemondb.net/artwork/large/vulpix.jpg',
  'https://img.pokemondb.net/artwork/large/ninetales.jpg',
  'https://img.pokemondb.net/artwork/large/jigglypuff.jpg',
  'https://img.pokemondb.net/artwork/large/wigglytuff.jpg',
  'https://img.pokemondb.net/artwork/large/zubat.jpg',
  'https://img.pokemondb.net/artwork/large/golbat.jpg',
  'https://img.pokemondb.net/artwork/large/oddish.jpg',
  'https://img.pokemondb.net/artwork/large/gloom.jpg',
  'https://img.pokemondb.net/artwork/large/vileplume.jpg',
  'https://img.pokemondb.net/artwork/large/paras.jpg',
  'https://img.pokemondb.net/artwork/large/parasect.jpg',
  'https://img.pokemondb.net/artwork/large/venonat.jpg',
  'https://img.pokemondb.net/artwork/large/venomoth.jpg',
  'https://img.pokemondb.net/artwork/large/diglett.jpg',
  'https://img.pokemondb.net/artwork/large/dugtrio.jpg',
  'https://img.pokemondb.net/artwork/large/meowth.jpg',
  'https://img.pokemondb.net/artwork/large/persian.jpg',
  'https://img.pokemondb.net/artwork/large/psyduck.jpg',
  'https://img.pokemondb.net/artwork/large/golduck.jpg',
  'https://img.pokemondb.net/artwork/large/mankey.jpg',
  'https://img.pokemondb.net/artwork/large/primeape.jpg',
  'https://img.pokemondb.net/artwork/large/growlithe.jpg',
  'https://img.pokemondb.net/artwork/large/arcanine.jpg',
  'https://img.pokemondb.net/artwork/large/poliwag.jpg',
  'https://img.pokemondb.net/artwork/large/poliwhirl.jpg',
  'https://img.pokemondb.net/artwork/large/poliwrath.jpg',
  'https://img.pokemondb.net/artwork/large/abra.jpg',
  'https://img.pokemondb.net/artwork/large/kadabra.jpg',
  'https://img.pokemondb.net/artwork/large/alakazam.jpg',
  'https://img.pokemondb.net/artwork/large/machop.jpg',
  'https://img.pokemondb.net/artwork/large/machoke.jpg',
  'https://img.pokemondb.net/artwork/large/machamp.jpg',
  'https://img.pokemondb.net/artwork/large/bellsprout.jpg',
  'https://img.pokemondb.net/artwork/large/weepinbell.jpg',
  'https://img.pokemondb.net/artwork/large/victreebel.jpg',
  'https://img.pokemondb.net/artwork/large/tentacool.jpg',
  'https://img.pokemondb.net/artwork/large/tentacruel.jpg',
  'https://img.pokemondb.net/artwork/large/geodude.jpg',
  'https://img.pokemondb.net/artwork/large/graveler.jpg',
  'https://img.pokemondb.net/artwork/large/golem.jpg',
  'https://img.pokemondb.net/artwork/large/ponyta.jpg',
  'https://img.pokemondb.net/artwork/large/rapidash.jpg',
  'https://img.pokemondb.net/artwork/large/slowpoke.jpg',
  'https://img.pokemondb.net/artwork/large/slowbro.jpg',
  'https://img.pokemondb.net/artwork/large/magnemite.jpg',
  'https://img.pokemondb.net/artwork/large/magneton.jpg',
  'https://img.pokemondb.net/artwork/large/farfetchd.jpg',
  'https://img.pokemondb.net/artwork/large/doduo.jpg',
  'https://img.pokemondb.net/artwork/large/dodrio.jpg',
  'https://img.pokemondb.net/artwork/large/seel.jpg',
  'https://img.pokemondb.net/artwork/large/dewgong.jpg',
  'https://img.pokemondb.net/artwork/large/grimer.jpg',
  'https://img.pokemondb.net/artwork/large/muk.jpg',
  'https://img.pokemondb.net/artwork/large/shellder.jpg',
  'https://img.pokemondb.net/artwork/large/cloyster.jpg',
  'https://img.pokemondb.net/artwork/large/gastly.jpg',
  'https://img.pokemondb.net/artwork/large/haunter.jpg',
  'https://img.pokemondb.net/artwork/large/gengar.jpg',
  'https://img.pokemondb.net/artwork/large/onix.jpg',
  'https://img.pokemondb.net/artwork/large/drowzee.jpg',
  'https://img.pokemondb.net/artwork/large/hypno.jpg',
  'https://img.pokemondb.net/artwork/large/krabby.jpg',
  'https://img.pokemondb.net/artwork/large/kingler.jpg',
  'https://img.pokemondb.net/artwork/large/voltorb.jpg',
  'https://img.pokemondb.net/artwork/large/electrode.jpg',
  'https://img.pokemondb.net/artwork/large/exeggcute.jpg',
  'https://img.pokemondb.net/artwork/large/exeggutor.jpg',
  'https://img.pokemondb.net/artwork/large/cubone.jpg',
  'https://img.pokemondb.net/artwork/large/marowak.jpg',
  'https://img.pokemondb.net/artwork/large/hitmonlee.jpg',
  'https://img.pokemondb.net/artwork/large/hitmonchan.jpg',
  'https://img.pokemondb.net/artwork/large/lickitung.jpg',
  'https://img.pokemondb.net/artwork/large/koffing.jpg',
  'https://img.pokemondb.net/artwork/large/weezing.jpg',
  'https://img.pokemondb.net/artwork/large/rhyhorn.jpg',
  'https://img.pokemondb.net/artwork/large/rhydon.jpg',
  'https://img.pokemondb.net/artwork/large/chansey.jpg',
  'https://img.pokemondb.net/artwork/large/tangela.jpg',
  'https://img.pokemondb.net/artwork/large/kangaskhan.jpg',
  'https://img.pokemondb.net/artwork/large/horsea.jpg',
  'https://img.pokemondb.net/artwork/large/seadra.jpg',
  'https://img.pokemondb.net/artwork/large/goldeen.jpg',
  'https://img.pokemondb.net/artwork/large/seaking.jpg',
  'https://img.pokemondb.net/artwork/large/staryu.jpg',
  'https://img.pokemondb.net/artwork/large/starmie.jpg',
  'https://img.pokemondb.net/artwork/large/mr-mime.jpg',
  'https://img.pokemondb.net/artwork/large/scyther.jpg',
  'https://img.pokemondb.net/artwork/large/jynx.jpg',
  'https://img.pokemondb.net/artwork/large/electabuzz.jpg',
  'https://img.pokemondb.net/artwork/large/magmar.jpg',
  'https://img.pokemondb.net/artwork/large/pinsir.jpg',
  'https://img.pokemondb.net/artwork/large/tauros.jpg',
  'https://img.pokemondb.net/artwork/large/magikarp.jpg',
  'https://img.pokemondb.net/artwork/large/gyarados.jpg',
  'https://img.pokemondb.net/artwork/large/lapras.jpg',
  'https://img.pokemondb.net/artwork/large/ditto.jpg',
  'https://img.pokemondb.net/artwork/large/eevee.jpg',
  'https://img.pokemondb.net/artwork/large/vaporeon.jpg',
  'https://img.pokemondb.net/artwork/large/jolteon.jpg',
  'https://img.pokemondb.net/artwork/large/flareon.jpg',
  'https://img.pokemondb.net/artwork/large/porygon.jpg',
  'https://img.pokemondb.net/artwork/large/omanyte.jpg',
  'https://img.pokemondb.net/artwork/large/omastar.jpg',
  'https://img.pokemondb.net/artwork/large/kabuto.jpg',
  'https://img.pokemondb.net/artwork/large/kabutops.jpg',
  'https://img.pokemondb.net/artwork/large/aerodactyl.jpg',
  'https://img.pokemondb.net/artwork/large/snorlax.jpg',
  'https://img.pokemondb.net/artwork/large/articuno.jpg',
  'https://img.pokemondb.net/artwork/large/zapdos.jpg',
  'https://img.pokemondb.net/artwork/large/moltres.jpg',
  'https://img.pokemondb.net/artwork/large/dratini.jpg',
  'https://img.pokemondb.net/artwork/large/dragonair.jpg',
  'https://img.pokemondb.net/artwork/large/dragonite.jpg',
  'https://img.pokemondb.net/artwork/large/mewtwo.jpg',
  'https://img.pokemondb.net/artwork/large/mew.jpg'
];

const pokeball = document.querySelector('#pokeball');
const pokeballbutton = document.querySelector('#pokeball-button');
const main = document.createElement('main');
main.className = 'invisible';
document.body.appendChild(main);
const buttons = document.querySelector('#buttons');
buttons.className = 'invisible';

pokeballbutton.addEventListener('click', () => {
  pokeball.style.animation = 'scaleInn 500ms';
  setTimeout(function() {
    pokeball.classList.add('invisible');
    main.classList.remove('invisible');
    main.classList.add('visible');
    buttons.classList.remove('invisible');
    buttons.classList.add('visible');
    buttons.classList.add('select-container');
    buttons.style.animation = 'scaleOut 500ms';
  }, 300);
});

let name;
let flavorTxt;
let typ1;
let typ2;

for(let i = 1; i <= 151; i++) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
  .then(response => response.json())
  .then(json => {
    buttons.innerHTML += `
      <button value="${i}" onclick="printIndex(this.value)"><img src="${json.sprites.front_default}" alt="-"></button>
    `;
  });
}

printIndex = (index) => {
  fetch(`https://pokeapi.co/api/v2/pokemon-species/${index}/`)
    .then(response => response.json())
    .then(json2 => {
        name = json2.names[5].name;
        flavorTxt = json2.flavor_text_entries[25].flavor_text;
  })
  fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`)
  .then(response => response.json())
  .then(json => {
    let height = `${json.height/10}`;
    let weight = `${json.weight/10}`;
    let hp = json.stats[0].base_stat;
    let atk = json.stats[1].base_stat;
    let def = json.stats[2].base_stat;
    let spAtk = json.stats[3].base_stat;
    let spDef = json.stats[4].base_stat;
    let spd = json.stats[5].base_stat;
      if(json.types.length > 1) {
        typ1 = json.types[0].type.name;
        typ2 = json.types[1].type.name
      } else {
        typ1 = json.types[0].type.name;
        typ2 = '';
      }
      main.innerHTML = `
      <section class="content-container">
      <div class="btnflex">
          <button class="btn1">${Number(index) - 1}</button>
          <button class="btn1">${Number(index) + 1}</button>
      </div>
          <article>
            <h2>${name}</h2>
            <div class="img-wrapper">
              <div>
                <img src=${pokemon[index - 1]} alt="-">
              </div>
              <div class="bg">
              <div>
                  <p class="text">${flavorTxt}</p>
                <div class="content-wrapper">
                  <h3>Größe</h3>
                  <h3>Gewicht</h3>
                  <p>${height}</p>
                  <p>${weight}</p>
                </div>
                <h3 class="typ-h3">Typ</h3>
                <div class="typ-wrapper">
                  <p>${typ1}</p>
                  <p>${typ2}</p>
                </div>
              </div>
            </div>
          </div>
            
            <div>
              <h3>Basiswerte</h3>
              <div class="stats-container">
                <div class="stats-wrapper">
                  <label for="KP">KP:</label>
                  <progress value="${hp}" max="150">34</progress>
                </div>
                <div class="stats-wrapper">
                  <label for="ATK">ATK:</label>
                  <progress value="${atk}" max="150">34</progress>
                </div>
                <div class="stats-wrapper">
                  <label for="DEF">DEF:</label>
                  <progress value="${def}" max="150">34</progress>
                </div>
                <div class="stats-wrapper">
                  <label for="SP-ATK">SP-ATK:</label>
                  <progress value="${spAtk}" max="150">34</progress>
                </div>
                <div class="stats-wrapper">
                  <label for="SP-DEF">SP-DEF:</label>
                  <progress value="${spDef}" max="150">34</progress>
                </div>
                <div class="stats-wrapper">
                  <label for="INIT">INIT:</label>
                  <progress value="${spd}" max="150">34</progress>
                </div>
              </div>
            </div>
          </article>
        </section>
        <section class="select-container" id="buttons">
          
        </section>
      `;
  });
}
