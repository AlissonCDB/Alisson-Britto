import { styled } from "styled-components"

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 70vh;
    p{
        margin: 0;
        padding: 0 ;
    }
    @media screen and (min-width: 720px){
        min-height: 55vh;
        p{
            padding: 5px 10%;
        }
    }
    @media screen and (min-width: 1080px){
        min-height: 62vh;
    }
`
const InformacoesContainer = styled.ul`
    text-align: center;
    margin: 35px;
    padding: 15px;
    background-color: #0c0c0c;
    border-radius: 50px;

    @media screen and (min-width: 720px){
        margin: 35px 20%;
    }
`
const Informacoes = styled.li`
    margin-bottom: 15px;
    h4{
        margin: 0;
    }
`

export const Home = () => {
    return (
        <HomeContainer>
            <InformacoesContainer>
                <h3>Um pouco sobre mim</h3>
                <Informacoes>
                    Sou um entusiasta de programação com habilidades em CSS, HTML, React.js, Node.js, Express e MongoDB, e uma paixão por aprender e crescer na área de desenvolvimento de software. Meu objetivo é me tornar um desenvolvedor Full Stack altamente capacitado e contribuir para projetos inovadores.
                </Informacoes>
                <Informacoes>
                    Sou um profissional curioso e atento às últimas tendências e atualizações na minha área de atuação. Acredito que a evolução constante é essencial para enfrentar os desafios tecnológicos de hoje. Estou sempre em busca de novas ferramentas e tecnologias que possam agregar valor aos projetos em que estou envolvido.
                </Informacoes>
                <Informacoes>
                    Estou animado para fazer parte de uma equipe inovadora, onde possa contribuir com minhas habilidades técnicas, criatividade e paixão pela programação. Se você procura um desenvolvedor comprometido em expandir suas habilidades e entregar soluções de alta qualidade, estou pronto para enfrentar novos desafios e crescer junto com a empresa.
                </Informacoes>
                <Informacoes>
                    Vamos juntos construir um futuro tecnológico emocionante!
                </Informacoes>
                <Informacoes>
                    <h4>Experiência:</h4>
                    Apesar de não possuir experiência profissional na área, tenho dedicado meu tempo ao aprofundamento dos meus conhecimentos em desenvolvimento web e tenho trabalhado em projetos pessoais para aprimorar minhas habilidades técnicas.
                </Informacoes>

            </InformacoesContainer>
        </HomeContainer>
    )
}