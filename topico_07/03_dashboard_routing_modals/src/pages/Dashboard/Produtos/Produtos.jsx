import { useContext, useEffect, useState } from 'react'
import { ProdutosContext } from '../../../contexts/ProdutosProvider'
import ProdutoTable from '../../../components/Tables/ProdutoTable/ProdutoTable'
import ModalRemoveProduto from './ModalRemoveProduto.jsx'
import { ProdutoDashStyled } from './ProdutoDash.styled.js'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const Produtos = () => {
  const { data, loadProdutos } = useContext(ProdutosContext)
  const [showModalRemove, setShowModalRemove] = useState(false)
  const [produtoAtual, setProdutoAtual] = useState({})
  const navigate = useNavigate();

  const findProdutoAtual = (id)=>{
    const findedProd = data.find(produto => produto.id == id)
    if (!findedProd) return;
    setProdutoAtual({ ...findedProd })
  }
  
  const openModalEdit = (id) => {
    navigate(`/dashboard/produtos/edit/${id}`);
  }

  const openModalRemove = (id) => {
    findProdutoAtual(id)
    setShowModalRemove(true)
  }

  useEffect(() => {
    loadProdutos()
  }, [])

  return (<ProdutoDashStyled>
    <h2>Produtos Dashboard</h2>
    <div>
      <Link to={"/dashboard/produtos/create"}>
        <button className={"btn"}>
          Novo Produto
        </button>
      </Link>
    </div>
    {Array.isArray(data) && data?.length>0
      ? <ProdutoTable
      produtos={data}
      edit={openModalEdit}
      remove={openModalRemove}
    />
  : <p>Carregando...</p>}
    {showModalRemove && <ModalRemoveProduto removedProduto={produtoAtual} close={() => setShowModalRemove(false)} />}
    <Outlet/>
  </ProdutoDashStyled>
  )
}

export default Produtos
