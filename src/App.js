import Home from "./Home/Home";
import Skills from "./Skills/Skills";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import Projects from "./Projects/Projects";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
//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
function App() {
    return (
        <div className="myApp">
            <Navbar/>
            <Home/>
            <Skills/>
            <Experience/>
            <Education/>
            <Projects/>
            <Footer/>
        </div>
    );
}

export default App;
