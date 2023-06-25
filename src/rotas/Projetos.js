import { styled } from "styled-components"
import React from "react"
import videoAnimeSinopse from "../videos/videoAnimeSinopse.mp4"
import videoCraftList from "../videos/videoCraftList.mp4"
const ProjetosContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    a{
        color: yellow;
    }
`
const ListaProjetos = styled.ul`
    display: flex;
    flex-direction: column;
    width: 80%;
    color: #cfb072;
`
const DescricaoProjetos = styled.li`
    align-items: center;
    text-align: center;
    padding: 25px 0;
    border-bottom: 2px solid #cfb072;
    margin-bottom: 25px;
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
                    <p>
                        "Anime Sinopse" é um projeto feito em React.js, onde além de desenvolver minhas habilidades de HTML, CSS e JavaScript, também utilizei uma API simples feita por mim para salvar os animes em um arquivo .JSON. Para mais informações, acesse o <a href="https://github.com/AlissonCDB/anime-sinopse">repositório</a> e leia o README.md, onde contém mais detalhes sobre o projeto.
                    </p>
                    <p>
                        Se você quiser ver melhor o projeto, você pode acessar <a href="https://anime-sinopse.vercel.app/">Anime Sinopse</a>.
                        O projeto está disponível na Vercel, e o código está disponível no meu GitHub.
                    </p>
                </DescricaoProjetos>
                <DescricaoProjetos>
                    <video width="auto" height="360" controls>
                        <source src={videoCraftList} type="video/mp4" />
                        Desculpe, seu navegador não suporta vídeos HTML5.
                    </video>
                    <p>
                        Esse projeto é desenvolvido na linguagem Dart através do framework Flutter, ou seja, é um projeto de um aplicativo mobile. Seu objetivo é ser uma lista de itens com informações dinâmicas, onde a atualização de um elemento específico no aplicativo resultaria na atualização dos materiais utilizados no item.</p>
                    <p>
                        Porém, esse projeto ainda está bem no início, e atualmente seu desenvolvimento está parado, e seu código está privado no meu GitHub. No entanto, caso queira avaliar o código para conhecer minhas habilidades em desenvolvimento mobile, pode entrar em contato comigo que disponibilizarei o código para visualização.
                    </p>
                </DescricaoProjetos>
            </ListaProjetos>
        </ProjetosContainer>
    )
}