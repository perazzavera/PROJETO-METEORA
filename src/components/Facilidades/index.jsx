import facilidades from "../../mocks/facilidades.json";

const Facilidades = () => {
  return (
    <section className="bg-black text-light mt-5 py-4 d-flex flex-column align-items-center">
      <h2 className="text-center fs-2 pb-4 pt-2">
        Conheça todas as nossas facilidades
      </h2>
      <div className="d-flex flex-column flex-lg-row  px-4 ps-md-5 ms-md-5">
        {facilidades.map((facilidade) => (
          <div
            key={facilidade.id}
            className="card mb-3 bg-transparent text-light d-flex justify-content-md-center align-items-lg-center p-lg-0 mx-lg-auto"
          >
            <div className="d-flex align-items-center">
              <div>
                <i
                  className={`${facilidade.icone} verde-limao`}
                  style={{ fontSize: "4.5em" }}
                ></i>
              </div>
              <div className="">
                <div className="card-body">
                  <h5 className="card-title verde-limao fw-bold">
                    {facilidade.titulo}
                  </h5>
                  <p className="card-text">{facilidade.texto}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facilidades;
