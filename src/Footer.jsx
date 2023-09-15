import {} from 'react'
import { NavLink } from 'react-router-dom'


function Footer(){
    return(
        <>
        <div class="container text-center footer">
            <div class="row">
                <div class="col coluna">
                <NavLink to="/Armario" className="footer-link">Seu Armário</NavLink>
            </div>
            <div class="col coluna">
                <NavLink to="/Contato" className="footer-link">Nos contate</NavLink>
            </div>
            <div class="col coluna">
                <NavLink to="/Login" className="footer-link">Login/Cadastro</NavLink>
            </div>
            <div class="col coluna">
                <p className='footer-link'>Termos de Uso</p>
            </div>
            </div>
        </div>
        </>
    )
}

export default Footer