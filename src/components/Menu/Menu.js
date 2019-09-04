import React from 'react';
import { NavLink } from 'react-router-dom';

import "./Menu.scss";

function Menu(){
  return(
    <div>
    <aside class="menu">
    <p class="menu-label">
      GENERAL
    </p>
    <ul class="menu-list">
    <li><NavLink activeClassName='is-active' to ="/intro">Introducción</NavLink></li>
    <li>
        <NavLink activeClassName="is-active" to ="/install">Instalación</NavLink>
        <ul>
          <li><NavLink activeClassName='is-active' to ="/styles">Agregar SCSS</NavLink></li>
        </ul>
      </li>
      <li><NavLink activeClassName='is-active' to ="/command">Comandos Basicos</NavLink></li>
    </ul>
    <p class="menu-label">
      COMPONENTES
    </p>
    <ul class="menu-list">
    <li><NavLink activeClassName='is-active' to ="/component">Creación de Componentes</NavLink></li>
      <li><NavLink activeClassName='is-active' to ="/import">Importaciones</NavLink></li>
      <li><NavLink activeClassName='is-active' to ="/prop">Comunicación entre componentes (PropTypes)</NavLink></li>
      <li>
      <li><NavLink activeClassName='is-active' to ="/data">Muestra de datos</NavLink></li>
      <li><NavLink activeClassName='is-active' to ="/table">Tablas</NavLink></li>
      <li><NavLink activeClassName='is-active' to ="/form">Formulario</NavLink></li>
        <ul>
          <li><NavLink activeClassName='is-active' to ="/validate">Validaciones</NavLink></li>
          <li><NavLink activeClassName='is-active' to ="/buttons">Botones</NavLink></li>
          <li><NavLink activeClassName='is-active' to ="/input">Input</NavLink></li>
        </ul>
      </li>
      <li><NavLink activeClassName='is-active' to ="/api">Consumo de servicios</NavLink></li>
    </ul>
  </aside>
  </div>
  )
}

export default Menu;