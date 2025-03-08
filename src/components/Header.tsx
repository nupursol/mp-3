import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    padding: 3vh 1vw;
    background-color: #4d2600;
    color: LavenderBlush;
    text-align: left;
    @media (max-width: 900px) {
        font-size: calc(3px + 1.5vw);
        text-align: center;
    }
`;
const StyledH1 = styled.h1`
    font-family: Ariel;
`;
const StyledP = styled.p `
    font-family: Ariel;
`;

export default function Header() {
    return (
        <StyledHeader>
                <StyledH1>Nupur Solanki</StyledH1>
                <StyledP>Online Resume</StyledP>
        </StyledHeader>
    );
}
