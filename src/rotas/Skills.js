'use client';
import { styled } from "styled-components";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const SkillsContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    color: #cfb072;
    padding: 20px;

    .markdown-body {
        width: 80%;
        max-width: 800px;
        line-height: 1.6;
        border-radius: 10px;
        border: 1px solid #cfb072;
        padding: 30px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;

        h1, h2, h3 {
            border-bottom: 1px solid #cfb072;
            padding-bottom: 10px;
            margin-top: 30px;
            width: 100%;
            color: #fff;
            scroll-margin-top: 80px;
        }

        p {
            width: 100%;
            text-align: center;
            margin: 15px 0;
        }

        p:has(img) {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 8px;
            align-items: center;
        }

        a {
            color: yellow;
            text-decoration: none;
            cursor: pointer;
            &:hover {
                text-decoration: underline;
            }
        }

        img {
            max-width: 100%;
            height: 28px;
            margin: 3px; 
            display: inline-block;
        }

        img[src*="capsule-render"], 
        img[src*="github-profile-summary-cards"] {
            height: auto !important;
            width: 100%;
            max-width: 100%;
            display: block;
            margin: 15px auto;
        }
    }
`;

export const Skills = ({ readmeContent }) => {
    const handleAnchorClick = (e) => {
        const href = e.target.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const element = document.getElementById(targetId) || 
                            Array.from(document.querySelectorAll('h2')).find(h => h.textContent.includes('About Me'));
            
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <SkillsContainer>
            <div className="markdown-body" onClick={handleAnchorClick}>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                    {readmeContent}
                </ReactMarkdown>
            </div>
        </SkillsContainer>
    );
};