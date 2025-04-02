import BannerCarrinho from "../components/BannerCarrinho";
import ListaCarrinhoPrincipal from "../components/ListaCarrinhoPrincipal";
import Sumario from "../components/Sumario";

const Carrinho = () => {
  return (
    <>
      <BannerCarrinho />
      <main className="container-xxl">
        <h2 className="text-center pt-5 pb-4">Carrinho de compras</h2>
        <div className="d-flex flex-column mx-md-3 gap-4 flex-md-column flex-lg-row">
          <ListaCarrinhoPrincipal />
          <Sumario />
        </div>
      </main>
    </>
  );
};

export default Carrinho;
