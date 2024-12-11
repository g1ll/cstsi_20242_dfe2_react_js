import { useContext, useEffect, useState } from 'react'
import { ProdutosContext } from '../../../contexts/ProdutosProvider'
import ProdutoTable from '../../../components/Tables/ProdutoTable/ProdutoTable'
import ModalEditProduto from './ModalEditProduto'
import ModalRemoveProduto from './ModalRemoveProduto.jsx'
import ModalAddProduto from './ModalAddProduto.jsx'
import { ProdutoDashStyled } from './ProdutoDash.styled.js'

const Produtos = () => {
  const { data, loadProdutos } = useContext(ProdutosContext)
  const [showModalAdd, setShowModalAdd] = useState(false)
  const [showModalEdit, setShowModalEdit] = useState(false)
  const [showModalRemove, setShowModalRemove] = useState(false)
  const [produtoAtual, setProdutoAtual] = useState({})

  const findProdutoAtual = (id)=>{
    const findedProd = data.find(produto => produto.id == id)
    if (!findedProd) return;
    setProdutoAtual({ ...findedProd })
  }
  
  const openModalEdit = (id) => {
    findProdutoAtual(id)
    setShowModalEdit(true)
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
      <button className={"btn"} onClick={() => setShowModalAdd(true)}>
        Novo Produto
      </button>
    </div>
    {Array.isArray(data) && data?.length>0
      ? <ProdutoTable
      produtos={data}
      edit={openModalEdit}
      remove={openModalRemove}
    />
  : <p>Carregando...</p>}
    {showModalAdd && <ModalAddProduto close={() => setShowModalAdd(false)} />}
    {showModalEdit && <ModalEditProduto editedProduto={produtoAtual} close={() => setShowModalEdit(false)} />}
    {showModalRemove && <ModalRemoveProduto removedProduto={produtoAtual} close={() => setShowModalRemove(false)} />}
  </ProdutoDashStyled>
  )
}

export default Produtos
