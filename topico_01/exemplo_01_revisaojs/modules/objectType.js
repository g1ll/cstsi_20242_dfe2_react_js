import chalk from "chalk";
import { mockedDataProducts } from "../data/mockedData.js";

const exemploObjetcs = () => {
  /**
   * EXEMPLO CRIAÇÃO DE OBJETOS LITERAIS EM JS
   * SINTAXE:
   * OBJ = {ATRIBUTO:VALOR,ATRIBUTO2:VALOR2,....}
   *
   */
  const pessoa = { altura: 1.7, peso: 80 };
  console.log({ pessoa });
  pessoa.idade = 31;
  console.table({ pessoa });

  /** Melhor prática é criar o atributo na declaração
   * do objeto e depois alterar o valro
   *  */

  const carro = { marca: "VW", cor: "Preto", modelo: "" };
  console.table({ carro });
  carro.modelo = "Gol GVI";
  console.table({ carro });

  let mostrar = "marca";
  console.log(`A ${mostrar} do carro é ${carro[mostrar]}`);
};

const exemploIterObjects = () => {
  /**
   * É possível iterar as propriedades de um Object
   * usando o método entries() o qual retorna um par de
   * [chave, valor] para cada 'entrada' do Objeto dentro
   * de um FOR com a sintaxe FOR(... OF ...)
   */

  const carro = { marca: "VW", cor: "Preto", modelo: "GOl" };

  for (let itens of Object.entries(carro)) {
    console.log(itens[1]);
  }
  console.log(chalk.green("=======key,value======"))
  for (let [chave, valor] of Object.entries(carro)) {
    console.log(`atributo: ${chave} | valor: ${valor}`);
  }
};

const produtoMaisCaro = () => {
  let produtoMaisCaro = mockedDataProducts.toSorted(
    (pa, pb) => pb?.preco - pa?.preco
  )[0];
  console.log({ produtoMaisCaro });
};

const precosOrderDesc = () => {
  return mockedDataProducts.toSorted(
        (pa, pb) => pb?.preco - pa?.preco
    ).map((p) => ({ id: p.id, preco: p.preco }));
};

const filtrarProdutoNome = (nome) => {
    return mockedDataProducts.filter(
        p=>p.nome.toLowerCase().includes(
            nome.toLowerCase()
        )
    )
};

const produtosPorFornecedor = () =>{
    return mockedDataProducts.reduce((fornecedores, prod)=>{
        let id_fornecedor = prod.fornecedor_id
        if(!fornecedores[id_fornecedor])
            fornecedores[id_fornecedor] = [prod.id];
        else fornecedores[id_fornecedor].push(prod.id)
        return fornecedores;
    },{})
}


export { exemploObjetcs, exemploIterObjects, produtosPorFornecedor, filtrarProdutoNome , produtoMaisCaro, precosOrderDesc };
