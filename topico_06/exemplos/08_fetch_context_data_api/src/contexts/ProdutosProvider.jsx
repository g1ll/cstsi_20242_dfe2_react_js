/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export const ProdutosContext = createContext({
  data: null,
  loadProdutos: () => {},
  setData: () => {},
  editProduto: () => {},
  deleteProduto: () => {},
  createProduto: () => {},
});

const ProdutosProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const loadProdutos = async (id = null) => {
    const url = id ? `${API_URL}/produtos/${id}` : `${API_URL}/produtos`;
    try {
      const response = await fetch(url);
      if (response.status !== 200) 
        throw new Error("Erro ao carregar produtos");

      const {data} = await response.json();
      // Array.isArray(data) && data.reverse();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const editProduto = (id, data) => {
    return true; //TODO
  };

  const deleteProduto = (id) => {
    return true; //TODO
  };

  const createProduto = (data) => {
    return true; //TODO
  };

  return (
    <ProdutosContext.Provider
      value={{
        data,
        loadProdutos,
        setData,
        editProduto,
        deleteProduto,
        createProduto
      }}
    >
      {children}
    </ProdutosContext.Provider>
  );
};

export default ProdutosProvider;
