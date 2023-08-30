import React from "react";
import PagamentoHeader from "./pagamentoHeader";
import './pagamento.css'
import { AiFillHome } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";

const Pagamento = () => {
  return (
    
      <div className="pagamento-page">
        <PagamentoHeader />

        <p className="paragrafo-conteudo">Insira os dados para concluir a contratação via cartão de crédito.</p>
        <div className="form-container">
          <input type="text" placeholder="Número do cartão" />
          <input type="text" placeholder="Nome do titular" />
          <input type="text" placeholder="CPF do titular" />
          <input type="text" placeholder="Validade" />
          <input type="text" placeholder="Código de segurança" />
          <button className="submit-button">Pagar</button>
        
          <a className="back-button" href="#"> Voltar </a>
        </div>

        <nav className="navigation-menu">
          <a href="#">
            <AiFillHome size={19} />
            <span>Home</span>
          </a>
          <a href="#">
            <BiTask size={19} />
            <span>Plantões</span>
          </a>
          <a href="#">
            <AiOutlineHeart size={19} />
            <span>Favoritos</span>
          </a>
          <a href="#">
            <IoPersonOutline size={19} />
            <span>Minha Conta</span>
          </a>
        </nav>
      </div>
    
      
  )
}

export default Pagamento;
