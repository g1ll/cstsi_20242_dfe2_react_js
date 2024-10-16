import chalk from "chalk";
import { exemplosNumTypes } from "./modules/numTypes.js";
import { exemploConst, exemploVarLet } from "./modules/varLetConst.js";
import potencia, { Person1, Person2, Person3, pow, pow2, pow3 } from './modules/funcArrowFunc.js'
import { exemploArrays, exemploIterArrays } from "./modules/arraysMethods.js";


console.log(chalk.blue("Exemplos de Revisão"));

//Revisando alguns tipos numéricos
console.log(chalk.green("Exemplo 01 - Numeric Types: Number, BigInt, Math"));
exemplosNumTypes();

//Revisando var, let e const
console.log(chalk.yellow("Exemplo 02 - Var e Let"));
exemploVarLet();

// Revisando  const
console.log(chalk.yellowBright("Exemplo 03 - Const"));
exemploConst();
// console.log({num})

//Revisando  functions e arrow functions
console.log(chalk.redBright('Exemplo 04 - Functions e Arrows=>fnc'))
console.log(potencia(2,2))
console.log(pow(2,2))
console.log(pow2(3))
console.log(pow3(3,2))


//Exemplos de conflitos de escopo do this de funcoes
  // let p1 = new Person1();
  // setTimeout(() => {
  //   console.log(`p1: ${p1.age}`);
  // }, 3000);

  // let p2 = new Person2();
  // setTimeout(() => {
  //   console.log(`p2: ${p2.age}`);
  // }, 4000);

  // let p3 = new Person3();
  // setTimeout(() => {
  //   console.log('p3: ' + p3.age);
  // }, 5000);

  console.log(chalk.bgBlueBright('Exemplo 05 - Arrays e seus Métodos'))
  exemploArrays()
  console.log(chalk.bgBlue('Exemplo 06 - Iteração de Arrays'))
  exemploIterArrays()