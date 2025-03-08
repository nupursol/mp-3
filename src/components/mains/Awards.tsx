import styled from 'styled-components';

const AwardsBox = styled.div`
    display: flex;
    margin: 8vh 8vw;
    width: 51.2%;
    flex-direction: column;
    background-color: peachpuff;
    padding: 2vh 2vw;
    border: 1px solid #4d2600;
    justify-content: center;
    text-align: left;
    max-width: 100%;
    min-height: 90vh;
    @media (max-width: 900px) {
        height: 80vh;
        margin: 2vh auto;
        padding: 2vh 10% 5% 10%;
        justify-content: center;
        width: 68vw;
    }
`
const AwardsTitle = styled.h3`
    margin: 2vw 0;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: calc(2px + 2vw);
    color: #4d2600;
    @media (max-width: 900px) {
        max-height: 100%;
        margin: 8vh 0 0 0;
    }
`
const AwardsText = styled.div`
    margin: 2vw 2vh;
    @media (max-width: 900px) {
        margin: 10% auto auto auto;
        max-width: 100%;
        font-size: calc(2px + 1.5vw);
    }
`
const SectionTitle = styled.h3`
    text-decoration: underline;
    font-family: Ariel;
    @media (max-width: 900px) {
        margin: 10% auto auto auto;
    }
`
const StyLi = styled.li`
    font-family: Ariel;
    margin: 1vh 0;
`

export default function Awards() {
    return (
        <AwardsBox>
            <AwardsTitle>Awards and Scores</AwardsTitle>
            <AwardsText>
                <SectionTitle>Dean's List at Boston University:</SectionTitle>
                <ul>
                    <StyLi>Fall 2021</StyLi>
                    <StyLi>Spring 2022</StyLi>
                    <StyLi>Fall 2022</StyLi>
                    <StyLi>Spring 2023</StyLi>
                    <StyLi>Fall 2024</StyLi>
                </ul>

                <SectionTitle>IB Diploma Program:</SectionTitle>
                <ul>
                    <StyLi>Total: 42/45</StyLi>
                    <StyLi>Math Analysis and Approaches Higher Level: 6/7</StyLi>
                    <StyLi>Economics Higher Level: 6/7</StyLi>
                    <StyLi>Physics Higher Level: 6/7</StyLi>
                </ul>

                <SectionTitle>SAT:</SectionTitle>
                <ul>
                    <StyLi>1500/1600</StyLi>
                </ul>

                <SectionTitle>ACT:</SectionTitle>
                <ul>
                    <StyLi>34/36</StyLi>
                </ul>

                <SectionTitle>IGCSE:</SectionTitle>
                <ul>
                    <StyLi>6A*s and 1A</StyLi>
                </ul>
            </AwardsText>
        </AwardsBox>
    );
}