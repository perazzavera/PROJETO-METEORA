import React from "react";
import ValorFormatado from "../../ValorFormatado";
import Botao from "../../Botao";
import { useNavigate } from "react-router-dom";
import { useCarrinhoContext } from "../../../hooks/useCarrinhoContext";

const TotalCarrinho = () => {
  const { valorTotal } = useCarrinhoContext();
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column gap-3">
      <div className="d-flex flex-row justify-content-between">
        <h4 className="verde-limao m-0">Total</h4>
        <ValorFormatado valor={valorTotal} />
      </div>
      <div className="d-flex flex-column flex-md-row gap-2 mx-1 mx-lg-0 justify-content-between justify-content-md-evelyn">
        <Botao
          onClick={() => navigate("/carrinho")}
          variant="primary"
          className="border-0 w-100"
        >
          Finalizar compra
        </Botao>
      </div>
    </div>
  );
};

export default TotalCarrinho;
