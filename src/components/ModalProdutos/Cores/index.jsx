import React from "react";

const Cores = ({ corSelecionada, setCorSelecionada }) => {
  const coresDisponiveis = [
    {
      id: "azul-claro",
      nome: "Azul claro",
      codigo: "#add8e6",
      classe: "azul-claro",
    },
    { id: "offwhite", nome: "Offwhite", codigo: "#f9f9f9", classe: "offwhite" },
    { id: "preto", nome: "Preto", codigo: "#000000", classe: "preto" },
  ];

  return (
    <div className="border-bottom pb-4 mb-4">
      <p className="fw-bold">Cores: </p>
      <div>
        <div className="form-check d-flex gap-4 px-0">
          {coresDisponiveis.map((cor) => (
            <div key={cor.id} className="d-flex flex-column align-items-center">
              <input
                className={`form-check-input m-0 ${cor.classe}`}
                type="radio"
                name="corSelecionada"
                id={`cor-${cor.id}`}
                checked={corSelecionada === cor.id} // Agora compara com o ID
                onChange={() => {
                  setCorSelecionada(cor.id);
                }}
                style={{
                  backgroundColor: cor.codigo,
                  cursor: "pointer",
                }}
              />
              <label
                className="form-check-label text-center"
                htmlFor={`cor-${cor.id}`}
                style={{ cursor: "pointer" }}
              >
                {cor.nome}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cores;
