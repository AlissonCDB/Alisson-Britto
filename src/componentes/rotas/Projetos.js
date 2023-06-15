import { styled } from "styled-components"
import React from "react"
import videoAnimeSinopse from "../Videos/Anime-Sinopse.mp4"
const ProjetosContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
`
const ListaProjetos = styled.ul`
    display: flex;
    flex-direction: column;
    width: 80%;
    padding: 20px 0;
    
    color: #cfb072;
`
const DescricaoProjetos = styled.li`
    align-items: center;
    text-align: center;
`

export const Projetos = () => {
    return (
        <ProjetosContainer>
            <ListaProjetos>
                <DescricaoProjetos>
                    <video width="auto" height="360" controls>
                        <source src={videoAnimeSinopse} type="video/mp4" />
                        Desculpe, seu navegador não suporta vídeos HTML5.
                    </video>
                </DescricaoProjetos>
                <DescricaoProjetos>
                    <p>"Anime Sinopse" é um projeto feito em React.js, onde além de desenvolver 
                        minhas habilidades de HTML, CSS e JavaScript, também estou estudando como
                        adicionar uma API como protótipo de "Banco de Dados" e torná-lo editável sem 
                        precisar alterar o código.
                    </p>
                    <p>Se você quiser ver melhor o projeto, você pode acessar <a href="https://anime-sinopse.vercel.app/">Anime Sinopse</a>. 
                        O projeto está disponível na Vercel, e o código está disponível no meu GitHub.
                    </p>
                </DescricaoProjetos>
            </ListaProjetos>
        </ProjetosContainer>
    )
}