import banners from "../../mocks/bannerCarrinho.json";
import useTamanhoTela from "../../hooks/useTamanhoTela";

const BannerCarrinho = () => {
  const tamanhoTela = useTamanhoTela();
  return (
    <section>
      {banners.map((banner) => (
        <img
          key={banner.id}
          className="w-100"
          src={banner.src[tamanhoTela]}
          alt={banner.alt}
        />
      ))}
    </section>
  );
};

export default BannerCarrinho;
