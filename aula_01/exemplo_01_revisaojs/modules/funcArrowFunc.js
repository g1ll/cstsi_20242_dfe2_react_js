export default function pot(num, exp) {
  console.log("function pot");
  return num ** exp;
}

// console.log(pot(2, 2));

const pow = (num, exp) => {
  console.log("function pow");
  return num ** exp;
};
// console.log(pow(2, 2));

const pow2 = (num) => num ** 2;

const pow3 = (num, exp) => num ** exp;

// console.log(pow2(4));

//OPERADOR THIS
// function Person() {
//     // O contrutor Person() define `this` como uma instância dele mesmo.
//     this.age = 0;

//     setInterval(function growUp() {
//       // Em modo não estrito, a função growUp() define `this`
//       // como o objeto global (porque é onde growUp() é executado.),
//       // que é diferente ao `this`
//       // definido pelo construtor Person().
//       this.age++;
//     }, 1000);
//   }

//CORRECAO ES5
//   function Person2() {
//     var that = this;
//     that.age = 0;

//     setInterval(function growUp() {
//       // A chamada a função refere à variáevel `that` da qual
//       // o valor é o objeto esperado.
//       that.age++;
//     }, 1000);
//   }

//   let p2 = new Person2();
//   setTimeout(() => {
//     console.log('p2: ' + p2.age);
//   }, 5000);

//   function Person3() {
//     this.age = 0;

//     setInterval(() => {
//       this.age++;//   let p = new Person();
//       //   setTimeout(() => {
//       //     console.log(`p: ${p.age}`);
//       //   }, 3000);

//   let p3 = new Person3();
//   setTimeout(() => {
//     console.log('p3: ' + p3.age);
//   }, 3000);

///Reescrevendo os exemplos com classes Person
class Person {
  constructor() {
    this.age = 0;
    setInterval(function growUp() {
      // A chamada a função refere à variáevel `that` da qual
      // o valor é o objeto esperado.
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

export { pow, pow2, pow3, Person, Person2, Person3 };
