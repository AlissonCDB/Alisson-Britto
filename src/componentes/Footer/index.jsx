import { styled } from 'styled-components'

const FooterContainer = styled.p`
    text-align: center;

    width: 100%;
    padding: 15px 0;
    margin: 0;
    font-style: italic;
    font-weight: bold;
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
        font-size: 16px;
    }
    p{
        font-size: 12px;
    }

    @media screen and (min-width: 720px){
        h1{
            font-size: 22px;
        }
        p{
            font-size: 14px;
        }
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