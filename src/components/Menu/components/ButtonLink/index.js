
    /*props seria um objeto e trás pra gnt várias coisas que vamos
    pegar do nosso componente(que ta em menu*/
    /* props => {className: "o que alguém passar", href:"/"*/
    
//exportar pra conseguir ver isso em outros lugares
import React from 'react';

function ButtonLink(props) {
  // props => { className: "o que alguém passar", href: "/" }
  return (
    <a href={props.href} className={props.className}>
      {props.children}
    </a>
  );
}

export default ButtonLink;