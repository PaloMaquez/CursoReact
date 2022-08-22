import React from "react";
import App from "../App";
import "../App.css";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return(
        <div className="NavBar">
            <nav className="navbar navbar-expand-lg bg-transparent">
                <div className="container-fluid  d-lg-flex">
                    <a className="navbar-brand" href="#"> 
                    <img src={require('../assets/MagnasStoreLogo.png')} className="logo" alt="Magnas Store Logo"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="#">Sobre Nosotros</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="#">Contacto</a>
                        </li>
                    </ul>
                    <CartWidget/>
                    </div>
                </div>
            </nav>
        </div>    
    );
}

export default NavBar;
