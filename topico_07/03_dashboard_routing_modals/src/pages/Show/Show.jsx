import { useContext, useEffect } from "react"
import { Cards } from "../../components/Cards/Cards";
import { ProdutosContext } from "../../contexts/ProdutosProvider";
import { Link, useParams } from "react-router-dom";
import { ShowContainer, ShowMainContent } from "./show.styled";

const Show = () => {
    const { data, loadProdutos } = useContext(ProdutosContext)
    const { id } = useParams()

    useEffect(() => {
       loadProdutos(id)
    }, [])

    return (
            <ShowMainContent>
                <ShowContainer>
                    {!data?.nome
                        ? <p>Carregando...</p>
                        : <Cards key={`card${id}`} item={data} />
                    }
                </ShowContainer>
                <Link to="/">Voltar</Link>
            </ShowMainContent>
    );
};

export default Show;
