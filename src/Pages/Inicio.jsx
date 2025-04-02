import Cadastro from "../components/Cadastro";
import Carrossel from "../components/Carrossel";
import Categorias from "../components/Categorias";
import Facilidades from "../components/Facilidades";
import Produtos from "../components/Produtos";
import Rodape from "../components/Rodape";

const Inicio = () => {
  return (
    <>
      <Carrossel />
      <Categorias />
      <Produtos />
      <Facilidades />
      <Cadastro />
      <Rodape />
    </>
  );
};

export default Inicio;
