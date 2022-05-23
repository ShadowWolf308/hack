var common = [{name: 'Caterpie',type: 'bug'},{name: 'Metapod',type: 'bug'},{name: 'Butterfree',type: 'bug & flying'},{name: 'Weedle',type: 'bug & poison'},{name: 'Kakuna',type: 'bug & poison'},{name: 'Beedrill',type: 'bug & poison'},{name: 'Pidgey',type: 'normal & flying'},{name: 'Pidgeotto',type: 'normal & flying'},{name: 'Pidgeot',type: 'normal & flying'},{name: 'Ratata',type: 'normal'},{name: 'Raticate',type: 'normal'},{name: 'Spearow',type: 'normal & flying'},{name: 'Fearow',type: 'normal & flying'},{name: 'Ekans',type: 'poison'},{name: 'Arbok',type: 'poison'},{name: 'Nidoran',type: 'poison'},{name: 'Nidorina',type: 'poison'},{name: 'Nidoqueen',type: 'poison & ground'},{name: 'Nidoran',type: 'poison'},{name: 'Nidorino',type: 'poison'},{name: 'Nidoking',type: 'poison & ground'},{name: 'Paras',type: 'bug & grass'},{name: 'Parasect',type: 'bug & grass'},{name: 'Diglett',type: 'ground'},{name: 'Dugtrio',type: 'Ground'},{name: 'Tentacool',type: 'water & poison'},{name: 'Tentacruel',type: 'water & poison'},{name: 'Geodude',type: 'rock & ground'},{name: 'Graveler',type: 'rock & ground'},{name: 'Golem',type: 'rock & ground'},{name: 'Gastly',type: 'ghost & poison'},{name: 'Haunter',type: 'ghost & poison'},{name: 'Gengar',type: 'ghost & poison'},{name: 'Voltorb',type: 'electric'},{name: 'Electrode',type: 'electric'},{name: 'Magikarp',type: 'water'},{name: 'Gyarados',type: 'water & flying'},{name: 'Unown',type: 'Psychic'},{name: 'Slugma',type: 'fire'},{name: 'Magcargo',type: 'fire & rock'}];
var uncommon = [{name: 'Sandslash',type: 'ground'},{name: 'Oddish',type: 'grass & poison'},{name: 'Gloom',type: 'grass & poison'},{name: 'Vileplume',type: 'grass & poison'},{name: 'Meowth',type: 'normal'},{name: 'Persian',type: 'normal'},{name: 'poliwag',type: 'water'},{name: 'Poliwhirl',type: 'water'},{name: 'Poliwrath',type: 'water & fighting'},{name: 'Bellsprout',type: 'grass & poison'},{name: 'Weepingbell',type: 'grass & poison'},{name: 'Victreebel',type: 'grass & poison'},{name: 'Krabby',type: 'water'},{name: 'Kingler',type: 'water'},{name: 'Goldeen',type: 'water'},{name: 'Seaking',type: 'water'},{name: 'Sentret',type: 'normal'},{name: 'Furret',type: 'normal'},{name: 'Hoothoot',type: 'normal & flying'},{name: 'Noctowl',type: 'normal & flying'},{name: 'Ledyba',type: 'bug & flying'},{name: 'Ledian',type: 'bug & flying'},{name: 'Spinarak',type: 'bug & poison'},{name: 'Ariados',type: 'bug & poison'},{name: 'Crobat',type: 'poison & flying'},{name: 'Marill',type: 'water & fairy'},{name: 'Azumarill',type: 'water & fairy'}];
var rare = [{name: 'Clefable',type: 'fairy'},{name: 'Venonat',type: 'bug & poison'},{name: 'Venomoth',type: 'bug & poison'},{name: 'Mankey',type: 'fighting'},{name: 'Primeape',type: 'fighting'},{name: 'Magnemite',type: 'electric & steel'},{name: 'Magneton',type: 'electric & steel'},{name: 'Grimer',type: 'poison'},{name: 'Muk',type: 'poison'},{name: 'Shellder',type: 'water'},{name: 'Cloyster',type: 'water & ice'},{name: 'Drowzee',type: 'psychic'},{name: 'Hypno',type: 'psychic'},{name: 'Koffing',type: 'poison'},{name: 'Weezing',type: 'poison'},{name: 'Horsea',type: 'water'},{name: 'Mr.Mime',type: 'psychic & fairy'},{name: 'Hoppip',type: 'grass & flying'},{name: "Skiploom", type:"grass & flying"},{name: 'Jumpluff',type: 'grass & flying'},{name: 'Aipom',type: 'normal'},{name: 'Sunkern',type: 'grass'},{name: 'Sunflora',type: 'grass'},{name: 'Wooper',type: 'water & ground'},{name: 'Quagsire',type: 'water & ground'},{name: 'Espeon',type: 'Psychic'},{name: 'Umbreon',type: 'Dark'},{name: 'Murkrow',type: 'dark & flying'},{name: 'Slowking',type: 'Psychic & water'},{name: 'Pineco',type: 'Bug'},{name: 'Forretress',type: 'bug & steel'},{name: 'Dunsparce',type: 'normal'},{name: 'Snubbull',type: 'fairy'},{name: 'Granbull',type: 'fairy'},{name: 'Qwilfish',type: 'water & poison'},{name: 'Scizor',type: 'bug & steel'},{name: 'Remoraid',type: 'water'},{name: 'Octillery',type: 'water'},{name: 'Smeargle',type: 'normal'}];
var veryRare = [{name: 'Pikachu',type: 'electric'},{name: 'Raichu',type: 'electric'},{name: 'Vulpix',type: 'fire'},{name: 'Ninetales',type: 'fire'},{name: 'Jigglypuff',type: 'normal & fairy'},{name: 'Wigglytuff',type: 'normal & fairy'},{name: 'Psyduck',type: 'water'},{name: 'Golduck',type: 'water'},{name: 'Growlithe',type: 'fire'},{name: 'arcanine',type: 'fire'},{name: 'Abra',type: 'psychic'},{name: 'Kadabra',type: 'psychic'},{name: 'Alakazam',type: 'psychic'},{name: 'Ponyta',type: 'fire'},{name: 'Rapidash',type: 'fire'},{name: 'Slowpoke',type: 'water & psychic'},{name: 'Slowbro',type: 'water & psychic'},{name: 'Doduo',type: 'normal & flying'},{name: 'Dotrio',type: 'normal & flying'},{name: 'seel',type: 'water'},{name: 'Dewgong',type: 'water & ice'},{name: 'Exeggcute',type: 'grass & psychic'},{name: 'Exeggutor',type: 'grass & psychic'},{name: 'Cubone',type: 'ground'},{name: 'Marowak',type: 'ground'},{name: 'Chansey',type: 'normal'},{name: 'Tangela',type: 'grass'},{name: 'Seadra',type: 'water'},{name: 'Staryu',type: 'water'},{name: 'Starmie',type: 'water & psychic'},{name: 'Jynx',type: 'ice & psychic'},{name: 'Magmar',type: 'fire'},{name: 'Tauros',type: 'normal'},{name: 'Ditto',type: 'normal'},{name: 'Chinchou',type: 'water & electric'},{name: 'Lanturn',type: 'water & electric'},{name: 'Pichu',type: 'electric'},{name: 'Igglybluff',type: 'normal & fairy'},{name: 'Natu',type: 'psychic & flying'},{name: 'Xatu',type: 'psychic & flying'},{name: 'Mareep',type: 'electric'},{name: 'Flaaffy',type: 'electric'},{name: 'Ampharos',type: 'electric'},{name: 'Yanma',type: 'bug & flying'},{name: 'Wobuffet',type: 'psychic'},{name: 'Girafarig',type: 'normal & psychic'},{name: 'Teddiursa',type: 'normal'},{name: 'Ursaring',type: 'normal'},{name: 'Corsola',type: 'water & rock'},{name: 'Mantine',type: 'water & flying'},{name: 'Houndour',type: 'dark & fire'},{name: 'Houndoom',type: 'dark & fire'},{name: 'Kingdra',type: 'water & dragon'},{name: 'Phanpy',type: 'ground'},{name: 'Donphan',type: 'ground'},{name: 'Porygon2',type: 'normal'},{name: 'Magby',type: 'fire'},{name: 'Miltank',type: 'normal'},{name: 'Blissey',type: 'normal'}];
var extremelyRare = [{name: 'Bulbasaur',type: 'grass & poison'}, {name: 'Ivysaur',type: 'grass & poison'}, {name: 'Venusaur',type: 'grass & poison'}, {name: 'Charmander',type: 'fire'}, {name: 'Charmeleon',type: 'fire'}, {name: 'Charizard',type: 'fire & flying'}, {name: 'Squirtle',type: 'water'}, {name: 'Wartortle',type: 'water'}, {name: 'Blastoise',type: 'water'}, {name: 'Machoke',type: 'fighting'}, {name: 'Machamp',type: 'fighting'}, {name: 'Farfetched',type: 'normal & flying'}, {name: 'Onix',type: 'rock & ground'}, {name: 'Hitmonlee',type: 'fighting'}, {name: 'Hitmonchan',type: 'fighting'}, {name: 'Rhyhorn',type: 'ground & rock'}, {name: 'Rhydon',type: 'ground & rock'}, {name: 'Kangaskhkan',type: 'normal'}, {name: 'Scyther',type: 'bug & flying'}, {name: 'Electrabuzz',type: 'electric'}, {name: 'Pinsir',type: 'bug'}, {name: 'Snorlax',type: 'normal'}, {name: 'Dratini',type: 'dragon'}, {name: 'Dragonair',type: 'dragon'}, {name: 'dragonite',type: 'dragon flying'}, {name: 'Chikorita',type: 'grass'}, {name: 'Bayleef',type: 'grass'}, {name: 'Meganium',type: 'grass'}, {name: 'Cyndaquil',type: 'fire'}, {name: 'Quilava',type: 'fire'}, {name: 'Typhlosion',type: 'fire'}, {name: 'Totodile',type: 'water'}, {name: 'Croconaw',type: 'water'}, {name: 'Feraligatr',type: 'water'}, {name: 'Sudowoodo',type: 'rock'}, {type:'water'}, {name: 'Gligar',type: 'ground & flying'}, {name: 'Steelix',type: 'ground & steel'}, {name: 'Snubbull',type: 'fairy'}, {name: 'Heracross',type: 'bug & fighting'}, {name: 'Sneasel',type: 'dark & ice'}, {name: 'Swimub',type: 'ice & ground'}, {name: 'Piloswine',type: 'ice & ground'}, {name: 'Skarmory',type: 'steel & flying'}, {name: 'Elekid',type: 'electric'}];
var legendary = [{name: 'Articuno',type: 'ice & flying'}, {name: 'Zapdos',type: 'electric & flying'}, {name: 'Moltres',type: 'fire &  flying'}, {name: 'Mewtwo',type: 'psychic'}, {name: 'mew',type: 'psychic'}, {name: 'Raikou',type: 'electric'}, {name: 'Entei',type: 'fire'}, {name: 'Suicune',type: 'water'}, {name: 'Lugia',type: 'psychic & flying'}, {name: 'Ho-Oh',type: 'fire & flying'}];
document.getElementById('pack1img').addEventListener('click',common);
function common() {
    for (i=0;i<7;i++){
        var x = Math.floor(Math.random()*100)
        if (x < 60) {
            var y = Math.floor(math.random()*common.length)
            if (i == 0) {
                Document.getElementById('pakeName1').innerHTML = common[y].name
                Document.getElementById('pakeType1').innerHTML = common[y].type
            }
            if (i == 1) {
                Document.getElementById('pakeName2').innerHTML = common[y].name
                Document.getElementById('pakeType2').innerHTML = common[y].type
            }
            if (i == 2) {
                Document.getElementById('pakeName3').innerHTML = common[y].name
                Document.getElementById('pakeType3').innerHTML = common[y].type
            }
            if (i == 3) {
                Document.getElementById('pakeName4').innerHTML = common[y].name
                Document.getElementById('pakeType4').innerHTML = common[y].type
            }
            if (i == 4) {
                Document.getElementById('pakeName5').innerHTML = common[y].name
                Document.getElementById('pakeType5').innerHTML = common[y].type
            }
            if (i == 5) {
                Document.getElementById('pakeName6').innerHTML = common[y].name
                Document.getElementById('pakeType6').innerHTML = common[y].type
            }
            if (i == 6) {
                Document.getElementById('pakeName7').innerHTML = common[y].name
                Document.getElementById('pakeType7').innerHTML = common[y].type
            }
        }
        if (x > 59 && x < 75) {
            var y = Math.floor(math.random()*uncommon.length)
            if (i == 0) {
                Document.getElementById('pakeName1').innerHTML = uncommon[y].name
                Document.getElementById('pakeType1').innerHTML = common[y].type
            }
            if (i == 1) {
                Document.getElementById('pakeName2').innerHTML = uncommon[y].name
                Document.getElementById('pakeType2').innerHTML = uncommon[y].type
            }
            if (i == 2) {
                Document.getElementById('pakeName3').innerHTML = uncommon[y].name
                Document.getElementById('pakeType3').innerHTML = uncommon[y].type
            }
            if (i == 3) {
                Document.getElementById('pakeName4').innerHTML = uncommon[y].name
                Document.getElementById('pakeType4').innerHTML = uncommon[y].type
            }
            if (i == 4) {
                Document.getElementById('pakeName5').innerHTML = uncommon[y].name
                Document.getElementById('pakeType5').innerHTML = uncommon[y].type
            }
            if (i == 5) {
                Document.getElementById('pakeName6').innerHTML = uncommon[y].name
                Document.getElementById('pakeType6').innerHTML = uncommon[y].type
            }
            if (i == 6) {
                Document.getElementById('pakeName7').innerHTML = uncommon[y].name
                Document.getElementById('pakeType7').innerHTML = uncommon[y].type
            }
        }
        if (x > 74 && x < 85) {
            var y = Math.floor(math.random()*rare.length)
            if (i == 0) {
                Document.getElementById('pakeName1').innerHTML = rare[y].name
                Document.getElementById('pakeType1').innerHTML = rare[y].type
            }
            if (i == 1) {
                Document.getElementById('pakeName2').innerHTML = rare[y].name
                Document.getElementById('pakeType2').innerHTML = rare[y].type
            }
            if (i == 2) {
                Document.getElementById('pakeName3').innerHTML = rare[y].name
                Document.getElementById('pakeType3').innerHTML = rare[y].type
            }
            if (i == 3) {
                Document.getElementById('pakeName4').innerHTML = rare[y].name
                Document.getElementById('pakeType4').innerHTML = rare[y].type
            }
            if (i == 4) {
                Document.getElementById('pakeName5').innerHTML = rare[y].name
                Document.getElementById('pakeType5').innerHTML = rare[y].type
            }
            if (i == 5) {
                Document.getElementById('pakeName6').innerHTML = rare[y].name
                Document.getElementById('pakeType6').innerHTML = rare[y].type
            }
            if (i == 6) {
                Document.getElementById('pakeName7').innerHTML = rare[y].name
                Document.getElementById('pakeType7').innerHTML = rare[y].type
            }
        }
        if (x > 84 && x < 90) {
            var y = Math.floor(math.random()*veryRare.length)
            if (i == 0) {
                Document.getElementById('pakeName1').innerHTML = veryRare[y].name
                Document.getElementById('pakeType1').innerHTML = veryRare[y].type
            }
            if (i == 1) {
                Document.getElementById('pakeName2').innerHTML = veryRare[y].name
                Document.getElementById('pakeType2').innerHTML = veryRare[y].type
            }
            if (i == 2) {
                Document.getElementById('pakeName3').innerHTML = veryRare[y].name
                Document.getElementById('pakeType3').innerHTML = veryRare[y].type
            }
            if (i == 3) {
                Document.getElementById('pakeName4').innerHTML = veryRare[y].name
                Document.getElementById('pakeType4').innerHTML = veryRare[y].type
            }
            if (i == 4) {
                Document.getElementById('pakeName5').innerHTML = veryRare[y].name
                Document.getElementById('pakeType5').innerHTML = veryRare[y].type
            }
            if (i == 5) {
                Document.getElementById('pakeName6').innerHTML = veryRare[y].name
                Document.getElementById('pakeType6').innerHTML = veryRare[y].type
            }
            if (i == 6) {
                Document.getElementById('pakeName7').innerHTML = veryRare[y].name
                Document.getElementById('pakeType7').innerHTML = veryRare[y].type
            }
        }
        if (x > 89 && x < 97) {
            var y = Math.floor(math.random()*extremelyRare.length)
            if (i == 0) {
                Document.getElementById('pakeName1').innerHTML = extremelyRare[y].name
                Document.getElementById('pakeType1').innerHTML = extremelyRare[y].type
            }
            if (i == 1) {
                Document.getElementById('pakeName2').innerHTML = extremelyRare[y].name
                Document.getElementById('pakeType2').innerHTML = extremelyRare[y].type
            }
            if (i == 2) {
                Document.getElementById('pakeName3').innerHTML = extremelyRare[y].name
                Document.getElementById('pakeType3').innerHTML = extremelyRare[y].type
            }
            if (i == 3) {
                Document.getElementById('pakeName4').innerHTML = extremelyRare[y].name
                Document.getElementById('pakeType4').innerHTML = extremelyRare[y].type
            }
            if (i == 4) {
                Document.getElementById('pakeName5').innerHTML = extremelyRare[y].name
                Document.getElementById('pakeType5').innerHTML = extremelyRare[y].type
            }
            if (i == 5) {
                Document.getElementById('pakeName6').innerHTML = extremelyRare[y].name
                Document.getElementById('pakeType6').innerHTML = extremelyRare[y].type
            }
            if (i == 6) {
                Document.getElementById('pakeName7').innerHTML = extremelyRare[y].name
                Document.getElementById('pakeType7').innerHTML = extremelyRare[y].type
            }
        }
        if (x > 96) {
            var y = Math.floor(math.random()*legendary.length)
            if (i == 0) {
                Document.getElementById('pakeName1').innerHTML = legendary[y].name
                Document.getElementById('pakeType1').innerHTML = legendary[y].type
            }
            if (i == 1) {
                Document.getElementById('pakeName2').innerHTML = legendary[y].name
                Document.getElementById('pakeType2').innerHTML = legendary[y].type
            }
            if (i == 2) {
                Document.getElementById('pakeName3').innerHTML = legendary[y].name
                Document.getElementById('pakeType3').innerHTML = legendary[y].type
            }
            if (i == 3) {
                Document.getElementById('pakeName4').innerHTML = legendary[y].name
                Document.getElementById('pakeType4').innerHTML = legendary[y].type
            }
            if (i == 4) {
                Document.getElementById('pakeName5').innerHTML = legendary[y].name
                Document.getElementById('pakeType5').innerHTML = legendary[y].type
            }
            if (i == 5) {
                Document.getElementById('pakeName6').innerHTML = legendary[y].name
                Document.getElementById('pakeType6').innerHTML = legendary[y].type
            }
            if (i == 6) {
                Document.getElementById('pakeName7').innerHTML = legendary[y].name
                Document.getElementById('pakeType7').innerHTML = legendary[y].type
            }
        }
    }
}
document.getElementById('pack2img').addEventListener('click',rare);
function rare() {
    for (i=0;i<7;i++){
        var x = Math.floor(Math.random()*100)
        if (x < 10) {
            var y = Math.floor(math.random()*common.length)
            if (i == 0) {
                Document.getElementById('pakeName1').innerHTML = common[y].name
                Document.getElementById('pakeType1').innerHTML = common[y].type
            }
            if (i == 1) {
                Document.getElementById('pakeName2').innerHTML = common[y].name
                Document.getElementById('pakeType2').innerHTML = common[y].type
            }
            if (i == 2) {
                Document.getElementById('pakeName3').innerHTML = common[y].name
                Document.getElementById('pakeType3').innerHTML = common[y].type
            }
            if (i == 3) {
                Document.getElementById('pakeName4').innerHTML = common[y].name
                Document.getElementById('pakeType4').innerHTML = common[y].type
            }
            if (i == 4) {
                Document.getElementById('pakeName5').innerHTML = common[y].name
                Document.getElementById('pakeType5').innerHTML = common[y].type
            }
            if (i == 5) {
                Document.getElementById('pakeName6').innerHTML = common[y].name
                Document.getElementById('pakeType6').innerHTML = common[y].type
            }
            if (i == 6) {
                Document.getElementById('pakeName7').innerHTML = common[y].name
                Document.getElementById('pakeType7').innerHTML = common[y].type
            }
        }
        if (x > 9 && x < 30) {
            var y = Math.floor(math.random()*uncommon.length)
            if (i == 0) {
                Document.getElementById('pakeName1').innerHTML = uncommon[y].name
                Document.getElementById('pakeType1').innerHTML = common[y].type
            }
            if (i == 1) {
                Document.getElementById('pakeName2').innerHTML = uncommon[y].name
                Document.getElementById('pakeType2').innerHTML = uncommon[y].type
            }
            if (i == 2) {
                Document.getElementById('pakeName3').innerHTML = uncommon[y].name
                Document.getElementById('pakeType3').innerHTML = uncommon[y].type
            }
            if (i == 3) {
                Document.getElementById('pakeName4').innerHTML = uncommon[y].name
                Document.getElementById('pakeType4').innerHTML = uncommon[y].type
            }
            if (i == 4) {
                Document.getElementById('pakeName5').innerHTML = uncommon[y].name
                Document.getElementById('pakeType5').innerHTML = uncommon[y].type
            }
            if (i == 5) {
                Document.getElementById('pakeName6').innerHTML = uncommon[y].name
                Document.getElementById('pakeType6').innerHTML = uncommon[y].type
            }
            if (i == 6) {
                Document.getElementById('pakeName7').innerHTML = uncommon[y].name
                Document.getElementById('pakeType7').innerHTML = uncommon[y].type
            }
        }
        if (x > 29 && x < 60) {
            var y = Math.floor(math.random()*rare.length)
            if (i == 0) {
                Document.getElementById('pakeName1').innerHTML = rare[y].name
                Document.getElementById('pakeType1').innerHTML = rare[y].type
            }
            if (i == 1) {
                Document.getElementById('pakeName2').innerHTML = rare[y].name
                Document.getElementById('pakeType2').innerHTML = rare[y].type
            }
            if (i == 2) {
                Document.getElementById('pakeName3').innerHTML = rare[y].name
                Document.getElementById('pakeType3').innerHTML = rare[y].type
            }
            if (i == 3) {
                Document.getElementById('pakeName4').innerHTML = rare[y].name
                Document.getElementById('pakeType4').innerHTML = rare[y].type
            }
            if (i == 4) {
                Document.getElementById('pakeName5').innerHTML = rare[y].name
                Document.getElementById('pakeType5').innerHTML = rare[y].type
            }
            if (i == 5) {
                Document.getElementById('pakeName6').innerHTML = rare[y].name
                Document.getElementById('pakeType6').innerHTML = rare[y].type
            }
            if (i == 6) {
                Document.getElementById('pakeName7').innerHTML = rare[y].name
                Document.getElementById('pakeType7').innerHTML = rare[y].type
            }
        }
        if (x > 59 && x < 80) {
            var y = Math.floor(math.random()*veryRare.length)
            if (i == 0) {
                Document.getElementById('pakeName1').innerHTML = veryRare[y].name
                Document.getElementById('pakeType1').innerHTML = veryRare[y].type
            }
            if (i == 1) {
                Document.getElementById('pakeName2').innerHTML = veryRare[y].name
                Document.getElementById('pakeType2').innerHTML = veryRare[y].type
            }
            if (i == 2) {
                Document.getElementById('pakeName3').innerHTML = veryRare[y].name
                Document.getElementById('pakeType3').innerHTML = veryRare[y].type
            }
            if (i == 3) {
                Document.getElementById('pakeName4').innerHTML = veryRare[y].name
                Document.getElementById('pakeType4').innerHTML = veryRare[y].type
            }
            if (i == 4) {
                Document.getElementById('pakeName5').innerHTML = veryRare[y].name
                Document.getElementById('pakeType5').innerHTML = veryRare[y].type
            }
            if (i == 5) {
                Document.getElementById('pakeName6').innerHTML = veryRare[y].name
                Document.getElementById('pakeType6').innerHTML = veryRare[y].type
            }
            if (i == 6) {
                Document.getElementById('pakeName7').innerHTML = veryRare[y].name
                Document.getElementById('pakeType7').innerHTML = veryRare[y].type
            }
        }
        if (x > 79 && x < 95) {
            var y = Math.floor(math.random()*extremelyRare.length)
            if (i == 0) {
                Document.getElementById('pakeName1').innerHTML = extremelyRare[y].name
                Document.getElementById('pakeType1').innerHTML = extremelyRare[y].type
            }
            if (i == 1) {
                Document.getElementById('pakeName2').innerHTML = extremelyRare[y].name
                Document.getElementById('pakeType2').innerHTML = extremelyRare[y].type
            }
            if (i == 2) {
                Document.getElementById('pakeName3').innerHTML = extremelyRare[y].name
                Document.getElementById('pakeType3').innerHTML = extremelyRare[y].type
            }
            if (i == 3) {
                Document.getElementById('pakeName4').innerHTML = extremelyRare[y].name
                Document.getElementById('pakeType4').innerHTML = extremelyRare[y].type
            }
            if (i == 4) {
                Document.getElementById('pakeName5').innerHTML = extremelyRare[y].name
                Document.getElementById('pakeType5').innerHTML = extremelyRare[y].type
            }
            if (i == 5) {
                Document.getElementById('pakeName6').innerHTML = extremelyRare[y].name
                Document.getElementById('pakeType6').innerHTML = extremelyRare[y].type
            }
            if (i == 6) {
                Document.getElementById('pakeName7').innerHTML = extremelyRare[y].name
                Document.getElementById('pakeType7').innerHTML = extremelyRare[y].type
            }
        }
        if (x > 94) {
            var y = Math.floor(math.random()*legendary.length)
            if (i == 0) {
                Document.getElementById('pakeName1').innerHTML = legendary[y].name
                Document.getElementById('pakeType1').innerHTML = legendary[y].type
            }
            if (i == 1) {
                Document.getElementById('pakeName2').innerHTML = legendary[y].name
                Document.getElementById('pakeType2').innerHTML = legendary[y].type
            }
            if (i == 2) {
                Document.getElementById('pakeName3').innerHTML = legendary[y].name
                Document.getElementById('pakeType3').innerHTML = legendary[y].type
            }
            if (i == 3) {
                Document.getElementById('pakeName4').innerHTML = legendary[y].name
                Document.getElementById('pakeType4').innerHTML = legendary[y].type
            }
            if (i == 4) {
                Document.getElementById('pakeName5').innerHTML = legendary[y].name
                Document.getElementById('pakeType5').innerHTML = legendary[y].type
            }
            if (i == 5) {
                Document.getElementById('pakeName6').innerHTML = legendary[y].name
                Document.getElementById('pakeType6').innerHTML = legendary[y].type
            }
            if (i == 6) {
                Document.getElementById('pakeName7').innerHTML = legendary[y].name
                Document.getElementById('pakeType7').innerHTML = legendary[y].type
            }
        }
    }
}
document.getElementById('pack3img').addEventListener('click',legendary);
function legendary() {
    for (i=0;i<7;i++){
        var x = Math.floor(Math.random()*100)
        if (x < 5) {
            var y = Math.floor(math.random()*common.length)
            if (i == 0) {
                Document.getElementById('pakeName1').innerHTML = common[y].name
                Document.getElementById('pakeType1').innerHTML = common[y].type
            }
            if (i == 1) {
                Document.getElementById('pakeName2').innerHTML = common[y].name
                Document.getElementById('pakeType2').innerHTML = common[y].type
            }
            if (i == 2) {
                Document.getElementById('pakeName3').innerHTML = common[y].name
                Document.getElementById('pakeType3').innerHTML = common[y].type
            }
            if (i == 3) {
                Document.getElementById('pakeName4').innerHTML = common[y].name
                Document.getElementById('pakeType4').innerHTML = common[y].type
            }
            if (i == 4) {
                Document.getElementById('pakeName5').innerHTML = common[y].name
                Document.getElementById('pakeType5').innerHTML = common[y].type
            }
            if (i == 5) {
                Document.getElementById('pakeName6').innerHTML = common[y].name
                Document.getElementById('pakeType6').innerHTML = common[y].type
            }
            if (i == 6) {
                Document.getElementById('pakeName7').innerHTML = common[y].name
                Document.getElementById('pakeType7').innerHTML = common[y].type
            }
        }
        if (x > 4 && x < 15) {
            var y = Math.floor(math.random()*uncommon.length)
            if (i == 0) {
                Document.getElementById('pakeName1').innerHTML = uncommon[y].name
                Document.getElementById('pakeType1').innerHTML = common[y].type
            }
            if (i == 1) {
                Document.getElementById('pakeName2').innerHTML = uncommon[y].name
                Document.getElementById('pakeType2').innerHTML = uncommon[y].type
            }
            if (i == 2) {
                Document.getElementById('pakeName3').innerHTML = uncommon[y].name
                Document.getElementById('pakeType3').innerHTML = uncommon[y].type
            }
            if (i == 3) {
                Document.getElementById('pakeName4').innerHTML = uncommon[y].name
                Document.getElementById('pakeType4').innerHTML = uncommon[y].type
            }
            if (i == 4) {
                Document.getElementById('pakeName5').innerHTML = uncommon[y].name
                Document.getElementById('pakeType5').innerHTML = uncommon[y].type
            }
            if (i == 5) {
                Document.getElementById('pakeName6').innerHTML = uncommon[y].name
                Document.getElementById('pakeType6').innerHTML = uncommon[y].type
            }
            if (i == 6) {
                Document.getElementById('pakeName7').innerHTML = uncommon[y].name
                Document.getElementById('pakeType7').innerHTML = uncommon[y].type
            }
        }
        if (x > 14 && x < 40) {
            var y = Math.floor(math.random()*rare.length)
            if (i == 0) {
                Document.getElementById('pakeName1').innerHTML = rare[y].name
                Document.getElementById('pakeType1').innerHTML = rare[y].type
            }
            if (i == 1) {
                Document.getElementById('pakeName2').innerHTML = rare[y].name
                Document.getElementById('pakeType2').innerHTML = rare[y].type
            }
            if (i == 2) {
                Document.getElementById('pakeName3').innerHTML = rare[y].name
                Document.getElementById('pakeType3').innerHTML = rare[y].type
            }
            if (i == 3) {
                Document.getElementById('pakeName4').innerHTML = rare[y].name
                Document.getElementById('pakeType4').innerHTML = rare[y].type
            }
            if (i == 4) {
                Document.getElementById('pakeName5').innerHTML = rare[y].name
                Document.getElementById('pakeType5').innerHTML = rare[y].type
            }
            if (i == 5) {
                Document.getElementById('pakeName6').innerHTML = rare[y].name
                Document.getElementById('pakeType6').innerHTML = rare[y].type
            }
            if (i == 6) {
                Document.getElementById('pakeName7').innerHTML = rare[y].name
                Document.getElementById('pakeType7').innerHTML = rare[y].type
            }
        }
        if (x > 39 && x < 70) {
            var y = Math.floor(math.random()*veryRare.length)
            if (i == 0) {
                Document.getElementById('pakeName1').innerHTML = veryRare[y].name
                Document.getElementById('pakeType1').innerHTML = veryRare[y].type
            }
            if (i == 1) {
                Document.getElementById('pakeName2').innerHTML = veryRare[y].name
                Document.getElementById('pakeType2').innerHTML = veryRare[y].type
            }
            if (i == 2) {
                Document.getElementById('pakeName3').innerHTML = veryRare[y].name
                Document.getElementById('pakeType3').innerHTML = veryRare[y].type
            }
            if (i == 3) {
                Document.getElementById('pakeName4').innerHTML = veryRare[y].name
                Document.getElementById('pakeType4').innerHTML = veryRare[y].type
            }
            if (i == 4) {
                Document.getElementById('pakeName5').innerHTML = veryRare[y].name
                Document.getElementById('pakeType5').innerHTML = veryRare[y].type
            }
            if (i == 5) {
                Document.getElementById('pakeName6').innerHTML = veryRare[y].name
                Document.getElementById('pakeType6').innerHTML = veryRare[y].type
            }
            if (i == 6) {
                Document.getElementById('pakeName7').innerHTML = veryRare[y].name
                Document.getElementById('pakeType7').innerHTML = veryRare[y].type
            }
        }
        if (x > 69 && x < 80) {
            var y = Math.floor(math.random()*extremelyRare.length)
            if (i == 0) {
                Document.getElementById('pakeName1').innerHTML = extremelyRare[y].name
                Document.getElementById('pakeType1').innerHTML = extremelyRare[y].type
            }
            if (i == 1) {
                Document.getElementById('pakeName2').innerHTML = extremelyRare[y].name
                Document.getElementById('pakeType2').innerHTML = extremelyRare[y].type
            }
            if (i == 2) {
                Document.getElementById('pakeName3').innerHTML = extremelyRare[y].name
                Document.getElementById('pakeType3').innerHTML = extremelyRare[y].type
            }
            if (i == 3) {
                Document.getElementById('pakeName4').innerHTML = extremelyRare[y].name
                Document.getElementById('pakeType4').innerHTML = extremelyRare[y].type
            }
            if (i == 4) {
                Document.getElementById('pakeName5').innerHTML = extremelyRare[y].name
                Document.getElementById('pakeType5').innerHTML = extremelyRare[y].type
            }
            if (i == 5) {
                Document.getElementById('pakeName6').innerHTML = extremelyRare[y].name
                Document.getElementById('pakeType6').innerHTML = extremelyRare[y].type
            }
            if (i == 6) {
                Document.getElementById('pakeName7').innerHTML = extremelyRare[y].name
                Document.getElementById('pakeType7').innerHTML = extremelyRare[y].type
            }
        }
        if (x > 96) {
            var y = Math.floor(math.random()*legendary.length)
            if (i == 0) {
                Document.getElementById('pakeName1').innerHTML = legendary[y].name
                Document.getElementById('pakeType1').innerHTML = legendary[y].type
            }
            if (i == 1) {
                Document.getElementById('pakeName2').innerHTML = legendary[y].name
                Document.getElementById('pakeType2').innerHTML = legendary[y].type
            }
            if (i == 2) {
                Document.getElementById('pakeName3').innerHTML = legendary[y].name
                Document.getElementById('pakeType3').innerHTML = legendary[y].type
            }
            if (i == 3) {
                Document.getElementById('pakeName4').innerHTML = legendary[y].name
                Document.getElementById('pakeType4').innerHTML = legendary[y].type
            }
            if (i == 4) {
                Document.getElementById('pakeName5').innerHTML = legendary[y].name
                Document.getElementById('pakeType5').innerHTML = legendary[y].type
            }
            if (i == 5) {
                Document.getElementById('pakeName6').innerHTML = legendary[y].name
                Document.getElementById('pakeType6').innerHTML = legendary[y].type
            }
            if (i == 6) {
                Document.getElementById('pakeName7').innerHTML = legendary[y].name
                Document.getElementById('pakeType7').innerHTML = legendary[y].type
            }
        }
    }
}