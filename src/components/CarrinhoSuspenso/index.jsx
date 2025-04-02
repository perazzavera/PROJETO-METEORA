import { useCarrinhoContext } from "../../hooks/useCarrinhoContext";
import TotalCarrinho from "../CarrinhoSuspenso/TotalCarrinho";
import ListaCarrinhoSuspenso from "./ListaCarrinhoSuspenso";

const CarrinhoSuspenso = () => {
  const { carrinho, valorTotal } = useCarrinhoContext();

  return (
    <div
      className="offcanvas offcanvas-end"
      style={{ width: "600px" }}
      tabIndex="-1"
      id="carrinhoSuspenso"
      aria-labelledby="carrinhoSuspensoLabel"
    >
      <div className="offcanvas-header botao-lilas text-light">
        <h5 className="offcanvas-title" id="carrinhoSuspensoLabel">
          Carrinho de compras
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body bg-dark">
        <ListaCarrinhoSuspenso carrinho={carrinho} />
        <TotalCarrinho valorTotal={valorTotal} />
      </div>
    </div>
  );
};

export default CarrinhoSuspenso;
