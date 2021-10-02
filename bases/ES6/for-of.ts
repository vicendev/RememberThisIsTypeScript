(() => {

  type Avenger = {
    name: string,
    weapon: string
  };

  const ironman:Avenger = {
    name: 'Ironman',
    weapon: 'Armot Suite'
  }

  const captainAmerica:Avenger = {
    name: 'Captan America',
    weapon: 'Shield'
  }

  const thor:Avenger = {
    name: 'Thor',
    weapon: 'Mjolnir'
  }

  const avengers = [ironman, thor, captainAmerica];

  for (const avenger of avengers) {
    console.log(avenger.name, avenger.weapon);
  }

})()