import { useCarrinhoContext } from "../../hooks/useCarrinhoContext";
import ItemCarrinho from "../ItemCarrinho";

const ListaCarrinhoPrincipal = () => {
  const { carrinho } = useCarrinhoContext();

  return (
    <div className="bg-black text-light p-4 flex-grow-1">
      <h4 className="fw-normal pb-4">Detalhes da compra</h4>
      <ul className="list-unstyled">
        {carrinho.length === 0 ? (
          <p className="text-center my-5">Seu carrinho está vazio! :( </p>
        ) : (
          carrinho.map((item) => (
            <ItemCarrinho key={item.id} itemCarrinho={item} />
          ))
        )}
      </ul>
    </div>
  );
};

export default ListaCarrinhoPrincipal;
