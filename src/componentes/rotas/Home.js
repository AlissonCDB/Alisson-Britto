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
                    <p>Atuei na função de auxiliar administrativo de 2018 a 2019.</p>
                </Informacoes>
                <Informacoes>
                    <p>
                        Na última empresa que trabalhei, desempenhei a função de repositor durante 10
                        meses até ser promovido a auxiliar administrativo, exercendo o cargo pelo período
                        de 3 meses até me afastar da empresa por motivos pessoais.
                    </p>
                </Informacoes>
                <Informacoes>
                    <p>Atualmente estou estudando programação.</p>
                </Informacoes>
            </InformacoesContainer>

            <InformacoesContainer>
                <Informacoes>
                    <p>Cargo:</p>
                    <p>Auxiliar Administrativo</p>
                </Informacoes>
                <Informacoes>
                    <p>Empresa:</p>
                    <p>Associação Comercial e Empresarial de Rio Bonito do Iguaçu</p>
                </Informacoes>
                <Informacoes>
                    <p>Período:</p>
                    <p>Maio de 2018 - Fevereiro de 2019</p>
                </Informacoes>
            </InformacoesContainer>

            <InformacoesContainer>
                <Informacoes>
                    <p>Cargo:</p>
                    <p>Repositor e Auxiliar Administrativo</p>
                </Informacoes>
                <Informacoes>
                    <p>Empresa:</p>
                    <p>
                        R. V. Voznei & CIA LTDA /
                        Michellen Viau Voznei & CIA LTDA
                    </p>
                </Informacoes>
                <Informacoes>
                    <p>Período:</p>
                    <p>Fevereiro de 2022 - Março de 2023</p>
                </Informacoes>
            </InformacoesContainer>
        </HomeContainer>
    )
}