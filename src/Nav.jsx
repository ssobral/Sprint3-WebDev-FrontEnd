import {} from 'react';
import { NavLink } from 'react-router-dom';
import LogoBranco from './assets/LogoBranco.png'


function Nav(){
    return(
        <>
            <nav className="navbar navbar-expand-lg  header">
                <div className="container-fluid header">
                    <NavLink to="/" className="navbar-brand cabecalho-titulo"><img src={LogoBranco} width="50" height="40"></img><strong class="cabecalho-titulo-destaque">KIT</strong> ON</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/Armario" className="nav-link">Seu Armário</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Contato" className="nav-link">Contato</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Login" className="nav-link">Login</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav