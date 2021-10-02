(() => {

  class Avenger {

    // private name: string;
    // public team: string;
    // public realName?: string;
    static avgAge: number= 35;
    static getClassName() {
      return this.name;
    }

    constructor(
      private name:string, 
      private team:string, 
      public realName?:string
      ) {}

      bio () {
        return `${this.name} (${this.team})`
      }

  }


  const antman: Avenger = new Avenger('Antman', 'Capitán', 'Scott Lang');

  console.log(antman)
  console.log(Avenger.getClassName())

})()