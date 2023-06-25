import { Link } from "react-router-dom"
import { styled } from "styled-components"
import React, { useState, useEffect } from "react"

const opcoes = ['HOME', 'PROJETOS', 'SKILLS',];

const OpcoesPaginasContainer = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 20px 0;

    &.fixed{
        width: 100%;
        background-color: black;
        position: fixed;
        top: 0;
        margin: 0;
        height: 61px;
        align-items: center;
        z-index: 99;
        border-bottom: ${props => props.borda || '2px solid #cfb072'};
        box-shadow: ${props => props.sombra || '0px 6px 10px rgba(207, 176, 72, 0.5)'};

        @media screen and (min-width: 720px){
            height: 64px;
        }
    }
`
const Opcoes = styled.li`
    width: ${100 / opcoes.length}%;
    display: flex;
    justify-content: center;
    p{
        font-size: 16px;
        margin: 0;

        @media screen and (min-width: 720px) {
            font-size: 18px;
        }
    }
    a:link, a:visited, a:active {
        text-decoration: none;
        color: #cfb072;
    }
    a:hover {
        color: #FFF;
    }

`
export const OpcoesPaginas = ({ valor }) => {
    const [isFixed, setIsFixed] = useState(false);
    const [borderPosition, setBorderPosition] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const isScreenLarge = window.innerWidth >= 720;
            setIsFixed(scrollTop > (isScreenLarge ? 244 : 120));
            setBorderPosition(scrollTop > (valor ? (isScreenLarge ? 352 : 346) : (isScreenLarge ? 352 : 169)));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [valor]);

    return (
        <OpcoesPaginasContainer
            className={isFixed ? 'fixed' : ''}
            borda={!borderPosition && 'none'}
            sombra={!borderPosition && 'none'}
        >
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