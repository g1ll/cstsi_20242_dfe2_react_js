import { useContext, useEffect, useRef, useState } from 'react'
import Modal from '../../../components/Modal/Modal'
import { InputCheckbox } from './ModalEditProdutoForm.styles'
import { ProdutosContext } from '../../../contexts/ProdutosProvider'


const ModalEditProduto = ({ close, editedProduto }) => {
  const {editProduto} = useContext(ProdutosContext)
  const [disableButton, setDisableButton] = useState(true)
  const [message, setMessage] = useState(null)

  console.log(editedProduto)

  const inputProdutoNome = useRef(null)
  const inputProdutoDescricao = useRef(null)
  const qtdEstoque = useRef(null)
  const preco = useRef(null)
  const isImportado = useRef(null)

  useEffect(() => {
    inputProdutoNome.current.value = editedProduto?.nome
    inputProdutoDescricao.current.value = editedProduto?.descricao
    qtdEstoque.current.value = editedProduto?.qtd_estoque
    preco.current.value = editedProduto?.preco
    isImportado.current.checked = !!editedProduto?.importado
  }, [])

  const handleNome = (e) => {
    const nome = e.target.value;
    console.log('Nome', e.target.value)
    setDisableButton(!(
      validateRequiredFields()
      && nome.trim() !== editedProduto?.nome.trim()
    ))
    
  }

  const handleDescricao = (e) => {
    const descricao = e.target.value;
    const oldDescricao = editedProduto?.descricao
    setDisableButton(!(
      validateRequiredFields()
      && descricao.trim() !== oldDescricao.trim()
    ))
  }

  const handleQtdEstoque = (e) => {
    const qtdEstoque = Number(e.target.value);
    setDisableButton(!(
      validateRequiredFields()
      && qtdEstoque != editedProduto?.qtd_estoque
    ))
  }

  const handlePreco = (e) => {
    console.log('Preco', Number(e.target.value))
    console.log('Preco diff', +e.target.valueOf() !== +editedProduto?.preco)
    setDisableButton(!(
      validateRequiredFields()
      && +e.target.value !== +editedProduto?.preco
    ))
  }

  const handleImportado = (e) => {
    // console.log(!!e.target.checked, !!editedProduto?.importado)
    setDisableButton(!(e.target?.checked !== !!editedProduto?.importado))
  }


  const validateRequiredFields = () => {
      return (
        inputProdutoNome.current.value.trim().length > 0 &&
        inputProdutoDescricao.current.value.trim().length > 0 &&
        Number(qtdEstoque.current.value) > 0 &&
        Number(preco.current.value) > 0
      )
  };


  const onSubmit = async (e) => {
    e.preventDefault()
    console.log('submit')
    const message = await editProduto( editedProduto?.id, {
      nome: inputProdutoNome.current.value,
      descricao: inputProdutoDescricao.current.value,
      qtd_estoque: qtdEstoque.current.value,
      preco: preco.current.value,
      importado: isImportado.current.checked
    })
    setMessage(message)
    setTimeout(close,3000)

  }

  return <Modal
      title={`Atualizar Produto ${editedProduto.nome}`}
      close={close}
    >
      <form action="" method="get" onSubmit={onSubmit}>
        <label>Nome</label>
        <input
          type="text"
          placeholder="Nome do Produto"
          name="name"
          onChange={handleNome}
          ref={inputProdutoNome}
        />
         <label>Descrição:</label>
        <input
          type="text"
          placeholder="Descrição do Produto"
          name="descricao"
          onChange={handleDescricao}
          ref={inputProdutoDescricao}
        />
        <label>Quantidade em Estoque:</label>
        <input
          type="number"
          onChange={handleQtdEstoque}
          ref={qtdEstoque}
          name="qtd_estoque"
        />
         <label>Preço (R$):</label>
        <input
          type="number"
          name="preco"
          step="0.01"
          ref={preco}
          onChange={handlePreco}
        />
        <InputCheckbox>
          <span> Importado? </span>
          <input
            type="checkbox"
            name="importao"
            ref={isImportado}
            onChange={handleImportado}
          />
        </InputCheckbox>

        <button
          className={disableButton ? "btn-disabled btn-block" : "btn btn-block"}
          disabled={disableButton ? "disabled" : ""}
        >
          Atualizar Produto
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </Modal>
}

export default ModalEditProduto

//https://react.dev/reference/react-dom/createPortal#rendering-a-modal-dialog-with-a-portal
