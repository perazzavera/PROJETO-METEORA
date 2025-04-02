import React from "react";
import Botao from "../Botao";
import { useLocation } from "react-router-dom";
import { useCarrinhoContext } from "../../hooks/useCarrinhoContext";

const Quantidade = ({ itemCarrinho }) => {
  const { adicionarProduto, removerProduto } = useCarrinhoContext();
  const location = useLocation();

  return (
    <div
      className={`d-flex flex-column align-items-center ${
        location.pathname === "/carrinho"
          ? "align-items-md-center"
          : "align-items-md-start"
      } gap-3`}
    >
      <h5 className="fs-6 m-0">Quantidade</h5>
      <div className="d-flex justify-content-between gap-3">
        <Botao
          variant="removeItem"
          aria-label="Remover item"
          handleClick={() => removerProduto(itemCarrinho.id)}
        >
          -
        </Botao>
        <span className="border px-3 rounded" aria-label="Quantidade">
          {itemCarrinho.quantidade || 0}
        </span>
        <Botao
          variant="addItem"
          aria-label="Adicionar item"
          handleClick={() => adicionarProduto(itemCarrinho)}
        >
          +
        </Botao>
      </div>
    </div>
  );
};

export default Quantidade;
