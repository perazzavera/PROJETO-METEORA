import { Outlet } from "react-router-dom";
import BarraNavegacao from "../components/BarraNavegacao";

const PaginaPadrao = () => {
  return (
    <>
      <BarraNavegacao />

      <Outlet />
    </>
  );
};

export default PaginaPadrao;
