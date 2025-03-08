import styled from "styled-components";

const ItalicText = styled.h4`
    font-style: italic;
    font-family: Ariel;
`;

const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    width:70%;
    height: auto;
    min-height: 90vh;
    max-width: 100%;
    justify-content: center;
    @media (max-width: 900px) {
        width: 100%;
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
    text-align: left;
    max-width: 100%;
    height: auto;
    min-height: 90vh;
    @media (max-width: 900px) {
        height: 100%;
        margin: 4vh auto;
        padding: 2vh 10% 10% 10%;
        justify-content: center;
        max-width: 80%;
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
    @media (max-width: 900px) {
        margin: 10% auto;
        max-width: 100%;
        font-size: calc(2px + 2vw);
    }
`
const CourseList = styled.ul`
    list-style-type: disc;
    text-align: left;
    width: fit-content;
`;

const CourseItem = styled.li`
    font-family: Ariel;
`;
const SubHeading = styled.h3`
    font-family: Ariel;
    text-decoration: underline;
`;
const StyledH4 = styled.h4`
    font-family: Ariel;
`

export default function Education() {
    return (
        <MainContainer>
            <MainBox>
                <MainTitle>Education</MainTitle>
                <MainText>
                    <SubHeading>Boston University</SubHeading>
                    <ItalicText>Bachelor of Arts in Computer Science and Economics</ItalicText>
                    <ItalicText>Minor in International Relations</ItalicText>
                    <StyledH4>Cumulative GPA: 3.7</StyledH4>
                    <StyledH4>Relevant classes:</StyledH4>
                    <CourseList>
                        <CourseItem>Intro to Computer Science I & II</CourseItem>
                        <CourseItem>Intro to Algorithms</CourseItem>
                        <CourseItem>Computer Systems</CourseItem>
                        <CourseItem>Software Programming</CourseItem>
                        <CourseItem>Combinatoric Structures</CourseItem>
                        <CourseItem>Introductory Microeconomics and Macroeconomics</CourseItem>
                        <CourseItem>Intermediate Microeconomics and Macroeconomics</CourseItem>
                        <CourseItem>Empirical Economics</CourseItem>
                        <CourseItem>International Economics</CourseItem>
                        <CourseItem>Global Money</CourseItem>
                        <CourseItem>Market Structures</CourseItem>
                    </CourseList>
                </MainText>
            </MainBox>
        </MainContainer>
    );
}
