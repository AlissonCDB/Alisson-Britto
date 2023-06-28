import { styled } from "styled-components"

const HomeContainer = styled.div`
    p{
        margin: 0;
        padding: 0 ;
    }
    @media screen and (min-width: 720px){
        p{
            padding: 5px 10%;
        }
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
`

export const Home = () => {
    return (
        <HomeContainer>
            <InformacoesContainer>
                <h3>Um pouco sobre minha experiência profissional:</h3>
                <Informacoes>
                    <p>Atualmente, estou trabalhando como freelancer, mas estou procurando emprego na área de programação. Para mais informações sobre minhas habilidades, acesse a aba "Skills" e "Projetos" ou meu GitHub e Linkedin.</p>
                </Informacoes>
                <Informacoes>
                    <p>Outras experiências que já tive foram desempenhar a função de auxiliar administrativo de 2018 a 2019, e mais recentemente, na última empresa em que trabalhei, também atuei na área de auxiliar administrativo.</p>
                </Informacoes>

            </InformacoesContainer>
        </HomeContainer>
    )
}