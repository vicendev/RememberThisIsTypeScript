(() => {

  class Apocalipsis {

    static _instance:Apocalipsis;

    private constructor(
      public name: string
    ) {}

    static callApocalipsis(): Apocalipsis{
      if(!Apocalipsis._instance) {
        Apocalipsis._instance = new Apocalipsis('Soy apocalipsis el unico')
      }

      return Apocalipsis._instance;
    }

    changeName(newName:string): void {
      this.name = newName;
    }
  }

  const apocalipsis1 = Apocalipsis.callApocalipsis()
  const apocalipsis2 = Apocalipsis.callApocalipsis()
  const apocalipsis3 = Apocalipsis.callApocalipsis()

  apocalipsis2.changeName('Soy el otro apocalipsis')

  console.log(apocalipsis1)
  console.log(apocalipsis2)
  console.log(apocalipsis3)

})()