(() => {

  type Avenger = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  }
  const avengers = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Dowey Jr.',
    vision: 'Paul Bettany',
    activo: true,
    poder: 1500.12313
  }

  const { poder, vision } = avengers

  console.log(poder.toFixed(2), vision.toUpperCase())

  const printAvenger = ({ ironman, ...rest}: Avenger) => {
    console.log(ironman, rest)
  }

  printAvenger(avengers);

  const avengersArr: [string, boolean, number] = ['Capitan America',true,150.231];

  const [capitan, ironman, unNumero] = avengersArr;

  //console.log({ironman, capitan})

})()