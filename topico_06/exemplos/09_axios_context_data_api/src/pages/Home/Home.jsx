import "./home.css"
import { useEffect, useContext } from "react"
import { Cards } from "../../components/Cards/Cards";
import { ProdutosContext } from "../../contexts/ProdutosProvider";

const Home = () => {
  const { data, loadProdutos } = useContext(ProdutosContext)

  useEffect(() => {
    loadProdutos()
  }, [])

  return (
    <div>
      <div className="home">
        <div className="products_grid_container">
          {!data?.length
            ? <p>Carregando...</p>
            : data.map((product, key) => (
              <Cards key={`card${key}`} item={product} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
