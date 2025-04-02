import { useState } from "react";
import useTamanhoTela from "../../hooks/useTamanhoTela";
import produtos from "../../mocks/produtos.json";
import ModalProdutos from "../ModalProdutos";
import { formatadorMoeda } from "../../utils/formatadorMoeda";
import Toast from "./Toast";
import { useCarrinhoContext } from "../../hooks/useCarrinhoContext";

const Produtos = () => {
  const { adicionarProduto } = useCarrinhoContext();
  const tamanhoTela = useTamanhoTela();
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  return (
    <section className="container">
      <h2 className="text-center pt-5 pb-4">Produtos que estão bombando!</h2>
      <div className="row d-flex gap-4 justify-content-center">
        {produtos.map((produto) => (
          <div
            style={{ width: "21.5rem" }}
            key={produto.id}
            className="card col-12 col-md-6 col-lg-4 rounded-0 p-0"
          >
            <img
              src={produto.src[tamanhoTela]}
              className="card-img-top rounded-0 w-100"
              alt={produto.titulo}
            />
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title fw-bold">{produto.titulo}</h5>
              <p className="card-text">{produto.descricao}</p>
              <p className="fw-bold">{formatadorMoeda(produto.preco)}</p>
              <button
                type="button"
                className="btn align-self-start btn-light botao-lilas text-light rounded-0 border-0"
                data-bs-toggle="modal"
                data-bs-target="#modalProdutos"
                onClick={() => setProdutoSelecionado(produto)}
              >
                Ver mais
              </button>
            </div>
          </div>
        ))}
      </div>
      <Toast />
      <ModalProdutos
        produtoSelecionado={produtoSelecionado}
        onAdicionarAoCarrinho={adicionarProduto}
      />
    </section>
  );
};

export default Produtos;
