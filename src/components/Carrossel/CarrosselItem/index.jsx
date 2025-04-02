import banners from "../../../mocks/carrossel.json";
import useTamanhoTela from "../../../hooks/useTamanhoTela";

const CarrosselItem = () => {
  const tamanhoTela = useTamanhoTela();
  return (
    <>
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`carousel-item ${index === 0 ? "active" : ""}`}
        >
          <img
            src={banner.src[tamanhoTela]}
            className="d-block w-100"
            alt={banner.alt}
          />
          <div className="carousel-caption">
            <h5 className="fs-1 fw-normal">{banner.titulo}</h5>
            <p className="fs-6">{banner.subtitulo}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CarrosselItem;
