import { } from 'react'

function Login() {

    return (

        <>
            <div className='login'>
                <form className='login-card'>
                    <h1 className='login-card-title'>Login</h1>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email de usuário</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1 email" placeholder="name@example.com" required="required"></input>
                    </div>
                    <div>
                        <label for="inputPassword5" class="form-label">Password</label>
                        <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" required="required"></input>
                    </div>
                    <button type="submit" class="btn login-button" onClick={() => { verificacao() }}>Entrar</button>
                    <p className='texto-cadastro'>Se não possue conta <strong className='texto-cadastro-cadastre_se'>Cadastre-se!</strong></p>
                </form>
            </div>
        </>

    )
}

export default Login