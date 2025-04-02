import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaPadrao from "./Pages/PaginaPadrão";
import Inicio from "./Pages/Inicio";
import Carrinho from "./Pages/Carrinho";
import { CarrinhoProvider } from "./components/Contexto/CarrinhoContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <CarrinhoProvider>
          <Routes>
            <Route path="/" element={<PaginaPadrao />}>
              <Route index element={<Inicio />} />
              <Route path="/carrinho" element={<Carrinho />} />
            </Route>
          </Routes>
        </CarrinhoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
