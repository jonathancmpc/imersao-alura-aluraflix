import React from 'react';

import './styles.css';
import { Button } from '../../components/Button';
import Logo from '../../assets/logo.png';


function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="logo JKFlix"/>
      </a>

      <Button as="a" className="Button" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;