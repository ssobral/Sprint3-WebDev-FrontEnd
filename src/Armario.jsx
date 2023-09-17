import { useState } from 'react';


function Armario() {

    const [Quantidade, setContador] = useState(0);

    const aumentar = () => setContador(Quantidade + 1);
    const diminuir = () => setContador(Quantidade - 1);

    var dataAtual = new Date();
    var dataEspecifica = new Date('2028-07-01');
    var diferencaEmMilissegundos = dataEspecifica - dataAtual;
    var diferencaEmDias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));


    return (
        <>
            <div className='armario'>
                <h1 className='armario-titulo'>Confira o seu armário de alimentos</h1>
                <p className='armario-form-titulo'>Preencha o formulário com os dados do alimento que deseja registrar:</p>
                <form className='armario-form'>
                    <div className='armario-form-info'>
                        <input class="form-control armario-form-nome" type="text" placeholder="Digite o nome do alimento." id='nome'></input>
                        <input class="form-control armario-form-embalagem" type="text" placeholder="Digite a embalagem do alimento." id='embalagem'></input>
                    </div>
                    <div className='armario-form-datas-info'>
                        <p className='armario-form-datas-titulo'>Preencha com a data de valdiade do produto:</p>
                        <div className='armario-form-datas'>
                            <input class="form-control armario-form-datas-data" type="number" placeholder="Dia" id='dia' aria-label="default input example"></input>
                            <input class="form-control armario-form-datas-data" type="number" placeholder="Mês" id='mes' aria-label="default input example"></input>
                            <input class="form-control armario-form-datas-data" type="number" placeholder="Ano" id='ano' aria-label="default input example"></input>
                        </div>
                        <div className='armario-form-quantidade'>
                            <div className='quantidade-dados'>
                                <button onClick={aumentar} className='btn quantidade-button'>Aumentar</button>
                                <p className='quantidade-valor'>{Quantidade}</p>
                                <button onClick={diminuir} className='btn quantidade-button'>Diminuir</button>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn armario-form-button" id='btnSubmit' >Enviar</button>
                </form>
                <div className='armario-table-info'>
                    <p className='armario-table-titulo'>Seus produtos:</p>
                    <table class="table armario-table">
                        <thead>
                            <tr>
                                <th scope="col armario-table-title">Nome do produto</th>
                                <th scope="col armario-table-title">Tipo de embalagem</th>
                                <th scope="col armario-table-title">Quantidade</th>
                                <th scope="col armario-table-title">Dia de vencimento do produto</th>
                                <th scope="col armario-table-title">Tempo útil do produto</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Arroz</td>
                                <td>Plástico</td>
                                <td>2</td>
                                <td>07/28</td>
                                <td>{diferencaEmDias} dias</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Armario