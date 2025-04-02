import React from "react";
import ResumoCompra from "./ResumoCompra";
import { useNavigate } from "react-router-dom";

const Sumario = ({ valorTotalCarrinho, quantidadeProdutos }) => {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column gap-3 sumario">
      <ResumoCompra
        valorTotalCarrinho={valorTotalCarrinho}
        quantidadeProdutos={quantidadeProdutos}
      />
      <div className="d-flex gap-3">
        <button
          onClick={() => navigate("/")}
          className="w-100 btn-outline-purple bg-transparent"
        >
          Continuar compra
        </button>
        <button className="w-100 botao-lilas border-0 text-light">
          Finalizar compra
        </button>
      </div>
    </div>
  );
};

export default Sumario;
