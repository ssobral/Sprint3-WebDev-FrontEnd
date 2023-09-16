import { } from 'react'

function Login() {

    return (
        <>
            <div className='login'>
                <form className='login-card'>
                    <h1 className='login-card-title'>Login</h1>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email de usuário</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1 email" placeholder="name@example.com"  required="required"></input>
                    </div>
                    <div>
                        <label for="inputPassword5" className="form-label">Password</label>
                        <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock"  required="required"></input>
                    </div>
                    <button type="submit" className="btn login-button">Entrar</button>
                    <p className='texto-login-cadastro'>Se não possue conta, <NavLink to="/Cadastro" className='texto-cadastro-cadastre_se'>Cadastre-se!</NavLink></p>
                </form>

            </div>

        </>
    )
}

export default Login