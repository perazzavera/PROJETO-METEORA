import { useState, useEffect } from "react";
import useTamanhoTela from "../../hooks/useTamanhoTela";
import Cores from "./Cores";
import Tamanhos from "./Tamanhos";
import { formatadorMoeda } from "../../utils/formatadorMoeda";
import { useCarrinhoContext } from "../../hooks/useCarrinhoContext";

const ModalProdutos = ({ produtoSelecionado, onClose }) => {
  const { adicionarProduto } = useCarrinhoContext();
  const tamanhoTela = useTamanhoTela();
  const [corSelecionada, setCorSelecionada] = useState("");
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    if (produtoSelecionado) {
      setIsModalVisible(true);
    } else {
      closeModal();
    }
  }, [produtoSelecionado]);

  const closeModal = () => {
    // Fecha o modal via Bootstrap JS
    const modalEl = document.getElementById("modalProdutos");
    if (modalEl) {
      const modal =
        bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
      modal.hide();
    }

    // Limpa o backdrop manualmente se necessário
    const backdrops = document.getElementsByClassName("modal-backdrop");
    for (let backdrop of backdrops) {
      backdrop.remove();
    }

    // Remove classes do body
    document.body.classList.remove("modal-open");
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";

    // Reseta estados
    setIsModalVisible(false);
    setCorSelecionada("");
    setTamanhoSelecionado("");

    if (onClose) onClose();
  };

  const handleAdicionarAoCarrinho = () => {
    if (!corSelecionada || !tamanhoSelecionado) {
      alert("Por favor, selecione cor e tamanho!");
      return;
    }

    const itemCarrinho = {
      id: `${produtoSelecionado.id}-${corSelecionada}-${tamanhoSelecionado}`,
      ...produtoSelecionado,
      cor: corSelecionada,
      tamanho: tamanhoSelecionado,
      precoUnitario: formatadorMoeda(produtoSelecionado.preco),
    };

    adicionarProduto(itemCarrinho);

    // Mostra o toast
    const toastEl = document.getElementById("liveToast");
    if (toastEl) {
      const toast = new bootstrap.Toast(toastEl);
      toast.show();
    }

    closeModal();
  };

  if (!produtoSelecionado) return null;

  return (
    <div
      className={`modal fade ${isModalVisible ? "show" : ""}`}
      id="modalProdutos"
      tabIndex="-1"
      aria-labelledby="modalProdutosLabel"
      aria-hidden={!isModalVisible}
      style={{ display: isModalVisible ? "block" : "none" }}
      data-bs-backdrop="static"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header bg-black text-light py-2">
            <i
              className="bi bi-check-circle verde-limao pe-3"
              style={{ fontSize: "2em" }}
            ></i>
            <h1
              className="modal-title fs-3 lh-sm fw-normal pe-4"
              id="modalProdutosLabel"
            >
              Confira detalhes sobre o produto
            </h1>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={closeModal}
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            <div className="row">
              <div className="col-lg-6 mb-4 mb-md-0">
                <img
                  src={produtoSelecionado.src[tamanhoTela]}
                  alt={produtoSelecionado.alt || "Imagem do produto"}
                  className="img-fluid w-100"
                  style={{ maxHeight: "500px", objectFit: "contain" }}
                />
              </div>

              <div className="col-lg-6">
                <div className="d-flex flex-column h-100">
                  <h5 className="fw-bold fs-4 my-3">
                    {produtoSelecionado.titulo}
                  </h5>
                  <p className="mb-4">{produtoSelecionado.descricao}</p>

                  <div className="border-top border-bottom py-3 mb-3">
                    <h3 className="mb-1">
                      {formatadorMoeda(produtoSelecionado.preco)}
                    </h3>
                    <p className="text-secondary m-0">
                      Vendido e entregue por Riachuelo
                    </p>
                  </div>

                  <div className="mt-auto">
                    <Cores
                      corSelecionada={corSelecionada}
                      setCorSelecionada={setCorSelecionada}
                    />
                    <Tamanhos
                      tamanhoSelecionado={tamanhoSelecionado}
                      setTamanhoSelecionado={setTamanhoSelecionado}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary botao-lilas border-0 rounded-0 w-100 py-2"
              onClick={handleAdicionarAoCarrinho}
            >
              Adicionar à sacola
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProdutos;
