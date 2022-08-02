import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className='nav'>
      <span class="name">Fida Shnakher<i class="far fa-chess-queen"></i></span>
      <ul className='ul1'>
        <a href="Fida-Sh-Cv-FrontEnd.pdf"><button class="download">Download cv</button></a>
        <li><Link to="/">Home</Link></li>
        <li><Link to="projects">Projects</Link></li>
      </ul>
      </nav>
    </div>
  )
}

export default Navbar;
