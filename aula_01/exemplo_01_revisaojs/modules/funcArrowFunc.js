export default function pot(num, exp) {
  console.log("function pot");
  return num ** exp;
}

const pow = (num, exp) => {
  console.log("function pow");
  return num ** exp;
};

const pow2 = (num) => num ** 2;

const pow3 = (num, exp) => num ** exp;

//OPERADOR THIS
function Person1() {
    // O contrutor Person() define `this` como uma instância dele mesmo.
    this.age = 0;

    setInterval(function growUp() {
      // Em modo não estrito, a função growUp() define `this`
      // como o objeto global (porque é onde growUp() é executado.),
      // que é diferente ao `this`
      // definido pelo construtor Person().
      this.age++;
    }, 1000);
  }

// CORRECAO ES5
  function Person2() {
    var that = this;
    that.age = 0;

    setInterval(function growUp() {
      // A chamada a função refere à variáevel `that` da qual
      // o valor é o objeto esperado.
      that.age++;
    }, 1000);
  }

  function Person3() {
    this.age = 0;
    setInterval(() => this.age++,1000);
  }

///Reescrevendo os exemplos com classes Person
// class Person1 {
//   constructor() {
//     this.age = 0;
//     setInterval(function growUp() {
//        // O this utilizado neste escopo 
//         // não é o this da Pessoa1, mas sim
//        // da funcao growUp
//       this.age++;
//     }, 1000);
//   }
// }

// class Person2 {//ES5
//   constructor() {
//     var that = this;
//     that.age = 0;

//     setInterval(function growUp() {
//       // A chamada a função refere à variáevel `that` da qual
//       // o valor é o objeto esperado.
//       that.age++;
//     }, 1000);
//   }
// }


// class Person3{
//     constructor(){
//         this.age = 0;
//         setInterval(()=>this.age++,1000);
//    }
// }

export { pow, pow2, pow3, Person1, Person2, Person3 };
