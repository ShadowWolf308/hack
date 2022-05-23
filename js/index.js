var common = ["Caterpie" = {name: 'Caterpie',type: 'bug'}, "Metapod" = {name: 'Metapod',type: 'bug'}, "Butterfree" = {name: 'Butterfree',type: 'bug & flying'}, "Weedle" = {name: 'Weedle',type: 'bug & poison'}, "Kakuna" = {name: 'Kakuna',type: 'bug & poison'}, "Beedrill" = {name: 'Beedrill',type: 'bug & poison'}, "Pidgey" = {name: 'Pidgey',type: 'normal & flying'}, "Pidgeotto" = {name: 'Pidgeotto',type: 'normal & flying'}, "Pidgeot" = {name: 'Pidgeot',type: 'normal & flying'}, "Rattata" = {name: 'Ratata',type: 'normal'}, "Raticate" = {name: 'Raticate',type: 'normal'}, "Spearow" = {name: 'Spearow',type: 'normal & flying'}, "Fearow" = {name: 'Fearow',type: 'normal & flying'}, "Ekans" = {name: 'Ekans',type: 'poison'}, "Arbok" = {name: 'Arbok',type: 'poison'}, "Nidoran" = {name: 'Nidoran',type: 'poison'}, "Nidorina" = {name: 'Nidorina',type: 'poison'}, "Nidoqueen" = {name: 'Nidoqueen',type: 'poison & ground'}, "Nidoran" = {name: 'Nidoran',type: 'poison'}, "Nidorino" = {name: 'Nidorino',type: 'poison'}, "Nidoking" = {name: 'Nidoking',type: 'poison & ground'}, "Paras" = {name: 'Paras',type: 'bug & grass'}, "Parasect" = {name: 'Parasect',type: 'bug & grass'}, "Diglett" = {name: 'Diglett',type: 'ground'}, "Dugtrio" = {name: 'Dugtrio',type: 'Ground'}, "Tentacool" = {name: 'Tentacool',type: 'water & poison'}, "Tentacruel" = {name: 'Tentacruel',type: 'water & poison'}, "Geodude" = {name: 'Geodude',type: 'rock & ground'}, "Graveler" = {name: 'Graveler',type: 'rock & ground'}, "Golem" = {name: 'Golem',type: 'rock & ground'}, "Gastly" = {name: 'Gastly',type: 'ghost & poison'}, "Haunter" = {name: 'Haunter',type: 'ghost & poison'}, "Gengar" = {name: 'Gengar',type: 'ghost & poison'}, "Voltorb" = {name: 'Voltorb',type: 'electric'}, "Electrode" = {name: 'Electrode',type: 'electric'}, "Magikarp" = {name: 'Magikarp',type: 'water'}, "Gyarados" = {name: 'Gyarados',type: 'water & flying'}, "Unown" = {name: 'Unown',type: 'Psychic'}, "Slugma" = {name: 'Slugma',type: 'fire'}, "Magcargo" = {name: 'Magcargo',type: 'fire & rock'}];
var uncommon = ["Sandslash" = {name: 'Sandslash',type: 'ground'}, "Oddish" = {name: 'Oddish',type: 'grass & poison'}, "Gloom" = {name: 'Gloom',type: 'grass & poison'}, "Vileplume" = {name: 'Vileplume',type: 'grass & poison'}, "Meowth" = {name: 'Meowth',type: 'normal'}, "Persian" = {name: 'Persian',type: 'normal'}, "Poliwag" = {name: 'poliwag',type: 'water'}, "Poliwhirl" = {name: 'Poliwhirl',type: 'water'}, "Poliwrath" = {name: 'Poliwrath',type: 'water & fighting'}, "Bellsprout" = {name: 'Bellsprout',type: 'grass & poison'}, "Weepinbell" = {name: 'Weepingbell',type: 'grass & poison'}, "Victreebel" = {name: 'Victreebel',type: 'grass & poison'}, "Krabby" = {name: 'Krabby',type: 'water'}, "Kingler" = {name: 'Kingler',type: 'water'}, "Goldeen" = {name: 'Goldeen',type: 'water'}, "Seaking" = {name: 'Seaking',type: 'water'}, "Sentret" = {name: 'Sentret',type: 'normal'}, "Furret" = {name: 'Furret',type: 'normal'}, "Hoothoot" = {name: 'Hoothoot',type: 'normal & flying'}, "Noctowl" = {name: 'Noctowl',type: 'normal & flying'}, "Ledyba" = {name: 'Ledyba',type: 'bug & flying'}, "Ledian" = {name: 'Ledian',type: 'bug & flying'}, "Spinarak" = {name: 'Spinarak',type: 'bug & poison'}, "Ariados" = {name: 'Ariados',type: 'bug & poison'}, "Crobat" = {name: 'Crobat',type: 'poison & flying'}, "Marill" = {name: 'Marill',type: 'water & fairy'}, "Azumarill" = {name: 'Azumarill',type: 'water & fairy'}];
var rare = ["Clefable" = {name: 'Clefable',type: 'fairy'}, "Venonat" = {name: 'Venonat',type: 'bug & poison'}, "Venomoth" = {name: 'Venomoth',type: 'bug & poison'}, "Mankey" = {name: 'Mankey',type: 'fighting'}, "Primeape" = {name: 'Primeape',type: 'fighting'}, "Magnemite" = {name: 'Magnemite',type: 'electric & steel'}, "Magneton" = {name: 'Magneton',type: 'electric & steel'}, "Grimer" = {name: 'Grimer',type: 'poison'}, "Muk" = {name: 'Muk',type: 'poison'}, "Shellder" = {name: 'Shellder',type: 'water'}, "Cloyster" = {name: 'Cloyster',type: 'water & ice'}, "Drowzee" = {name: 'Drowzee',type: 'psychic'}, "Hypno" = {name: 'Hypno',type: 'psychic'}, "Koffing" = {name: 'Koffing',type: 'poison'}, "Weezing" = {name: 'Weezing',type: 'poison'}, "Horsea" = {name: 'Horsea',type: 'water'}, "Mr.Mime" = {name: 'Mr.Mime',type: 'psychic & fairy'}, "Hoppip" = {name: 'Hoppip',type: 'grass & flying'}, "Skiploom" = {name: "Skiploom", type:"grass & flying"}, "Jumpluff" = {name: 'Jumpluff',type: 'grass & flying'}, "Aipom" = {name: 'Aipom',type: 'normal'}, "Sunkern" = {name: 'Sunkern',type: 'grass'}, "Sunflora" = {name: 'Sunflora',type: 'grass'}, "Wooper" = {name: 'Wooper',type: 'water & ground'}, "Quagsire" = {name: 'Quagsire',type: 'water & ground'}, "Espeon" = {name: 'Espeon',type: 'Psychic'}, "umbreon" = {name: 'Umbreon',type: 'Dark'}, "Murkrow" = {name: 'Murkrow',type: 'dark & flying'}, "Slowking" = {name: 'Slowking',type: 'Psychic & water'}, "Pineco" = {name: 'Pineco',type: 'Bug'}, "Forretress" = {name: 'Forretress',type: 'bug & steel'}, "Dunsparce" = {name: 'Dunsparce',type: 'normal'}, "Snubbull" = {name: 'Snubbull',type: 'fairy'}, "Granbull" = {name: 'Granbull',type: 'fairy'}, "Qwilfish" = {name: 'Qwilfish',type: 'water & poison'}, "Scizor" = {name: 'Scizor',type: 'bug & steel'}, "Remoraid" = {name: 'Remoraid',type: 'water'}, "Octillery" = {name: 'Octillery',type: 'water'}, "Smeargle" = {name: 'Smeargle',type: 'normal'}];
var veryRare = ["Pikachu" = {name: 'Pikachu',type: 'electric'}, "Raichu" = {name: 'Raichu',type: 'electric'}, "Vulpix" = {name: 'Vulpix',type: 'fire'}, "Ninetales" = {name: 'Ninetales',type: 'fire'}, "Jigglypuff" = {name: 'Jigglypuff',type: 'normal & fairy'}, "Wigglytuff" = {name: 'Wigglytuff',type: 'normal & fairy'}, "Psyduck" = {name: 'Psyduck',type: 'water'}, "Golduck" = {name: 'Golduck',type: 'water'}, "Growlithe" = {name: 'Growlithe',type: 'fire'}, "Arcanine" = {name: 'arcanine',type: 'fire'}, "Abra" = {name: 'Abra',type: 'psychic'}, "Kadabra" = {name: 'Kadabra',type: 'psychic'}, "Alakazam" = {name: 'Alakazam',type: 'psychic'}, "Ponyta" = {name: 'Ponyta',type: 'fire'}, "Rapidash" = {name: 'Rapidash',type: 'fire'}, "Slowpoke" = {name: 'Slowpoke',type: 'water & psychic'}, "Slowbro" = {name: 'Slowbro',type: 'water & psychic'},
 "Doduo" = {name: 'Doduo',type: 'normal & flying'}, "Dotrio" = {name: 'Dotrio',type: 'normal & flying'}, "Seel" = {name: 'seel',type: 'water'}, "Dewgong" = {name: 'Dewgong',type: 'water & ice'}, "Exeggcute" = {name: 'Exeggcute',type: 'grass & psychic'}, "Exeggutor" = {name: 'Exeggutor',type: 'grass & psychic'}, "Cubone" = {name: 'Cubone',type: 'ground'}, "Marowak" = {name: 'Marowak',type: 'ground'}, "Chansey" = {name: 'Chansey',type: 'normal'}, "Tangela" = {name: 'Tangela',type: 'grass'}, "Seadra" = {name: 'Seadra',type: 'water'}, "Staryu" = {name: 'Staryu',type: 'water'}, "Starmie" = {name: 'Starmie',type: 'water & psychic'}, "Jynx" = {name: 'Jynx',type: 'ice & psychic'}, "Magmar" = {name: 'Magmar',type: 'fire'}, "Tauros" = {name: 'Tauros',type: 'normal'}, "Ditto" = {name: 'Ditto',type: 'normal'}, "Chinchou" = {name: 'Chinchou',type: 'water & electric'}, "Lanturn" = {name: 'Lanturn',type: 'water & electric'}, "Pichu" = {name: 'Pichu',type: 'electric'}, "Igglybuff" = {name: 'Igglybluff',type: 'normal & fairy'}, "Natu" = {name: 'Natu',type: 'psychic & flying'}, "Xatu" = {name: 'Xatu',type: 'psychic & flying'}, "Mareep" = {name: 'Mareep',type: 'electric'}, "Flaaffy" = {name: 'Flaaffy',type: 'electric'}, "Ampharos" = {name: 'Ampharos',type: 'electric'}, "Bellossom", "Yanma" = {name: 'Yanma',type: 'bug & flying'}, "Wobbuffet" = {name: 'Wobuffet',type: 'psychic'}, "Girafarig" = {name: 'Girafarig',type: 'normal & psychic'}, "Teddiursa" = {name: 'Teddiursa',type: 'normal'}, "Ursaring" = {name: 'Ursaring',type: 'normal'}, "Corsola" = {name: 'Corsola',type: 'water & rock'}, "Mantine" = {name: 'Mantine',type: 'water & flying'}, "Houndour" = {name: 'Houndour',type: 'dark & fire'}, "Houndoom" = {name: 'Houndoom',type: 'dark & fire'}, "Kingdra" = {name: 'Kingdra',type: 'water & dragon'}, "Phanpy" = {name: 'Phanpy',type: 'ground'}, "Donphan" = {name: 'Donphan',type: 'ground'}, "Porygon2" = {name: 'Porygon2',type: 'normal'}, "Magby" = {name: 'Magby',type: 'fire'}, "Miltank" = {name: 'Miltank',type: 'normal'}, "Blissey" = {name: 'Blissey',type: 'normal'}];
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