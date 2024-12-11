import { useContext, useRef, useState } from 'react'
import Modal from '../../../components/Modal/Modal'
import { FormContainer, InputCheckbox, InputFileImage, InputsNumbers } from './ModalEditProdutoForm.styles'
import { ProdutosContext } from '../../../contexts/ProdutosProvider'
import imageUrl from '../../../assets/cards-thumbnail.jpg';
import { useNavigate } from 'react-router-dom';

const ModalAddProduto = () => {
  const { addProduto } = useContext(ProdutosContext)
  const [disableButton, setDisableButton] = useState(true)
  const [message, setMessage] = useState(null)
  const navigate = useNavigate()

  const inputProdutoNome = useRef(null)
  const inputProdutoDescricao = useRef(null)
  const inputQdEstoque = useRef(null)
  const inputPreco = useRef(null)
  const inputIsImportado = useRef(null)
  const inputImageRef = useRef(null)
  const inputFileRef = useRef(null)

  const validateDisableDisableButton = () => {
    setDisableButton(
      !(
        inputProdutoNome.current.value.trim().length > 0 &&
        inputProdutoDescricao.current.value.trim().length > 0 &&
        Number(inputQdEstoque.current.value) > 0 &&
        Number(inputPreco.current.value) > 0
      )
    );
  };

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
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    console.log('submit')

    const produtoFormData = {
      nome: inputProdutoNome.current.value,
      descricao: inputProdutoDescricao.current.value,
      qtd_estoque: inputQdEstoque.current.value,
      preco: inputPreco.current.value,
      importado: inputIsImportado.current.checked,
      imagem: inputFileRef.current.files[0]
    }

    // const produtoFormData = new FormData(e.target)

    const message = await addProduto(produtoFormData)

    setMessage(message)
    setTimeout(()=>navigate("/dashboard/produtos"), 3000)
  }

  return <Modal
    title={`Cadastrar Novo Produto`}
    close={()=>navigate("/dashboard/produtos")}
  >
    <FormContainer action="" method="get" onSubmit={onSubmit}>
      <label>Imagem do Produto:</label>
      <InputFileImage>
        <img id="image-tag"
          src={imageUrl}
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
        onChange={validateDisableDisableButton}
        ref={inputProdutoNome}
      />
      <label>Descrição:</label>
      <input
        type="text"
        placeholder="Descrição do Produto"
        name="descricao"
        onChange={validateDisableDisableButton}
        ref={inputProdutoDescricao}
      />
      <InputsNumbers>
        <label>Quantidade em Estoque:</label>
        <input
          type="number"
          onChange={validateDisableDisableButton}
          ref={inputQdEstoque}
          name="qtd_estoque"
        />
        <label>Preço (R$):</label>
        <input
          type="number"
          name="preco"
          step="0.01"
          ref={inputPreco}
          onChange={validateDisableDisableButton}
        />
      </InputsNumbers>
      <InputCheckbox>
        <span> Importado? </span>
        <input
          type="checkbox"
          name="importado"
          ref={inputIsImportado}
        />
      </InputCheckbox>

      <button
        className={disableButton ? "btn-disabled btn-block" : "btn btn-block"}
        disabled={disableButton ? "disabled" : ""}
      >
        Cadastrar Produto
      </button>
      {message && <p className="message">{message}</p>}
    </FormContainer>
  </Modal >
}

export default ModalAddProduto

//https://react.dev/reference/react-dom/createPortal#rendering-a-modal-dialog-with-a-portal
