import { styled } from 'styled-components'

const FooterContainer = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    padding: 15px 0;
    margin: 0;
    font-style: italic;
    font-weight: bolder;
    background-color: #0c0c0c;

    a{
        text-decoration: none;
        color: inherit;
    }
    h1, p{
        margin: 0;
        padding: 0;
    }
    h1{
        font-size: 24px;
    }
    p{
        font-size: 16px;
    }
`

export const Footer = () => {
    return (
        <FooterContainer>
            <h1>Copyright</h1>
            <p>Desenvolvido por <a href='https://www.instagram.com/alissoncdeb/'>@Alisson Britto</a></p>
        </FooterContainer>
    )
}