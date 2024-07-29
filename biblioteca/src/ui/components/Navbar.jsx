import { NavLink } from "react-router-dom"
import "./Navbar.css"

export const Navbar = ({ username }) => {
  return (
      <header className="menu-main">
          <p className="title title-general">TuBibliotecaOnline</p>
          <nav>
              <ul className="list">
                  <NavLink to={"/inventario"}>Inventario</NavLink>
                  <NavLink to={"/reportes"}>Reportes</NavLink>
                  <li className="item-user">
                    <p>{ username }</p>
                    <i className="fas fa-user-circle"></i>
                  </li>
              </ul>
          </nav>
    </header>
)
}
