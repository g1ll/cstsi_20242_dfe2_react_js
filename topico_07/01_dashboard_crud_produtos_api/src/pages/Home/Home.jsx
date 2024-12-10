import {useEffect, useContext } from "react"
import { Cards } from "../../components/Cards/Cards";
import { ProdutosContext } from "../../contexts/ProdutosProvider";
import { HomeGridContainer, HomeMainStyled } from "./home.styled";

const Home = () => {
  const { data, loadProdutos } = useContext(ProdutosContext)

  useEffect(() => {
    loadProdutos()
  }, [])

  return (
      <HomeMainStyled>
        <HomeGridContainer>
          {!data?.length
            ? <p>Carregando...</p>
            : data.map((product, key) => (
              <Cards key={`card${key}`} item={product} />
            ))
          }
        </HomeGridContainer>
      </HomeMainStyled>
  );
};

export default Home;
