import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import ButtonLink from './components/ButtonLink';
// ./ porque tá na mesma pasta
//componente vai ser uma função que retorna o JSX
function Menu(){
    return (//className porque no JS class é palavra reservada
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt="WhatFlix Logo"/>
            </a>
            <ButtonLink className="ButtonLink" href="/">
                Novo vídeo
            </ButtonLink>
        </nav>
    );
}
//exportar pra conseguir ver isso em outros lugares
export default Menu;