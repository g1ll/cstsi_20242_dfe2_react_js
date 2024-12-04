/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import axiosClient from "../utils/axios-client";

export const ProdutosContext = createContext({
  data: null,
  loadProdutos: () => {},
  setData: () => {},
  editProduto: () => {},
  deleteProduto: () => {},
});

const ProdutosProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const loadProdutos = async (id = null) => {
    const url = id ? `/produtos/${id}` : `/produtos`;
    try {
      const {data} = await axiosClient.get(url);
      const _data = data?.data;
      console.log({_data});

      if (!_data) 
        throw new Error("Erro ao carregar produtos");

      Array.isArray(_data) && _data.reverse();
      setData(_data);
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

  return (
    <ProdutosContext.Provider
      value={{
        data,
        loadProdutos,
        setData,
        editProduto,
        deleteProduto,
      }}
    >
      {children}
    </ProdutosContext.Provider>
  );
};

export default ProdutosProvider;
