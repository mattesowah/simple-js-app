pokemonList = [
{
name: 'Charizard',
height: 1.7,
types: 'fire,flying'
},
{
name: 'Squirtle',
height: 0.5,
types: 'water'
},
{
name: 'Pikachu',
height: 0.4,
types: 'electric'},
];

for (let i = 0; i <= pokemonList.length; i++)
{
if (pokemonList[i].height <2 && pokemonList[i].height >1)
{
document.write(pokemonList[i].name + "Wow, that's big!");
}
else if (pokemonList[i].height < 1 && pokemonList[i].height >=0.5)
{
(document.write(pokemonList[i].name));
}
