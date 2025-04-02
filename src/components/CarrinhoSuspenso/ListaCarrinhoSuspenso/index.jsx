import { useCarrinhoContext } from "../../../hooks/useCarrinhoContext";
import ItemCarrinhoSuspenso from "../ItemCarrinhoSuspenso";

const ListaCarrinhoSuspenso = () => {
  const { carrinho } = useCarrinhoContext();

  return (
    <div className=" text-light py-3">
      <ul className="list-unstyled">
        {carrinho.length === 0 ? (
          <h5 className="text-center py-3">Seu carrinho está vazio! :( </h5>
        ) : (
          carrinho.map((item) => (
            <ItemCarrinhoSuspenso key={item.id} itemCarrinho={item} />
          ))
        )}
      </ul>
    </div>
  );
};

export default ListaCarrinhoSuspenso;
