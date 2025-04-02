import { useCarrinhoContext } from "../../../hooks/useCarrinhoContext";
import InfoItemCarrinhoSuspenso from "../InfoItemCarrinhoSuspenso";

const ItemCarrinhoSuspenso = ({ itemCarrinho }) => {
  const { removerProdutoCarrinho } = useCarrinhoContext();

  const getImagemCarrinho = () => {
    if (!itemCarrinho?.src?.desktop) return "";
    const nomeArquivo = itemCarrinho.src.desktop.split("/").pop();
    return `/assets/carrinho/${nomeArquivo}`;
  };

  return (
    <li className="py-2 d-flex border-bottom border-secondary pb-5">
      <div className="d-flex container justify-content-between">
        <img
          className="imagem__produto"
          src={getImagemCarrinho()}
          alt={itemCarrinho.alt || `Imagem de ${itemCarrinho.titulo}`}
          onError={(e) => {
            console.error("Imagem do carrinho não encontrada, usando original");
            e.target.src = itemCarrinho.src.desktop; // Fallback para imagem original
          }}
        />
        <InfoItemCarrinhoSuspenso itemCarrinho={itemCarrinho} />
        <div className="d-flex">
          <button
            onClick={() => removerProdutoCarrinho(itemCarrinho.id)}
            className="btn btn-dark"
          >
            <i className="bi bi-trash-fill fs-3"></i>{" "}
          </button>
        </div>
      </div>
    </li>
  );
};

export default ItemCarrinhoSuspenso;
