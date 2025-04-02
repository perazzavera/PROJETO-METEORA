import CarrosselControl from "./CarrosselControl";
import CarrosselIndicadores from "./CarrosselIndicadores";
import CarrosselItem from "./CarrosselItem";

const Carrossel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <CarrosselIndicadores />
      <div className="carousel-inner">
        <CarrosselItem />
      </div>
      <CarrosselControl />
    </div>
  );
};

export default Carrossel;
