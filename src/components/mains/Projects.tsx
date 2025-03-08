import styled from "styled-components";
import Calculator from "./Calculator";

const ProjectsContainer = styled.main`
    display: flex;
    flex-direction: column;
    width: 70%;
    align-items: center;
    height: 85vh;
    @media (max-width: 900px) {
        height: 80vh;
        margin: 2vh auto;
        padding: 10%;
        justify-content: center;
        width: 86vw;
    }
`;
const ProjectsBox = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(135deg, #ff9a9e, #fad0c4); {/*found a way to gradient background when looking for colours*/}
    padding: 30px 25px 30px 25px;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); {/*tried new technique to shadow*/}
    text-align: center;
    align-items: center;
    justify-content: center;
    max-width: 400px;
    margin: auto;
    @media (max-width: 900px) {
        padding: 8vh 7vw;
    }
`;
const ProjectsTitle = styled.h3`
    margin: 2vh 4vw;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    font-size: calc(2px + 2vw);
    color: #4d2600;
    @media (max-width: 900px) {
        display: none;
    }
`;
const SubtitleH4 = styled.h4`
    font-family:Ariel;
    margin: 0 0 3vw 0;
    @media (max-width: 900px) {
        font-size: calc(3px + 2vw);
        margin: 2vh 4vw;
    }
`

export default function Projects() {
    return (
        <ProjectsContainer>
            <ProjectsBox>
                <ProjectsTitle>Projects</ProjectsTitle>
                <SubtitleH4>JavaScript Calculator</SubtitleH4>
                <Calculator />
            </ProjectsBox>
        </ProjectsContainer>
    );
}
