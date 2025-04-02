const BotaoCarrinho = ({ quantidadeProdutos }) => {
  return (
    <button
      className="d-flex bg-transparent border-0 ps-3"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#carrinhoSuspenso"
      aria-controls="carrinhoSuspenso"
    >
      <img src="/cart.svg" alt="meu carrinho" />
      {quantidadeProdutos !== 0 && (
        <span className="badge verde-limao">{quantidadeProdutos}</span>
      )}
    </button>
  );
};

export default BotaoCarrinho;
