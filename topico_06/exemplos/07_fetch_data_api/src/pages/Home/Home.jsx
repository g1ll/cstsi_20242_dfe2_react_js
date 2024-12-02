import "./home.css"
import {useState, useEffect} from "react"
import { Cards } from "../../components/Cards/Cards";
import { mockedProducts } from "../../data/mockedProducts";

mockedProducts.reverse()

const API_URL = import.meta.env.VITE_API_URL;

const Home = () => {
  const [listProdutos,setListProdutos] = useState([])

  useEffect(() => {
    // setTimeout(()=>{      
    //   setListProdutos(mockedProducts)
    // },1000);

    //Promise Chain
    console.log(API_URL);
    fetch(`${API_URL}/produtos`)
      .then(response=>response.json())
      .then(json=>{
        console.log({json})
        setListProdutos(json.data)
      })
      .catch(error=>console.log(error));

    //Async/Await
    // (async ()=>{
    //   try {
    //     const response = await fetch(`${API_URL}/produtos`);
    //     const data = await response.json();
    //     setListProdutos(data.data);
    //   } catch (error) {
    //     console.error(error)
    //   }
    // })();
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
