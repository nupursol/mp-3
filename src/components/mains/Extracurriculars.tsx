import styled from "styled-components";

const ExtracurricularBox = styled.div`
    display: flex;
    margin: 8vh 4vw;
    width: 60.6%;
    flex-direction: column;
    background-color: peachpuff;
    padding: 2vh 2vw;
    border: 1px solid #4d2600;
    justify-content: center;
    text-align: left;
    @media (max-width: 900px) {
        height: 100%;
        margin: 4vh auto;
        padding: 10%;
        justify-content: center;
        width: 68vw;
    }
`
const ExtracurricularTitle = styled.h3`
    margin: 2vw 0;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    font-size: calc(2px + 2vw);
    color: #4d2600;
    @media (max-width: 900px) {
        max-height: 100%;
        margin: 0;
    }
`
const MainText = styled.div`
    margin: 1vw 0;
    @media (max-width: 900px) {
        margin: 0;
        max-width: 100%;
        font-size: calc(2px + 1.5vw);
    }
`

const Activity = styled.div`
    padding: 5vh 5vw;
`

const SectionTitle = styled.h3`
    color: #4d2600;
    font-size: calc(2px + 1.5vw);
    text-decoration: underline;
    font-family: Ariel;
    @media (max-width: 900px) {
        font-size: calc(3px + 1.5vw);
    }
`
const SubH4 = styled.h4`
font-family: Ariel;`

const StyledLi = styled.li`
    font-family: Ariel;`

export default function ExtracurricularExperience() {
    return (
        <ExtracurricularBox>
            <ExtracurricularTitle>Extracurricular Experience</ExtracurricularTitle>
            <MainText>
                <Activity>
                    <SectionTitle>JP Morgan Chase and Co.</SectionTitle>
                    <SubH4>CareerEd.You Program Participant (September 2022 - November 2022)</SubH4>
                    <ul>
                        <StyledLi>
                            Participated and attended 5+ weekly sessions as part of a selective virtual program for sophomores to learn about
                            the firm’s culture and gain direct insights into their divisions and coverage groups with a specific concentration
                            in their Corporate and Investment Bank (CIB)
                        </StyledLi>
                    </ul>
                </Activity>

                <Activity>
                    <SectionTitle>Boston University Financial Modelling Club</SectionTitle>
                    <SubH4>Editor of Newsletter and Tutor (March 2023 - Present)</SubH4>
                    <ul>
                        <StyledLi>Assisted students with key modeling concepts through examples including basic accounting, comparables analysis, DCF and LBO</StyledLi>
                        <StyledLi>Gained financial modeling and excel knowledge via weekly sessions directed by upperclassmen with industry experience</StyledLi>
                    </ul>
                </Activity>

                <Activity>
                    <SectionTitle>Boston University Finance and Investment Club</SectionTitle>
                    <SubH4>Junior Analyst in Healthcare Sector and Investment Banking Sophomore Cohort (November 2022 - Present)</SubH4>
                    <ul>
                        <StyledLi>Consolidated risk and valuation analysis on firms within the industry to construct a pitchbook as a team under a senior analyst</StyledLi>
                        <StyledLi>Partook in the banking program aimed at honing hard skills with personalised mentorship from upperclassmen and alumni</StyledLi>
                    </ul>
                </Activity>
            </MainText>
        </ExtracurricularBox>
    );
}