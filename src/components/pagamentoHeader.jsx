import React from "react";
import { FiArrowLeft } from "react-icons/fi"; // Importe o ícone de retorno
import './pagamentoHeader.css'

const PagamentoHeader = () => {
  return (
    <div className="header">
      {/* Ícone de retorno */}
      <a className="back-arrow" href="#">
        <FiArrowLeft />
      </a>
      <div className="page-title">Pagamento</div>
    </div>
  );
};

export default PagamentoHeader;
