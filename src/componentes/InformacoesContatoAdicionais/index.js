
import githubIcone from '../../imagens/GitHub-icone-30.png'
import localizacaoIcone from '../../imagens/Localizacao-icone-30.png'
import LinkedinIcone from '../../imagens/Linkedin-icone-30.png'
import { styled } from 'styled-components'

let tamanho = 100/3;

const InformacoesContatoAdicionaisContainer = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    color: #cfb072;
    background-color: black;
    text-align: center;
    padding: 16px 0;
`
const LocalizacaoGitHubLinkedin = styled.li`
    width: ${tamanho}%;
    p{
        margin: 0;
    }
    a:link, a:visited, a:active {
        text-decoration: none;
        color: #cfb072;
    }
    a:hover {
        color: white;
    }
`

export const InformacoesContatoAdicionais = () => {
    return (
        <InformacoesContatoAdicionaisContainer>
            <LocalizacaoGitHubLinkedin>

                <img src={localizacaoIcone} />
                <p>Rio Bonito do Iguaçu - PR</p>
                <p>Indaiatuba - SP</p>

            </LocalizacaoGitHubLinkedin>
            <LocalizacaoGitHubLinkedin>

                <a href='https://github.com/AlissonCDB'>
                    <img src={githubIcone} />
                    <p>AlissonCDB</p>
                </a>

            </LocalizacaoGitHubLinkedin>
            <LocalizacaoGitHubLinkedin>

                <a href='https://www.linkedin.com/in/alisson-cunha-de-britto-715a52270/'>
                    <img src={LinkedinIcone} />
                    <p>Alisson Cunha de Britto</p>
                </a>

            </LocalizacaoGitHubLinkedin>
        </InformacoesContatoAdicionaisContainer>
    )
}