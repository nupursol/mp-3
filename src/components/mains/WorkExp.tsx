import styled from "styled-components";

const JobContainer = styled.div`
    padding: 5vh 6vw;
    @media (max-width: 900px) {
        margin: 1vh 0;
    }
`
const JobTitle = styled.h3` {/*formatting for company name*/}
    color: #4d2600;
    text-decoration: underline;
    font-family: Ariel;
    font-size: calc(2px + 1.5vw);
    @media (max-width: 900px) {
        font-size: calc(2px + 2.5vw); {/*different level of shrinking*/}
    }
`
const WorkExpBox = styled.div`
    display: flex;
    width: 60.5%;
    margin: 8vh 4vw 8vh 4vw;
    flex-direction: column;
    background-color: peachpuff;
    padding: 2vh 1vw;
    border: 1px solid #4d2600;
    justify-content: center;
    text-align: left;
    @media (max-width: 900px) {
        height: 100%;
        margin: 2vh auto;
        padding: 1vw;
        justify-content: center;
        width: 70vw;
    }
`
const WorkExpTitle = styled.h3`
    margin: 2vw 0;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    font-size: calc(2px + 2vw);
    color: #4d2600;
    @media (max-width: 900px) {
        margin-top: 10vw;
    }
`
const WorkExpText = styled.div`
    margin: 1vw 0;
`
const StyledH4 = styled.h4`
    font-family: Ariel;
    @media (max-width: 900px) {
        font-size: calc(2px + 2vw);
    }`
const StyledLi = styled.li`
    font-family: Ariel;
    @media (max-width:900px) {
        font-size: calc(2px + 2vw);
    }
`

export default function WorkExp() {
    return (
        <WorkExpBox>
            <WorkExpTitle>Work Experience</WorkExpTitle>
            <WorkExpText>
                <JobContainer>
                    <JobTitle>Pantile Asset Research</JobTitle>
                    <StyledH4>Quantitative Summer Analyst - Investments (June 2024-August 2024)</StyledH4>
                    <ul>
                        <StyledLi>Developed a Django view displaying 13 numerical attributes of 10+ shares, integrating into a system for trading signals and order processing.</StyledLi>
                        <StyledLi>Defined oscillating price ranges from 7+ technical charts, enabling a signaling system for improved market timing.</StyledLi>
                    </ul>
                </JobContainer>

                <JobContainer>
                    <JobTitle>Boston University School of Law</JobTitle>
                    <StyledH4>Data Analytics and Admissions Assistant (May 2023-May 2024)</StyledH4>
                    <ul>
                        <StyledLi>Built and analyzed a research database on 20+ competitor law schools, collating 10 key admit/reject data points.</StyledLi>
                        <StyledLi>Trained 2 assistants and resolved 500+ external queries, boosting application processing efficiency by 40%.</StyledLi>
                    </ul>
                </JobContainer>

                <JobContainer>
                    <JobTitle>ASK Investment Managers</JobTitle>
                    <StyledH4>Investment Management and Human Resources Summer Analyst (July 2022-August 2022)</StyledH4>
                    <ul>
                        <StyledLi>Researched customer life cycle management of 14 healthcare firms ($13MM-$26MM EV) to define 6 key customer touchpoints.</StyledLi>
                        <StyledLi>Evaluated 10+ financial statements, calculating multiples for valuation and projection models.</StyledLi>
                    </ul>
                </JobContainer>

                <JobContainer>
                    <JobTitle>Seeba Capital Management</JobTitle>
                    <StyledH4>Summer Finance Intern (June 2019-July 2019)</StyledH4>
                    <ul>
                        <StyledLi>Analyzed five years of financial statements to assess firm competitiveness.</StyledLi>
                        <StyledLi>Shadowed the Chief of Operations and evaluated manufacturing unit efficiencies through site visits and supply chain analysis.</StyledLi>
                    </ul>
                </JobContainer>
            </WorkExpText>
        </WorkExpBox>
    );
}