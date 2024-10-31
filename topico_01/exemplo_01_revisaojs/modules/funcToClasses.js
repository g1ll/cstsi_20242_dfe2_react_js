///Reescrevendo os exemplos com classes Person
class Person1 {
  constructor() {
    this.age = 0;
    setInterval(function growUp() {
      // O this utilizado neste escopo 
      //não é o this da Pessoa1, mas sim
      //da funcao growUp
      this.age++;
    }, 1000);
  }
}

class Person2 {//ES5
  constructor() {
    var that = this;
    that.age = 0;

    setInterval(function growUp() {
      // A chamada a função refere à variáevel `that` da qual
      // o valor é o objeto esperado.
      that.age++;
    }, 1000);
  }
}


class Person3{
    constructor(){
        this.age = 0;
        setInterval(()=>this.age++,1000);
   }
}

export { Person1, Person2, Person3 };
