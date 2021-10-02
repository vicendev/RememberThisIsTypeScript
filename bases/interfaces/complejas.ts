(() => {

  interface Client {
    name:string,
    age?:number,
    address?:Address,
    getFullAddress(id:string):string
  }

  interface Address {
    id: number,
    zip:string,
    city:string
  }

  const client:Client = {
    name: 'Vicente',
    age: 26,
    address: {
      id: 125,
      zip: 'JYD DSS',
      city: 'Algun Lugar'
    },
    getFullAddress(id: string) {
      return this.address?.city == undefined ? 'No info' : this.address.city;
    }
  }

  const client2:Client = {
    name:'Samantha',
    age:30,
    address:{
      city:'Argentina',
      id:123,
      zip:'DJK 3JK'
    },
    getFullAddress(id: string) {
      return this.address?.city == undefined ? 'No info' : this.address.city;
    }
  }

})()