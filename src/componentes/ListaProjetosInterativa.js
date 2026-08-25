'use client';
import { useState } from 'react';
import { styled } from 'styled-components';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
`;

const FiltrosContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
    margin-bottom: 25px;
    width: 100%;
    
`;

const BotaoFiltro = styled.button`
    background-color: ${props => props.$ativo ? '#cfb072' : 'transparent'};
    color: ${props => props.$ativo ? '#000' : '#cfb072'};
    border: 2px solid #cfb072;
    padding: 6px 12px;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
    font-size: 13px;
    transition: all 0.2s ease;

    &:hover {
        background-color: #cfb072;
        color: #000;
    }
`;

const ProjetoCard = styled.div`
    width: 100%;
    max-width: 800px;
    background-color: #0c0c0c;
    border: 2px solid #cfb072;
    border-radius: 12px;
    padding: 16px;
    margin-bottom: 24px;
    box-shadow: 0px 6px 15px rgba(207, 176, 72, 0.15);
    text-align: left;
    color: #cfb072;
    box-sizing: border-box;

    @media screen and (min-width: 600px) {
        padding: 25px;
        margin-bottom: 30px;
    }
`;

const CabecalhoCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-bottom: 1px solid rgba(207, 176, 72, 0.3);
    padding-bottom: 12px;
    margin-bottom: ${props => props.$minimizado ? '0' : '16px'};
    gap: 12px;

    @media screen and (min-width: 600px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 15px;
        margin-bottom: ${props => props.$minimizado ? '0' : '20px'};
    }
`;

const InfoProjeto = styled.div`
    width: 100%;

    h3 {
        font-size: 16px;
        font-weight: bold;
        color: #fff;
        margin: 0;
        word-break: break-all;

        @media screen and (min-width: 600px) {
            font-size: 18px;
        }
    }
`;

const AcoesContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    justify-content: flex-start;

    @media screen and (min-width: 600px) {
        width: auto;
        min-width: 300px;
        justify-content: flex-end;
    }
`;

const LinkGithub = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    background-color: #1a1a1a;
    border: 1px solid #cfb072;
    color: #cfb072;
    padding: 6px 10px;
    border-radius: 6px;
    text-decoration: none;
    font-size: 12px;
    font-weight: bold;
    flex: 1;
    transition: all 0.2s ease;

    &:hover {
        background-color: #cfb072;
        color: #000;
    }

    img {
        width: 15px;
        height: 15px;
    }

    @media screen and (min-width: 600px) {
        flex: initial;
        font-size: 13px;
        padding: 6px 12px;

        img {
            width: 16px;
            height: 16px;
        }
    }
`;

const BotaoMinimizar = styled.button`
    background: transparent;
    border: 1px solid #cfb072;
    color: #cfb072;
    padding: 6px 10px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 12px;
    font-weight: bold;
    flex: 1;
    transition: all 0.2s ease;

    &:hover {
        background-color: #cfb072;
        color: #000;
    }

    @media screen and (min-width: 600px) {
        flex: initial;
        font-size: 13px;
        padding: 6px 12px;
    }
`;

const TagsContainer = styled.div`
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    margin-top: 8px;
`;

const Tag = styled.span`
    font-size: 10px;
    background-color: rgba(207, 176, 72, 0.15);
    color: #cfb072;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: monospace;

    @media screen and (min-width: 600px) {
        font-size: 11px;
        padding: 3px 8px;
    }
`;

const ConteudoMarkdown = styled.div`
    display: ${props => props.$minimizado ? 'none' : 'block'};
    line-height: 1.6;
    width: 100%;
    overflow-x: hidden;
    word-break: break-word;
    overflow-wrap: break-word;

    h1, h2, h3 {
        color: #fff;
        border-bottom: 1px solid rgba(207, 176, 72, 0.3);
        padding-bottom: 6px;
        margin-top: 16px;
        margin-bottom: 12px;
        word-break: break-word;
    }

    h1 { font-size: 20px; }
    h2 { font-size: 17px; }
    h3 { font-size: 15px; }

    p {
        margin-bottom: 14px;
        max-width: 100%;
        font-size: 14px;
    }

    a {
        color: yellow;
        text-decoration: underline;
        word-break: break-all;
    }

    pre, code {
        max-width: 100%;
        overflow-x: auto;
        white-space: pre-wrap;
        word-wrap: break-word;
        font-size: 12px;
    }

    img, video {
        max-width: 100%;
        height: auto;
        display: block;
        margin: 15px auto;
        border-radius: 6px;
    }
`;

export default function ListaProjetosInterativa({ projetosComDados }) {
    const [filtroAtivo, setFiltroAtivo] = useState('TODOS');
    
    const [minimizados, setMinimizados] = useState(() => {
        const estadoInicial = {};
        projetosComDados.forEach(p => {
            estadoInicial[p.repo] = true;
        });
        return estadoInicial;
    });

    const todasAsTecnologias = ['TODOS', ...new Set(projetosComDados.flatMap(p => p.tecnologias))];

    const toggleMinimizar = (repo) => {
        setMinimizados(prev => ({ ...prev, [repo]: !prev[repo] }));
    };

    const projetosFiltrados = filtroAtivo === 'TODOS'
        ? projetosComDados
        : projetosComDados.filter(p => p.tecnologias.includes(filtroAtivo));

    return (
        <Container>
            <FiltrosContainer>
                {todasAsTecnologias.map(tech => (
                    <BotaoFiltro
                        key={tech}
                        $ativo={filtroAtivo === tech}
                        onClick={() => setFiltroAtivo(tech)}
                    >
                        {tech}
                    </BotaoFiltro>
                ))}
            </FiltrosContainer>

            <ul className="flex flex-col w-full items-center p-0 m-0">
                {projetosFiltrados.map((projeto) => {
                    const estaMinimizado = minimizados[projeto.repo] || false;
                    const urlRepositorio = `https://github.com/AlissonCDB/${projeto.repo}`;

                    return (
                        <li key={projeto.repo} className="flex flex-col items-center w-full list-none">
                            <ProjetoCard>
                                <CabecalhoCard $minimizado={estaMinimizado}>
                                    <InfoProjeto>
                                        <h3>{projeto.repo}</h3>
                                        <TagsContainer>
                                            {projeto.tecnologias.map(t => <Tag key={t}>{t}</Tag>)}
                                        </TagsContainer>
                                    </InfoProjeto>

                                    <AcoesContainer>
                                        <LinkGithub 
                                            href={urlRepositorio} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            title="Abrir repositório no GitHub"
                                        >
                                            <img src="/imagens/GitHub-icone-30.png" alt="GitHub" />
                                            <span>Repositório</span>
                                        </LinkGithub>

                                        <BotaoMinimizar onClick={() => toggleMinimizar(projeto.repo)}>
                                            {estaMinimizado ? 'Expandir [+]' : 'Minimizar [-]'}
                                        </BotaoMinimizar>
                                    </AcoesContainer>
                                </CabecalhoCard>

                                <ConteudoMarkdown $minimizado={estaMinimizado}>
                                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                        {projeto.conteudoMarkdown}
                                    </ReactMarkdown>
                                </ConteudoMarkdown>
                            </ProjetoCard>
                        </li>
                    );
                })}
            </ul>
        </Container>
    );
}