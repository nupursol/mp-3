import styled from 'styled-components';

const SkillsBox = styled.div`
    display: flex;
    margin: 8vh 8vw;
    flex-direction: column;
    background-color: peachpuff;
    padding: 2vh 2vw 1vh 2vw;
    border: 1px solid #4d2600;
    justify-content: center;
    text-align: left;
    @media (max-width: 900px) {
        height: 100%;
        margin: 4vh auto;
        padding: 2vh 20% 20% 20%;
        justify-content: center;
        max-width: 80%;
    }
`
const SkillsTitle = styled.h3`
    margin: 2vw 0;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: calc(2px + 2vw);
    color: #4d2600;
    @media (max-width: 900px) {
        max-height: 100%;
        margin: auto;
    }
`
const MainContainer = styled.div`
    margin: 2vw 0;
    @media (max-width: 900px) {
        margin: 10% auto;
        max-width: 100%;
        font-size: calc(2px + 1.5vw);
    }
`
const SectionTitle = styled.h3`
    text-decoration: underline;
    margin: 3vh;
    color: #4d2600;
    font-family: Ariel;
`
const SectionList = styled.ul` {/*trying to make my skills look like buttons*/}
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap; {/*wrapping them around each other so all not in one line or column*/}
    margin: 3vh 0;
`
const Points = styled.li` {/*flexing display and aligning and assigning colours*/}
    background-color: #4d2600;
    color: snow;
    padding: 1vw;
    margin: 0;
    border-radius: 3px;
    text-align: center;
    width: 80%;
    max-width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Ariel;
    @media (max-width: 900px) {
        font-size: calc(2px + 1.5vw);
    }
`

export default function Skills() {
    return (
        <SkillsBox>
            <SkillsTitle>Skills</SkillsTitle>
            <MainContainer>
                <SectionTitle>Coding Languages:</SectionTitle>
                <SectionList>
                    <Points>Python</Points>
                    <Points>Java</Points>
                    <Points>C++</Points>
                    <Points>Assembly</Points>
                    <Points>HTML</Points>
                    <Points>CSS</Points>
                    <Points>JavaScript</Points>
                </SectionList>

                <SectionTitle>Languages:</SectionTitle>
                <SectionList>
                    <Points>English</Points>
                    <Points>Hindi</Points>
                    <Points>French</Points>
                </SectionList>

                <SectionTitle>Interests:</SectionTitle>
                <SectionList>
                    <Points>Formula 1</Points>
                    <Points>Stand-up Comedy</Points>
                    <Points>Tennis</Points>
                    <Points>Travel</Points>
                    <Points>Baking</Points>
                </SectionList>
            </MainContainer>
        </SkillsBox>
    );
}