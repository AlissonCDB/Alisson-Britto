import './InformacoesContato.css'

export const InformacoesContato = () => {
    return (
        <div className='informacoes_container'>

            <div className='informacoes_de_contato_box'>
                <p className='contatos'>
                    <img src='images\icons8-gmail-30.png'></img>
                    <br />
                    alissoncdbritto@gmail.com
                </p>
                <p className='contatos'>
                    <img src='images\icons8-volume-da-campainha-30.png'></img>
                    <br />
                    (42) 9 9920-2232
                </p>
            </div>
            <div className='informacoes_adicionais_box'>
                <p className='informacoes_adicionais'>
                    <img src='images\icons8-pontos-de-interesse-30.png'></img>
                    <br />
                    Rio Bonito do Iguaçu - PR
                    <br />
                    Indaiatuba - SP
                </p>
                <p className='informacoes_adicionais'>
                    <a href='https://github.com/AlissonCDB'>
                        <img src='images\icons8-github-30.png'></img>
                        <br />
                        AlissonCDB
                    </a>
                </p>
                <p className='informacoes_adicionais'>
                    <a href='https://www.linkedin.com/in/alisson-cunha-de-britto-715a52270/'>
                        <img src='images\icons8-linkedin-30.png'></img>
                        <br />
                        Alisson Cunha de Britto
                    </a>
                </p>
            </div>
        </div>
    )
}