import styled from "styled-components";

const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    width:70%;
    height: auto;
    max-width: 100%;
    justify-content: center;
    min-height: 90vh;
    @media (max-width: 900px) {
        width: 100%;
        height: 100%;
    }
`
const MainBox = styled.div`
    display: flex;
    margin: 8vh 8vw;
    flex-direction: column;
    background-color: peachpuff;
    padding: 2vh 2vw;
    border: 1px solid #4d2600;
    justify-content: center;
    text-align: center;
    align-items: center;
    @media (max-width: 900px) {
        height: 100%;
        margin: 4vh auto;
        padding: 2vh 20% 20% 20%;
        justify-content: center;
        max-width: 80%;
    }
`
const MainImage = styled.img`
    max-width: 100%;
    border: 3px solid #4d2600;
    @media (max-width: 900px) {
        margin: 1vh auto;
        max-height: 100px;
        height: auto;
    }
`
const MainTitle = styled.h3`
    margin: 2vw 0;
    text-align: center;
    font-size: calc(2px + 2vw);
    font-family: 'Poppins', sans-serif;
    color: #4d2600;
`
const MainText = styled.p`
    margin: 2vw 0;
    p {
        font-family: Ariel;
    }
    a {
        text-decoration: underline;
        color: black;
        font-family: Ariel; 
    }
    @media (max-width: 900px) {
        max-width: 100%;
        font-size: calc(1px + 1.5vw);
    }
`

export default function Home() {
    return (
        <MainContainer>
            <MainBox>
                <MainTitle>Home</MainTitle>
                <MainImage src= "/ME.JPG" alt="Nupur Solanki" height={200}/>
                <MainText>
                    <p>
                    Hi! My name is Nupur Solanki, and I am a senior studying Computer Science and Economics
                    with a minor in International Relations at Boston University. I am currently looking for
                    roles in investment banking and quantitative finance with previous experience in both.
                    </p>
                    <p>
                        Welcome to my website and feel free to connect with me on{" "}
                        <a href="https://www.linkedin.com/in/nupurso/" target="_blank">LinkedIn</a>!
                    </p>
                </MainText>
            </MainBox>
        </MainContainer>
    );
}