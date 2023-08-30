import React from "react";
import PagamentoHeader from "./pagamentoHeader";
import Nav from "./nav";
import "./pagamento.css";

const Pagamento = () => {
  return (
    <div className="pagamento-page">
      <PagamentoHeader />

      <p className="paragrafo-conteudo">
        Insira os dados para concluir a contratação via cartão de crédito.
      </p>
      <div className="form-container">
        <input type="text" placeholder="Número do cartão" />
        <input type="text" placeholder="Nome do titular" />
        <input type="text" placeholder="CPF do titular" />
        <input type="text" placeholder="Validade" />
        <input type="text" placeholder="Código de segurança" />
        <button className="submit-button">Pagar</button>

        <a className="back-button" href="#">
          {" "}
          Voltar{" "}
        </a>
      </div>
      <Nav />
    </div>
  );
};

export default Pagamento;
