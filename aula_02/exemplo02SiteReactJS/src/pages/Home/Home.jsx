import "./home.css"
import {useState, useEffect} from "react"
import { Cards } from "../../components/Cards/Cards";
import { mockedProducts } from "../../data/mockedProducts";

mockedProducts.reverse()

const Home = () => {
  const [listProdutos,setListProdutos] = useState([])

  useEffect(() => {
    setTimeout(()=>{      
      setListProdutos(mockedProducts)
    },1000);
  }, [])


  return (
    <div>
      <div className="home">
        <div className="products_grid_container">
          {!listProdutos.length
            ? <p>Carregando...</p>
            :listProdutos.map((product, key) => (
              <Cards key={`card${key}`} item={product} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
