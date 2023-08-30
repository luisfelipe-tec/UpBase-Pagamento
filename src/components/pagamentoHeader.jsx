import React from "react";
import { FiArrowLeft } from "react-icons/fi"; // Importe o ícone de retorno
import './pagamentoHeader.css'

const PagamentoHeader = () => {
  return (
    <div className="header">
      {/* Ícone de retorno */}
      <div className="back-arrow">
        <FiArrowLeft />
      </div>
      <div className="page-title">Pagamento</div>
    </div>
  );
};

export default PagamentoHeader;
