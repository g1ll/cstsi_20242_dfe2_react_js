import "./show.css"
import { useContext, useEffect } from "react"
import { Cards } from "../../components/Cards/Cards";
import { ProdutosContext } from "../../contexts/ProdutosProvider";
import { Link, useParams } from "react-router-dom";

const Show = () => {
    const { data, loadProdutos } = useContext(ProdutosContext)
    const { id } = useParams()

    useEffect(() => {
       loadProdutos(id)
    }, [])

    return (
        <div>
            <div className="home">
                <div className="show_grid_container">
                    {!data?.nome
                        ? <p>Carregando...</p>
                        : <Cards key={`card${id}`} item={data} />
                    }
                </div>
                <Link to="/">Voltar</Link>
            </div>
        </div>
    );
};

export default Show;
