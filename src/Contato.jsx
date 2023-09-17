import {  } from 'react';

function Contato() {


    return (
        <>
            <div className='contato'>
                <h1 className='contato-titulo'>Como podemos ajuda-lo?</h1>
                <form className='contato-dados'>
                    <p className='contato-texto'>Caso possua alguma dúvida sobre nossa forma de trabalho, sistema ou aplicativo. Nos envie uma mensagem!</p>
                    <div className='contato-info'>
                        <input class="form-control contato-form" type="text" placeholder="Digite seu nome." id='nome-cliente'></input>
                        <input class="form-control contato-form" type="email" placeholder="Digite seu email." id='nome'></input>
                    </div>
                    <textarea class="form-control contato-mensagem" id="exampleFormControlTextarea1" rows="3" placeholder='Digite a sua mensagem.'></textarea>
                    <button type="submit" class="btn contato-button" onClick={() => { alert('Obrigado pelo contato! Logo logo entraremos em contato pelo email fornecido.') }}>Enviar</button>
                </form>
            </div>
        </>
    )
}

export default Contato