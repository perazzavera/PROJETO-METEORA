const Toast = () => {
  return (
    // No seu componente principal (App.js ou layout principal)
    <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
      <div
        id="liveToast"
        className="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header botao-lilas text-white">
          <strong className="me-auto">Sucesso!</strong>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div className="toast-body">
          Produto adicionado ao carrinho com sucesso!
        </div>
      </div>
    </div>
  );
};

export default Toast;
