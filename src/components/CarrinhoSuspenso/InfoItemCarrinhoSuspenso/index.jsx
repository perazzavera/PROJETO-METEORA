import React from "react";
import ValorFormatado from "../../ValorFormatado";
import Quantidade from "../../Quantidade";

const InfoItemCarrinhoSuspenso = ({ itemCarrinho }) => {
  return (
    <div className="mx-4 mx-md-2 text-center text-md-start descricao d-flex flex-column align-items-center justify-content-center gap-3">
      <p className="fw-semibold fs-5 m-0">{itemCarrinho.titulo}</p>
      <Quantidade itemCarrinho={itemCarrinho} />
      <p className="m-0">
        <ValorFormatado valor={itemCarrinho.preco} />
      </p>{" "}
    </div>
  );
};

export default InfoItemCarrinhoSuspenso;
