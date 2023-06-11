import { Link } from "react-router-dom";
import { styled } from "styled-components"

const opcoes = ['HOME', 'PROJETOS', 'SKILLS',];

let tamanho = 100 / opcoes.length;

const OpcoesPaginasContainer = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 20px 0;
`
const Opcoes = styled.li`
    width: ${tamanho}%;
    display: flex;
    justify-content: center;
    p{
        font-size: 16px;
        margin: 0;

        @media screen and (min-width: 720px) {
            font-size: 18px;
        }
    }
    a:link, a:visited, a:active, a:hover {
        text-decoration: none;
        color: #cfb072;
    }
`


export const OpcoesPaginas = () => {
    return (
        <OpcoesPaginasContainer>
            {opcoes.map((opcao) => (
                <Opcoes>
                    <Link to={`/${opcao.toLowerCase()}`}>
                        <p>{opcao}</p>
                    </Link>
                </Opcoes>
            ))}
        </OpcoesPaginasContainer>
    )
}