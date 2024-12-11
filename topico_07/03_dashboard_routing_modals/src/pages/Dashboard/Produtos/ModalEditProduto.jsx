import { useContext, useEffect, useRef, useState } from 'react'
import Modal from '../../../components/Modal/Modal'
import { InputCheckbox, InputFileImage, InputsNumbers } from './ModalEditProdutoForm.styles'
import { ProdutosContext } from '../../../contexts/ProdutosProvider'
import imageUrl from '../../../assets/cards-thumbnail.jpg';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const ModalEditProduto = ({ close, editedProduto }) => {
  const {editProduto} = useContext(ProdutosContext)
  const [disableButton, setDisableButton] = useState(true)
  const [message, setMessage] = useState(null)

  console.log(editedProduto)

  const inputProdutoNome = useRef(null)
  const inputProdutoDescricao = useRef(null)
  const inputQtdEstoque = useRef(null)
  const inputPreco = useRef(null)
  const inputIsImportado = useRef(null)

  const inputImageRef = useRef(null)
  const inputFileRef = useRef(null)

  useEffect(() => {
    inputProdutoNome.current.value = editedProduto?.nome
    inputProdutoDescricao.current.value = editedProduto?.descricao
    inputQtdEstoque.current.value = editedProduto?.qtd_estoque
    inputPreco.current.value = editedProduto?.preco
    inputIsImportado.current.checked = !!editedProduto?.importado
  }, [])

  const handleNome = (e) => {
    const nome = e.target.value;
    console.log('Nome', e.target.value)
    setDisableButton(!(
      e.target.value.length > 0
      && nome.trim() !== editedProduto?.nome.trim()
    ))
  }

  const handleDescricao = (e) => {
    const descricao = e.target.value;
    const oldDescricao = editedProduto?.descricao
    setDisableButton(!(
      descricao.length > 0
      && descricao.trim() !== oldDescricao.trim()
    ))
  }

  const handleQtdEstoque = (e) => {
    const qtdEstoque = Number(e.target.value);
    setDisableButton(!(
      Number.isInteger(qtdEstoque)
      && qtdEstoque != editedProduto?.qtd_estoque
    ))
  }

  const handlePreco = (e) => {
    console.log('Preco', Number(e.target.value))
    console.log('Preco diff', +e.target.valueOf() !== +editedProduto?.preco)
    setDisableButton(!(
      Number(e.target.value) > 0
      && +e.target.value !== +editedProduto?.preco
    ))
  }

  const handleImportado = (e) => {
    // console.log(!!e.target.checked, !!editedProduto?.importado)
    setDisableButton(!(e.target?.checked !== !!editedProduto?.importado))
  }

  const handleSelectedImage = (e) => {
    console.log(e.target.files)

    const imageFile = e.target.files[0]
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      () => {
        // convert image file to base64 string
        inputImageRef.current.src = reader.result;
      },
      false,
    );

    imageFile && reader.readAsDataURL(imageFile);
    setDisableButton(!imageFile)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    console.log('submit')

    const produtoFormData = new FormData(e.target);
    
    const message = await editProduto( editedProduto?.id, produtoFormData)
    setMessage(message)
    setTimeout(close,3000)

  }

  return <Modal
      title={`Atualizar Produto ${editedProduto.nome}`}
      close={close}
    >
      <form action="" method="get" onSubmit={onSubmit}>
      <InputFileImage>
        <img id="image-tag"
          src={editedProduto?.imagem ? (BASE_URL+editedProduto?.imagem) : imageUrl}
          ref={inputImageRef}
        />
        <input
          id='image-field'
          type="file"
          name="imagem"
          onChange={handleSelectedImage}
          ref={inputFileRef} />
      </InputFileImage>
        <label>Nome</label>
        <input
          type="text"
          placeholder="Nome do Produto"
          name="nome"
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
        <InputsNumbers>
        <label>Quantidade em Estoque:</label>
        <input
          type="number"
          onChange={handleQtdEstoque}
          ref={inputQtdEstoque}
          name="qtd_estoque"
        />
        <label>Preço (R$):</label>
        <input
          type="number"
          name="preco"
          step="0.01"
          ref={inputPreco}
          onChange={handlePreco}
        />
      </InputsNumbers>
        <InputCheckbox>
          <span> Importado? </span>
          <input
            type="checkbox"
            name="importado"
            ref={inputIsImportado}
            onChange={handleImportado}
          />
        </InputCheckbox>

        <button
          className={disableButton ? "btn-disabled btn-block" : "btn btn-block"}
          disabled={disableButton ? "disabled" : ""}
        >
          Atualizar Produto
        </button>
        {message && <p className="message">{message}</p>}
      </form>
    </Modal>
}

export default ModalEditProduto

//https://react.dev/reference/react-dom/createPortal#rendering-a-modal-dialog-with-a-portal
