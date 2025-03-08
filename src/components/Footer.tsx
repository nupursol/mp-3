import styled from 'styled-components';

const FooterContainer = styled.div`
    background-color: #4d2600;
    color: lavenderblush;
    padding: 1vh 1vw;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    p {
        font-family: Ariel;
    }
    @media (max-width: 900px) {
        font-size: calc(2px + 1.5vw);
    }
`
const FootA = styled.a`
    font-family:Ariel
`

export default function Footer() {
    return (
        <FooterContainer>
            <p>All Rights Reserved by Nupur Solanki <FootA href="/credits">Credits</FootA> &copy;</p>
        </FooterContainer>
    );
}