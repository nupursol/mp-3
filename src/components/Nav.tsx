import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
    width: 30%;
    a {
        text-decoration: underline;
        color: black;
    }
    @media (max-width: 900px) {
        width: 100%;
    }
`
const NavUl = styled.ul`
    display: flex;
    flex-direction: column;
    font-size: calc(1px + 1vw);
    text-align: center;
    list-style: none;
    background-color: lightcoral;
    @media (max-width: 900px) {
        flex-direction: row;
        justify-content: space-between;
        padding-left: 0;
    }
`
const NavLi = styled.li<{ $isHome: boolean }>` 
    font-size: calc(2px + 1.5vw);
    font-family: 'Poppins', sans-serif;
    width: 90%;
    background-color: peachpuff;
    padding: 1vh 0;
    margin: ${({ $isHome }) => ($isHome ? "3vh auto" : "1vh auto")}; /* change margin based on whether there is image in nav*/
    border: 1px solid #4d2600;
    @media (max-width: 900px) {
        font-size: calc(2px + 1.5vw);
        padding: 1% .5%;
        margin: 3% .5%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const NavImage = styled.img`
    width: 150px; /*exception made for pixels specifically because I could not figure out how to shrink a circle repsonsively sorry :(*/
    height: 150px;
    object-fit: cover; /*making image circle*/
    border-radius: 50%;
    border: 3px solid #4d2600;
    @media (max-width: 900px) {
        display: none; {/*don't display image in nav if screen too small*/}
    } 
`;

const NavLiImage = styled.li`
    background-color: transparent;
    border: 0;
    padding: 1vh 0;
    margin: 1vh auto;
`

export default function Nav() {
    const location = useLocation();
    const isHome = location.pathname === "/"; {/*determine if we are on Home page*/}

    return (
        <NavContainer>
            <NavUl>
                {location.pathname !== "/" && (
                    <NavLiImage> {/*if not on home page, show image in nav*/}
                        <NavImage src="/ME.JPG" alt="Nupur Solanki" />
                    </NavLiImage>
                )}
                <NavLi $isHome={isHome}><Link to="/">Home</Link></NavLi>
                <NavLi $isHome={isHome}><Link to="/education">Education</Link></NavLi>
                <NavLi $isHome={isHome}><Link to="/work-exp">Work Experience</Link></NavLi>
                <NavLi $isHome={isHome}><Link to="/awards">Awards and Scores</Link></NavLi>
                <NavLi $isHome={isHome}><Link to="/extracurricular">Extracurriculars</Link></NavLi>
                <NavLi $isHome={isHome}><Link to="/projects">Projects</Link></NavLi>
                <NavLi $isHome={isHome}><Link to="/skills">Skills</Link></NavLi>
            </NavUl>
        </NavContainer>
    );
}