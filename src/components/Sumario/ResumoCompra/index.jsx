import React from "react";
import ValorFormatado from "../../ValorFormatado";
import { formatadorMoeda } from "../../../utils/formatadorMoeda";
import { useCarrinhoContext } from "../../../hooks/useCarrinhoContext";

const ResumoCompra = () => {
  const { valorTotal, quantidade } = useCarrinhoContext();
  return (
    <div className="bg-black p-4 text-light">
      <h5 className="text-center fw-bold">Sumário</h5>
      <div className="d-flex flex-row justify-content-between">
        <p className="m-0">{quantidade} produtos</p>
        <span>{formatadorMoeda(valorTotal)}</span>
      </div>
      <div className="divisor__verde my-3" />
      <div className="d-flex flex-row justify-content-between borda-verde pt-4">
        <h4 className="verde-limao m-0">Total</h4>
        <ValorFormatado className="verde-limao" valor={valorTotal} />
      </div>
    </div>
  );
};

export default ResumoCompra;
