import { styled } from 'styled-components'

const FooterContainer = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    margin: 0;
    font-size: 18px;
    font-style: italic;
    font-weight: bolder;
    background-color: #0c0c0c;

    @media screen and (min-width: 720px) {
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
        height: 100px;
        font-size: 24px;
    }
`

export const Footer = () => {
    return (
        <FooterContainer>
            Copyright
        </FooterContainer>
    )
}