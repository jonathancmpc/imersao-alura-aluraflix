import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { Button } from '../../components/Button';
import Logo from '../../assets/logo.png';


function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="logo JKFlix"/>
      </Link>

      <Button as={Link} className="Button" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;