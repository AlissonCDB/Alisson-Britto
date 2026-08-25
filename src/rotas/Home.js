'use client';
import { styled } from 'styled-components';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const HomeContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 70vh;
    width: 100%;
    color: #cfb072;
    padding: 20px 0;

    @media screen and (min-width: 720px){
        min-height: 55vh;
    }
    @media screen and (min-width: 1080px){
        min-height: 62vh;
    }
`;

const InformacoesContainer = styled.div`
    width: 90%;
    max-width: 850px;
    background-color: #0c0c0c;
    border: 2px solid #cfb072;
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0px 6px 15px rgba(207, 176, 72, 0.15);
    line-height: 1.6;
    text-align: left;
    overflow-x: hidden;
    word-break: break-word;

    /* Títulos */
    h1, h2, h3 {
        color: #fff;
        border-bottom: 1px solid rgba(207, 176, 72, 0.3);
        padding-bottom: 8px;
        margin-top: 24px;
        margin-bottom: 16px;
    }

    h1 {
        font-size: 24px;
        text-align: center;
    }

    h2 { font-size: 20px; }
    h3 { font-size: 17px; }

    /* Citações em destaque (Blockquotes) */
    blockquote {
        border-left: 4px solid #cfb072;
        background-color: rgba(207, 176, 72, 0.08);
        margin: 20px 0;
        padding: 12px 20px;
        font-style: italic;
        border-radius: 0 8px 8px 0;
        
        p {
            margin: 0;
            color: #fff;
        }
    }

    /* Parágrafos e Listas */
    p {
        margin-bottom: 14px;
    }

    ul, ol {
        padding-left: 20px;
        margin-bottom: 16px;
    }

    li {
        margin-bottom: 8px;
        list-style-type: disc;
    }

    /* Links */
    a {
        color: yellow;
        text-decoration: underline;
        &:hover {
            opacity: 0.8;
        }
    }

    /* Linhas divisórias (---) */
    hr {
        border: none;
        border-top: 1px solid rgba(207, 176, 72, 0.3);
        margin: 25px 0;
    }

    /* Blocos de código e tags inline */
    code {
        background-color: #1a1a1a;
        color: #ff0;
        padding: 2px 6px;
        border-radius: 4px;
        font-family: monospace;
        font-size: 13px;
    }
`;

export const Home = ({ readmeContent }) => {
    return (
        <HomeContainer>
            <InformacoesContainer>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                    {readmeContent}
                </ReactMarkdown>
            </InformacoesContainer>
        </HomeContainer>
    );
};