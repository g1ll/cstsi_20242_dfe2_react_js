import { useContext, useEffect, useRef, useState } from "react";
import Modal from "../../../components/Modal/Modal";
import { InputCheckbox } from "./ModalEditProdutoForm.styles";
import { ProdutosContext } from "../../../contexts/ProdutosProvider";

const ModalAddProduto = ({ close }) => {
  const { addProduto } = useContext(ProdutosContext);
  const [disableButton, setDisableButton] = useState(true);
  const [message, setMessage] = useState(null);

  const inputProdutoNome = useRef(null);
  const inputProdutoDescricao = useRef(null);
  const inputQdEstoque = useRef(null);
  const inputPreco = useRef(null);
  const inputIsImportado = useRef(null);

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

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    const message = await addProduto({
      nome: inputProdutoNome.current.value,
      descricao: inputProdutoDescricao.current.value,
      qtd_estoque: inputQdEstoque.current.value,
      preco: inputPreco.current.value,
      importado: inputIsImportado.current.checked,
    });
    setMessage(message);
    setTimeout(close, 3000);
  };

  return (
    <Modal title={`Cadastrar Novo Produto`} close={close}>
      <form action="" method="get" onSubmit={onSubmit}>
        <label>Nome</label>
        <input
          type="text"
          placeholder="Nome do Produto"
          name="name"
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
        <InputCheckbox>
          <span> Importado? </span>
          <input type="checkbox" name="importao" ref={inputIsImportado} />
        </InputCheckbox>

        <button
          className={disableButton ? "btn-disabled btn-block" : "btn btn-block"}
          disabled={disableButton ? "disabled" : ""}
        >
          Cadastrar Produto
        </button>
        {message && <p className="message">{message}</p>}
      </form>
    </Modal>
  );
};

export default ModalAddProduto;

//https://react.dev/reference/react-dom/createPortal#rendering-a-modal-dialog-with-a-portal
