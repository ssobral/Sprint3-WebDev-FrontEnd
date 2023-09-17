import { } from 'react'


function Cadastro() {

    return (
        <>
            <div className='cadastro'>
                <div className='cadastro-card'>
                    <form className='cadastro-card'>
                        <div className='cadastro-enfeite'>
                            <img src='src/assets/Logo.png' className='cadastro-enfeite-img'></img>
                            <p className='cadastro-enfeite-texto'>Sejá bem-vindo a KIT ON!</p>
                        </div>
                        <div className='cadastro-dados'>
                            <div className="mb-3 cadastro-nome">
                                <label for="exampleFormControlInput1" className="form-label cadastro-enfeite-texto">Digite seu nome:</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1 email nome" placeholder="Digite seu nome aqui" required="required"></input>
                            </div>
                            <div className="mb-3 cadastro-nome">
                                <label for="exampleFormControlInput1" className="form-label cadastro-enfeite-texto">Seu número de telefone:</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1 email telefone" placeholder="Digite seu número aqui" required="required"></input>
                            </div>
                        </div>
                        <div className='cadastro-emails'>
                            <div className="mb-3 cadastro-email">
                                <label for="exampleFormControlInput1" className="form-label cadastro-enfeite-texto">Email de usuário:</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1 email email1" placeholder="name@example.com" required="required"></input>
                            </div>
                            <div className="mb-3 cadastro-email">
                                <label for="exampleFormControlInput1" className="form-label cadastro-enfeite-texto" >Confirme seu email:</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1 email email2" placeholder="name@example.com" required="required"></input>
                            </div>
                        </div>
                        <div className='cadastro-senhas'>
                            <div>
                                <label for="inputPassword5" className="form-label cadastro-enfeite-texto">Crie uma senha</label>
                                <input type="password" placeholder='******' id="inputPassword5 senha1" className="form-control" aria-describedby="passwordHelpBlock" required="required"></input>
                            </div>
                            <div>
                                <label for="inputPassword5" className="form-label cadastro-enfeite-texto">Confirme sua senha</label>
                                <input type="password" id="inputPassword5 senha2" className="form-control" placeholder='******' aria-describedby="passwordHelpBlock" required="required"></input>
                            </div>
                        </div>

                        <button type="submit" className="btn cadastro-button"Name>Cadastrar</button>

                    </form>
                </div>
            </div>

        </>
    )
}

export default Cadastro