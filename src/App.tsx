import { createBrowserRouter, RouterProvider, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header.tsx";
import Nav from "./components/Nav.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./components/mains/Home.tsx";
import Education from "./components/mains/Education.tsx";
import WorkExp from "./components/mains/WorkExp.tsx";
import Awards from "./components/mains/Awards.tsx";
import Extracurriculars from "./components/mains/Extracurriculars.tsx"
import Skills from "./components/mains/Skills.tsx"
import Projects from "./components/mains/Projects.tsx"


const StyledContainer = styled.div` {/*nav+main*/}
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    background-color: lightcoral;
    @media (max-width: 900px) {
        height: 100%;
        flex-direction: column;
    }
`
const StyledDiv = styled.div` {/*page-wrapper essentially*/}
    width: 85vw;
    margin: 0 auto;
`
function Root () {
    return (
        <StyledDiv>
            <Header />
            <StyledContainer>
                <Nav />
                <TitleUpdater /> {/* Keeps title in sync with the current route */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/work-exp" element={<WorkExp />} />
                    <Route path="/awards" element={<Awards />} />
                    <Route path="/extracurricular" element={<Extracurriculars />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/skills" element={<Skills />} />
                </Routes>
            </StyledContainer>
            <Footer />
        </StyledDiv>
    );
}

const router = createBrowserRouter([{path:"*", Component: Root}]);

function TitleUpdater() {
    const location = useLocation();

    useEffect(() => {
        const pageTitles: Record<string, string> = {
            "/": "Home | Resume",
            "/education": "Education | Resume",
            "/work-exp": "Work Experience | Resume",
            "/awards": "Awards and Scores | Resume",
            "/extracurricular": "Extracurriculars | Resume",
            "/projects": "Projects | Resume",
            "/skills": "Skills | Resume",
        };

        document.title = pageTitles[location.pathname] || "Resume";
    }, [location.pathname]);

    return null; // This doesn't render anything its just for title handling
}

export default function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}
