var num = 10;
const exemploVarLet = () => {

  // var pi = 3 //Descomente para ver o erro
  let pi = 0.14; // Erro de redeclaração da variável pi
      pi = 3.14; //Corrigir o PI reatribuindo valor
 
  console.log(pi,1);

  //escopo de bloco
  if (true) {
    let pi = 3.1415;
    //imprime o valor de pi do bloco
    console.log(pi,2);
    if (true) {
      let pi = 4;
      console.log(pi,3);
    }
    console.log(pi,4)
  }
  //imprime o valor de pi do inicio do programa
  console.log(pi);

  //uso comum para let iteradores
  for (let c of "abcde") {
    console.log(c);
  }
  // console.log(c,5);// erro nao definido
  //tabuada do 5
  let num = 5;
  for (let i = 1; i <= 10; i++) console.log(`${i}X${num}=${i * num}`);

  //observe que i não é mais acessível fora do FOR
  // console.log(i)//Descomente para ver o erro
};

const exemploConst = () => {
  const pi = 3.14;
  // pi = 3.14//Não é possível atribuir novos valores

  //Mas é possível alterar conteúdo de um Array
  const frutas = ["maça", "limão", "uva"];

  frutas.push("laranja"); //não gera erro
  frutas.shift();

  console.table(frutas);

  //Também é possível alterar atributos de um Objeto
  const carro = {
        marca: "VW",
        cor: "Preto",
        modelo: "Gol GVII",
        ano: 2021
    };
  carro.modelo = "Fusca";
  console.table({ carro });
};


export {exemploVarLet, exemploConst, num}