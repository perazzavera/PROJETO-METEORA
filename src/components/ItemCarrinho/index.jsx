import React from "react";
import Botao from "../Botao";
import Quantidade from "../Quantidade";
import ValorFormatado from "../ValorFormatado";
import { useCarrinhoContext } from "../../hooks/useCarrinhoContext";
import InfoItemCarrinhoPrincipal from "../ItemCarrinho/InfoItemCarrinho";

const ItemCarrinhoPrincipal = ({ itemCarrinho }) => {
  const { removerProduto, removerProdutoCarrinho, adicionarProduto } =
    useCarrinhoContext();

  // Gera o caminho da imagem do carrinho baseado no ID do produto
  const getImagemCarrinho = () => {
    // Extrai o nome do arquivo da imagem original (assumindo que é o mesmo)
    const nomeArquivo = itemCarrinho.src.desktop.split("/").pop(); // pega "produto1.jpg" de "/imagens/produtos/detalhe/produto1.jpg"
    return `/assets/carrinho/${nomeArquivo}`;
  };

  return (
    <li className="d-flex flex-column" key={itemCarrinho.id}>
      <div className="produto d-flex justify-content-between">
        <div className="d-flex align-items-md-center">
          <img
            className="imagem__produto"
            src={getImagemCarrinho()}
            alt={itemCarrinho.alt || `Imagem de ${itemCarrinho.titulo}`}
            onError={(e) => {
              console.error(
                "Imagem do carrinho não encontrada, usando original"
              );
              e.target.src = itemCarrinho.src.desktop; // Fallback para imagem original
            }}
          />
          <InfoItemCarrinhoPrincipal itemCarrinho={itemCarrinho} />
        </div>
        <div className="d-flex align-items-center w-100 justify-content-between pt-3">
          <ValorFormatado valor={itemCarrinho.preco} />
          <Quantidade
            itemCarrinho={itemCarrinho}
            adicionarProduto={adicionarProduto}
            removerProduto={removerProduto}
          />
          <div className="d-flex h-100">
            <button
              className="bg-transparent border-0 text-light"
              aria-label="Excluir"
              handleClick={() => removerProdutoCarrinho(itemCarrinho.id)}
            >
              <i class="bi bi-trash-fill fs-3"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="divisor my-5" />
    </li>
  );
};

export default ItemCarrinhoPrincipal;
