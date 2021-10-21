import Home from "./Home/Home";
import Skills from "./Skills/Skills";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

function App() {
    return (
        <div className="myApp">
            <Navbar/>
            <Home/>
            <Skills/>
            <Experience/>
            <Education/>
            <Footer/>
        </div>
    );
}

export default App;
