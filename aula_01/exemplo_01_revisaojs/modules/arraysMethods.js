const exemploArrays = () => {
  /**
   * ARRAYS em JS é um Objeto chamado ARRAY
   * para criar um array basta usar [] ou new Array()
   */

  //Cria um array de modelos de carros
  const carros = ["gol", "focus", "celta"];
  const frutas = new Array("maça", "banana", "laranja");
  //mostra o array no console
  console.log(carros);
  //mostra o array numa tabela no console
  console.table(frutas);

  //MÉTODO PUSH: Adiciona um elemento ao array
  //sempre na última posição
  frutas.push("limão");
  console.log("Adicionamos o limão:");
  console.table(frutas);

  //MÉTODO POP: Remove da última posição
  carros.pop();
  console.log("Removemos o celta:");
  console.table(carros);
  //PESQUISE OS MÉTODOS SHIFT E UNSHIFT

  //MÉTODO SPLICE
  /**
   * SPLICE(POSICAO,QTD_RREMOVIDOS,ELEMENTOS[ELEMENTO1,ELEMENTO2 ....])
   *  - POSICAO: POSICAO A SER ALTERADA
   * -  QTD_RREMOVIDOS: QUANTIDADE DE ELEMENTOS REMOVIDOS
   * - ELEMENTOS, LISTA DE NOVOS ELEMENTOS SEPARADOS POR VIRGULA
   */

  //ADICIONAR UMA BERGAMOTA NA POSICAO 2 ANTES DE laranja
  frutas.splice(2, 0, "BERGAMOTA", "MEXERICA");
  console.log("Adicionando a BERGAMOTA");
  console.table(frutas);

  //MOSTRAR BERGAMOTA
  console.log(`NOVA FRUTA É ${frutas[2]}`);

  console.log(frutas.shift()); //REMOVE PRIMEIRO
  console.table(frutas);

  console.log(frutas.unshift("APPLE")); //ADICIONA NO INÍCIO
  console.table(frutas);

  let numeros = [10, 2, -3, 4, 50]
  numeros.sort((a, b) => a - b) //ASC
  console.log(numeros)
  let reverso = numeros.toSorted((a, b) => b - a)//DESC
  console.log(reverso)
  console.log(numeros)
  numeros.reverse()
  console.log(numeros)
};

const exemploIterArrays = () => {
  //Cria um array de modelos de carros
  const carros = ["gol", "focus", "celta"];
  const num = [1, 2, 3, 4, 5, 6]; //array de números

  console.log("----FOR---");
  //CONVENCIONAL
  //usa FOR padrão e atributo length para saber
  //o tamanho do array
  for (let i = 0; i < carros.length; i++) 
        console.log(carros[i]);

  console.log("----FOREACH---");
  //FOREACH
  //Todo objeto Array implementa o FOREACH
  //FOREACH(FUNCAO_CALLBACK(ELEMENTO_DO_ARRAY){})
  carros.forEach(imprimeCarros);

  function imprimeCarros(car) {
    console.log(car);
  }

  //OU usando função anônima
  console.log("\n");
  carros.forEach(function (car) {
    console.log(car);
  });

  console.log("\n");
  //simplificando com arrow functions
  carros.forEach(car => console.log("=>" + car));
  carros.forEach(
        (item,index) => console.log(`${index}=>${item}`)
    );

  //PROCURANDO UM ITEM COM FIND
  let busca = "celta";
  console.log("\n----FIND---");
  console.log(
    carros.find((car) => {
      if (car === busca) return true;
    })
  ); //retorna o item e encerra a iteração

  busca = "focus";
  let achado = carros.findIndex((car) => car === busca);

  console.log(
    achado >= 0
      ? `encontrado ${carros[achado]} na posicao ${achado}`
      : "não encontrado"
  );

  console.log({num})
  console.log(
    num.find((n) => {
      if (n % 2 != 0 && n >1) return true;
    })
  ); //retorna o primeiro número par encontrado

  //FILTRANDO ITENS COM FILTER
  //RETORNA UM ARRAY COM ELEMENTOS QUE PASSAM
  //NO TESTE DO CALLBACK E QUE RETORNA TRUE.
  //O CALLBACK DEVE RETORNAR UM BOOLEAN
  console.log("\n----FILTER---");
  busca = "l";
  console.log(carros.filter((car) => car != busca)); //retorna array com os diferentes da busca
  console.log(carros.filter((car) => car.includes(busca)));

  console.log(num.filter(n => n % 2 == 0)); //retorna array com os pares

  let impares = num.filter(n => n % 2 != 0); //retorna array com os impares
  console.log({ impares }); //as {} é só para o console mostra o nome da variável

  /**
   * O método MAP chama a função callback recebida por parâmetro para cada elemento do Array original, em ordem, e constrói um novo array com base nos retornos de cada chamada.
   */
  console.log("\n----MAP---");
  console.log(
    num.map((n) => {
      if (n % 2 == 0) return "par";
      else return "impar";
    })
  );
  let numquadrado = num.map((n) => n ** 2);
  console.log(num);
  console.log(numquadrado);
  console.log(num.map(n => (n % 2 == 0)? "p" : "i"));

  /**
   *  O método REDUCE retorna um único valor baseado em operações realizadas com os itens do
   * array, por exemplo retornar a soma do total de elementos de um array.
   */

  let numeros = [10, 2, -3, 4, 50];//10,12,9,13,63
  console.log(
        numeros.reduce((soma, item) => soma += item)
    );
  //Retorna a soma igual a 63

  numeros.reduce((soma, item, indice, numeros) =>{
    soma += item
     console.log(`${indice}=>${item} : ${soma} | ${numeros.length}`)
    return soma;
    });
};

export { exemploArrays, exemploIterArrays };
