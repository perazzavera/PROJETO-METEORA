const Cadastro = () => {
  return (
    <section className="container py-5 px-4">
      <form className="border border-secondary p-3">
        <h2 className="text-center fs-6 fs-lg-1 fw-normal pb-3">
          Quer receber nossas novidades, promoçoes exclusivas e 10% OFF na
          primeira compra? Cadastre-se!
        </h2>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control border-secondary rounded-0"
            placeholder="Digite seu email"
            aria-label="Digite seu email"
            aria-describedby="button-addon2"
          />
          <button
            className="btn rounded-0 botao-lilas text-light"
            type="button"
            id="button-addon2"
          >
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
};

export default Cadastro;
