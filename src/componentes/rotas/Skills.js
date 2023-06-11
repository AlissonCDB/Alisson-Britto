import { styled } from "styled-components"

const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 35px;
    padding: 25px 25px 5px 25px;
    border-radius: 50px;
    background-color: #0c0c0c;

    @media screen and (min-width: 920px) {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    p{
        margin: 0;
    }
    h4{
        margin: 15px 0 35px 0;
    }
    h5 {
        margin: 0;
        margin-bottom: 10px;
    }
`
const Categorias = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
const Topicos = styled.li`
    text-align: center;
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 25px;
    width: 234px;
`

export const Skills = () => {
    return (
        <SkillsContainer>
            <Categorias>
                <h4> Conhecimento Geral </h4>
                <Topicos>
                    <h5> HTML 5 </h5>
                    <p>Conhecimento - Intermediário</p>
                </Topicos>
                <Topicos>
                    <h5> CSS </h5>
                    <p>Conhecimento - Intermediário</p>
                </Topicos>
                <Topicos>
                    <h5> React.js </h5>
                    <p>Conhecimento - Intermediário</p>
                </Topicos>
                <Topicos>
                    <h5> Microsoft SQL Server </h5>
                    <p>Conhecimento - Básico</p>
                </Topicos>
            </Categorias>

            <Categorias>
                <h4> Linguagens de programação </h4>
                <Topicos>
                    <h5> JavaScript </h5>
                    <p> Conhecimento - Intermediário </p>
                </Topicos>
                <Topicos>
                    <h5> Dart </h5>
                    <p>Conhecimento - Básico</p>
                </Topicos>
            </Categorias>

            <Categorias>
                <h4> Frameworks </h4>
                <Topicos>
                    <h5> Flutter </h5>
                    <p>Conhecimento - Básico</p>
                </Topicos>
            </Categorias>
        </SkillsContainer>
    )
}