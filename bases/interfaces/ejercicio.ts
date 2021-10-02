// Crear interfaces
interface Auto {
  encender:boolean,
  velocidadMaxima:number,
  acelerar():void
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto:Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil:Auto = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
interface Guason {
  reir?:boolean,
  comer?:boolean,
  llorar?:boolean
}

// utilizando propiedades opcionales

const guason:Guason = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason:Guason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface CiudadGotica {
  (ciudadanos:string[]):number;
}

const ciudadGotica = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
interface PersonaInterface {
  nombre:string,
  edad:string,
  genero:string,
  estadoCivil:string,
  imprimirBio():void
}
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements PersonaInterface {

  constructor(
    public nombre:string,
    public edad:string,
    public genero:string,
    public estadoCivil:string,
  ){}

  imprimirBio(){
    console.log(`${this.nombre} ${this.edad}`)
  }
}