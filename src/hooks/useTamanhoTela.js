import { useState, useEffect } from "react";

const useTamanhoTela = () => {
  const [tamanhoTela, setTamanhoTela] = useState("desktop"); // Corrigi para "tamanhoTela" (com h)

  useEffect(() => {
    const handleResize = () => {
      const larguraTela = window.innerWidth;
      if (larguraTela < 576) {
        setTamanhoTela("mobile");
      } else if (larguraTela >= 576 && larguraTela < 992) {
        setTamanhoTela("tablet");
      } else {
        setTamanhoTela("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return tamanhoTela; // Agora retorna o valor corretamente
};

export default useTamanhoTela;
