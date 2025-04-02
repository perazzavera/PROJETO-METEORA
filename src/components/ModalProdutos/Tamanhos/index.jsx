import React from "react";

const Tamanhos = ({ tamanhoSelecionado, setTamanhoSelecionado }) => {
  const tamanhosDisponiveis = ["PP", "P", "M", "G", "GG"];

  return (
    <div className="border-bottom pb-4 mb-4">
      <p className="fw-bold">Tamanho: </p>
      <div>
        <div className="form-check d-flex gap-4 px-0">
          {tamanhosDisponiveis.map((tamanho, index) => (
            <div
              key={tamanho}
              className="d-flex flex-column align-items-center"
            >
              <input
                className="form-check-input m-0"
                type="radio"
                name="tamanhoSelecionado"
                id={`tamanho-${index}`}
                checked={tamanhoSelecionado === tamanho}
                onChange={() => setTamanhoSelecionado(tamanho)}
              />
              <label
                className="form-check-label text-center"
                htmlFor={`tamanho-${index}`}
              >
                {tamanho}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tamanhos;
