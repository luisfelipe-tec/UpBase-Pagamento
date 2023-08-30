import "./nav.css";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";

const Nav = () => {
  return (
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
  );
};

export default Nav;
