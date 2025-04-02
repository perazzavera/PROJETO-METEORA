import React from "react";

const InfoItemCarrinhoPrincipal = ({ itemCarrinho }) => {
  return (
    <div className="mx-4 mx-md-2 text-center text-md-start descricao">
      <p className="fw-semibold fs-6 mb-2">{itemCarrinho.titulo}</p>
      <p className="m-0 texto-menor pb-2">{itemCarrinho.descricao}</p>
      <p className=" fw-bold texto-menor m-0">Cor: {itemCarrinho.cor}</p>
      <p className=" fw-bold texto-menor m-0">
        Tamanho: {itemCarrinho.tamanho}
      </p>
    </div>
  );
};

export default InfoItemCarrinhoPrincipal;
