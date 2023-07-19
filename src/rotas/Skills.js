import { styled } from "styled-components"

const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 35px;
    padding: 25px 25px 5px 25px;
    border-radius: 50px;
    background-color: #0c0c0c;
`
const Topicos = styled.li`
    text-align: center;
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 25px;
    width: 80%;
`

export const Skills = () => {
    return (
        <SkillsContainer>
            <h3>Conhecimentos Técnicos:</h3>
            <Topicos>
                CSS e HTML para criar interfaces elegantes e intuitivas;
            </Topicos>
            <Topicos>
                React.js para desenvolver aplicações front-end dinâmicas e responsivas;
            </Topicos>
            <Topicos>
                Node.js e Express para construir servidores robustos e escaláveis;
            </Topicos>
            <Topicos>
                MongoDB para armazenar e gerenciar dados de forma eficiente;
            </Topicos>
            <Topicos>
                API REST para criar integrações eficazes com serviços externos;
            </Topicos>
            <Topicos>
                Conhecimentos básicos em Dart e Flutter para desenvolvimento mobile;
            </Topicos>
            <Topicos>
                Noções básicas de MySQL para entender diferentes sistemas de gerenciamento de banco de dados.
            </Topicos>
        </SkillsContainer>
    )
}