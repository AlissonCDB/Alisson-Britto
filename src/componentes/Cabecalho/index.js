
import './Cabecalho.css'

export const Cabecalho = () => {

    return (
        <div className='banner_box'>
            <nav className='banner_informacoes'>
                <p className='informacoes'>
                    <img id='minha_foto' src='./images/Me.jpeg' alt='Minha foto'></img>
                </p>
                <p className='informacoes' id='meu_nome'>
                    Alisson Cunha de Britto
                </p>
                <p id='contatos'>
                    Email: <br /> alissoncdbritto@gmail.com
                    <br />
                    Telefone: <br /> (42) 9 9920-2232
                </p>
            </nav>
        </div>

    )
}