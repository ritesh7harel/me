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
