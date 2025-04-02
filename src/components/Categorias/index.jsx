import categorias from "../../mocks/categorias.json";
import useTamanhoTela from "../../hooks/useTamanhoTela";

const Categorias = () => {
  const tamanhoTela = useTamanhoTela();
  return (
    <section className="d-flex flex-column container">
      <h2 className="text-center pt-5 pb-4 fs-1">Busque por categoria:</h2>
      <div className="row text-center d-flex justify-content-center gap-4">
        {categorias.map((categoria) => (
          <div
            key={categoria.id}
            className="card rounded-0 border-0 col-6 p-0 w-auto"
          >
            <img
              src={categoria.src[tamanhoTela]}
              className="card-img-top rounded-0"
              alt={categoria.alt}
            />
            <div className="card-body bg-black text-light p-2">
              <h5 className="card-title m-0 fs-6 fw-normal">
                {categoria.titulo}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categorias;
