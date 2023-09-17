import {} from 'react'
import { NavLink } from 'react-router-dom'

function Home(){
    return(
        <>
        <div id="carouselExampleAutoplaying" class="carousel slide banner" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="src/assets/banner1.svg" class="d-block w-100" alt="..."></img>
                </div>
                <div class="carousel-item">
                    <img src="src/assets/banner2.svg" class="d-block w-100" alt="..."></img>
                </div>
                <div class="carousel-item">
                    <img src="src/assets/banner3.svg" class="d-block w-100" alt="..."></img>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <section className="sobre_nos">
            <img src="src/assets/Logo.png" alt="Logo KIT ON" className="sobre_nos-logo"></img>
            <div className="sobre_nos-textos">
                <p className="sobre_nos-textos-titulo">Sobre nós</p>
                <p className="sobre_nos-textos-texto">O projeto KIT ON nasceu da ideia de diminuir a quantidade de lixo nas ruas. E para fazer isso, escolhemos o método de conscientizar as pessoas, porém, não entregando informações massantes e desncessárias para o público, e sim, de maneira interativa. De forma que os usuários teriam um meio de administrar seus alimentos e receber informações sobre o formas de utiliza-lo e a maneira correta de descarta-lo, junto de avisos sobre a importância o descarte de lixo correto.</p>
            </div>
        </section>


        <section className='importancia'>
            <div className='importancia-section'>
                <div className='importancia-section-textos'>
                    <p class="importancia-textos-titulo">Importância</p>
                    <p class="importancia-textos-texto">Descartar o lixo de maneira correta pode trazer diversos benefícios para toda a humanidade. Quando se é separado o lixo de maneira correta, se facilita os meios de tratamento deles e diminuem a chance de ter impactos nocivos para o ambiente.
                    </p>
                </div>
                <img src="src/assets/Enfeite.svg" class="importancia-enfeite" alt="Enfeite visual"></img>
            </div>
            <div className='importancia-section'>
                <img src="src/assets/Enfeite.svg" class="importancia-enfeite2" alt="Enfeite visual"></img>
                <p class="importancia-textos-texto">Alguns dos benefícios do descarte apropriado do lixo seria a diminuição da poluição, diminuição de situações de alagamento, diminuição do gasto com limpezas urbanas, valorização dos pontos turísticos, Descontaminação do lençol freático.</p>
            </div>

        </section>

        <section className="como_trabalhamos">
            <div className="como_trabalhamos-info">
                <p className="como_trabalhamos-titulo">Como trabalhamos</p>
                <p className="como_trabalhamos-texto ">Ao acessar a rede KIT ON, você poderá registrar todos os alimentos presentes na sua casa, sendo necessário junto deles adicionar suas respectivas datas de validade. Após isso, nós separaremos receitas que podem ser cozinhadas utilizando os ingredientes registrados.</p>
                <p className="como_trabalhamos-texto2">E caso a data de validade se aproxime, você receberá a avisos, a forma correta de descarta-lo e a importância disso.</p>
                <p className="como_trabalhamos-texto3">Para aproveitar nossos benefícios, basta entrar na rede KIT ON:</p>
                <div className="como_trabalhamos-botoes">
                    <NavLink className="btn btn-primary como_trabalhamos-button" to="/Login" role="button">Login</NavLink>
                    <NavLink className="btn btn-primary como_trabalhamos-button" to="/Contato" role="button">Duvidas</NavLink>
                </div>
            </div>
            <img src="src/assets/Enfeite-2.svg" alt="Enfeite visual" class="como_trabalhamos-enfeite"></img>
        </section>

        <section className='vantagens'>
            <p className="vantagens-titulo">Vantagens</p>
            <div className="cards">
                <div className="card">
                    <img src="src/assets/imagem-desbrave novas receitas.svg" alt="Imagem-Desbrave novas receitas" className="imagem-card"></img>
                    <p className="card-texto">Desbrave novas receitas</p>
                </div>
                <div className="card">
                    <img src="src/assets/imagem-controle seus ingredientes.svg" alt="Imagem-Controle seus ingredientes" className="imagem-card"></img>
                    <p className="card-texto">Controle seus ingredientes</p>
                </div>
                <div className="card">
                    <img src="src/assets/imagem-ajude a limpar as ruas.svg" alt="Imagem-Ajude a limpar as ruas" className="imagem-card"></img>
                    <p className="card-texto">Ajude a limpar as ruas</p>
                </div>
            </div>
        </section>
        </>
    )
}

export default Home