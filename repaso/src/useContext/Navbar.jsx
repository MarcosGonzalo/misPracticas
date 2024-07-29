import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
        <ul className="navbar-nav">
                  
            <NavLink className={( { isActive } ) => {
                      console.log(isActive)          
                      return `nav-link ${ isActive ? "active" : "" }`
                  }} to={"/"}>Home</NavLink> 
                  
            <NavLink className={( { isActive } ) => {
                console.log(isActive)          
                return `nav-link ${ isActive ? "active" : "" }`
            }} to={"/about"}>About</NavLink> 
            
            <NavLink className={( { isActive } ) => {
                console.log(isActive)          
                return `nav-link ${ isActive ? "active" : "" }`
            }} to={"/login"}>Login</NavLink> 


      </ul>
  </div>
</nav>
)
}
