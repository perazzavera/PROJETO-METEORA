import { Link, useLocation } from "react-router-dom";
import Menu from "./Menu";
import CarrinhoSuspenso from "../CarrinhoSuspenso";
import BotaoCarrinho from "../BotaoCarrinho";
import { useCarrinhoContext } from "../../hooks/useCarrinhoContext";

const BarraNavegacao = () => {
  const { quantidade } = useCarrinhoContext();
  const location = useLocation();
  const ehAPaginaCarrinho = location.pathname === "/carrinho";
  return (
    <header>
      <nav className="navbar navbar-expand-md bg-black navbar-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src="./Logo desktop.png" alt="Logo Meteora" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Menu />
            <form className="d-flex m-0" role="search">
              <input
                className="form-control me-2 rounded-0"
                type="search"
                placeholder="Digite o produto"
                aria-label="Search"
              />
              <button className="btn btn-outline-light rounded-0" type="submit">
                Buscar
              </button>
              <BotaoCarrinho
                className={`d-none d-md-block ${
                  ehAPaginaCarrinho && "d-md-none"
                }`}
                quantidadeProdutos={quantidade}
              />
            </form>
          </div>
        </div>
      </nav>
      <CarrinhoSuspenso />
    </header>
  );
};

export default BarraNavegacao;
