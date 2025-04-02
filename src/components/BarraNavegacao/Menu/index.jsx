import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ul className="navbar-nav me-auto mb-lg-0">
      <li className="nav-item">
        <Link to="/" className="nav-link active" aria-current="page">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/carrinho" className="nav-link">
          Carrinho
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/lojas" className="nav-link">
          Lojas
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/novidades" className="nav-link">
          Novidades
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/promocoes" className="nav-link">
          Promoções
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
