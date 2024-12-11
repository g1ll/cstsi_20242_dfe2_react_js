import { useContext, useEffect, useRef, useState } from 'react'
import Modal from '../../../components/Modal/Modal'
import { InputCheckbox, InputFileImage, InputsNumbers } from './ModalEditProdutoForm.styles'
import { ProdutosContext } from '../../../contexts/ProdutosProvider'
import imageUrl from '../../../assets/cards-thumbnail.jpg';
import { useNavigate, useParams } from 'react-router-dom';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const ModalEditProduto = () => {
  const {data, editProduto} = useContext(ProdutosContext)
  const [editingProduto, setEditingProduto] = useState(null);
  const [disableButton, setDisableButton] = useState(true)
  const [message, setMessage] = useState(null)
  const { id } = useParams();
  const navigate = useNavigate();

  const inputProdutoNome = useRef(null)
  const inputProdutoDescricao = useRef(null)
  const inputQtdEstoque = useRef(null)
  const inputPreco = useRef(null)
  const inputIsImportado = useRef(null)

  const inputImageRef = useRef(null)
  const inputFileRef = useRef(null)

  useEffect(() => {
    if (!editingProduto && data && id) {
      setEditingProduto(data.find((produto) => produto.id == id));
      return;
    }

    inputProdutoNome.current.value = editingProduto?.nome;
    inputProdutoDescricao.current.value = editingProduto?.descricao;
    inputQtdEstoque.current.value = editingProduto?.qtd_estoque;
    inputPreco.current.value = editingProduto?.preco;
    inputIsImportado.current.checked = !!editingProduto?.importado;
    console.log("editingProduto:", editingProduto);

  }, [editingProduto, data, id]);

  const handleNome = (e) => {
    const nome = e.target.value;
    console.log('Nome', e.target.value)
    setDisableButton(!(
      e.target.value.length > 0
      && nome.trim() !== editingProduto?.nome.trim()
    ))
  }

  const handleDescricao = (e) => {
    const descricao = e.target.value;
    const oldDescricao = editingProduto?.descricao
    setDisableButton(!(
      descricao.length > 0
      && descricao.trim() !== oldDescricao.trim()
    ))
  }

  const handleQtdEstoque = (e) => {
    const qtdEstoque = Number(e.target.value);
    setDisableButton(!(
      Number.isInteger(qtdEstoque)
      && qtdEstoque != editingProduto?.qtd_estoque
    ))
  }

  const handlePreco = (e) => {
    console.log('Preco', Number(e.target.value))
    console.log('Preco diff', +e.target.valueOf() !== +editingProduto?.preco)
    setDisableButton(!(
      Number(e.target.value) > 0
      && +e.target.value !== +editingProduto?.preco
    ))
  }

  const handleImportado = (e) => {
    setDisableButton(!(e.target?.checked !== !!editingProduto?.importado))
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
    try{
      const message = await editProduto( editingProduto?.id, produtoFormData)
      setMessage(message)
      setTimeout(()=>navigate("/dashboard/produtos"),3000)
    }catch(error){
      setMessage(error?.message)
    }  
  }

  return <Modal
      title={`Atualizar Produto ${editingProduto?.nome}`}
      close={()=>navigate("/dashboard/produtos")}
    >
      <form action="" method="get" onSubmit={onSubmit}>
      <InputFileImage>
        <img id="image-tag"
          src={editingProduto?.imagem ? (BASE_URL+editingProduto?.imagem) : imageUrl}
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
