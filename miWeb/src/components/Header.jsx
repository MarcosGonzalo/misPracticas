import React, { useEffect, useState } from 'react'
import "./Header.css"
import iconMusculo from "../assets/icons/menu/musculo.webp";
import iconAjustes from "../assets/icons/menu/ajustes.webp";
import iconAsesoria from "../assets/icons/menu/asesoria.webp";
import iconCar from "../assets/icons/menu/carrito.webp";
import iconLogin from "../assets/icons/menu/loginDebil.svg";


export const Header = () => {


    return (
      <>
        <header className='header-main'>
              <p className='logotipo'>LP</p> 
              <nav className='header-menu'>
                  <ul>    
                        <nav className='menu-main'>
                            <li>Comunidad</li>
                            <li>Live</li>
                            <li>Planes</li>
                            <li className='header-icon-login' ><img src={iconLogin} alt="" /></li>
                            <li className='header-icon-bar'>	<i class="fas fa-bars"></i></li>
                        </nav>
                        <nav className="menu-aside">
                            <li>
                                <img src={ iconAjustes } />
                                Desarrolla tu Talento
                            </li>
                            <li>
                                <img src={ iconAsesoria } />
                                Asesoria
                            </li>
                            <li>
                                <img src={ iconMusculo } />
                                Proyecto
                            </li>
                            <li>
                                <img src={ iconCar } />
                                Carrito
                            </li>
                            <li >
                                <div className='line'></div>
                            </li>
                      </nav>
                    </ul>
              </nav>
        </header>
      </>
)
}
