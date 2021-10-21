import './Skills.css';
import CSS from "../assets/css.png";
import HTML from "../assets/html.png";
import REACT from "../assets/react.png";
import JS from "../assets/javascript.png";
import REDUX from "../assets/Redux.png";
import JAVA from "../assets/java.png";
import GIT from "../assets/git.png";
import PHP from "../assets/php.png";
import DOCKER from "../assets/docker.png";
import GO from "../assets/go.png";
import Angular from "../assets/angular.png";
import ReactNative from "../assets/react-native.png";
import {useState} from "react";


const Skills = () => {

    const totalSkills = 14;
    const [skillsCount, setSkillsCount] = useState(0);
    const [disableRight, setDisableRight] = useState(false);

    const skillsStyle = {
        transform: `translateX(${-((skillsCount * 240 + 32))}px)`,
        width: totalSkills * 240 + totalSkills * 16,
    };
    const skillsWrapperStyle = {
        width: `${window.innerWidth - 60}px`
    };
    const handleNext = () => {
        if (((totalSkills * 240 + totalSkills * 16) - (window.innerWidth - 60)) - (skillsCount * 240 + 32) < 0) {
            setDisableRight(true);
            return;
        }
        setSkillsCount(skillsCount + 1);
        setDisableRight(false);
    };
    const handlePrev = () => {
        if (skillsCount === 0) {
            return;
        }
        setSkillsCount(skillsCount - 1);
    };

    return (
        <div className="experienceWrapper">
            <div id="Skills" className="skills-section">
                <div className="container">
                    <h2 className="skillHead">Skills</h2>
                    <h3 className="skillSubHead">My primary skills are...</h3>
                </div>
                <div className="skills-div">
                    <div className="skills-card">
                        <img src={REACT}/>
                        <h3>React</h3>
                    </div>
                    <div className="skills-card">
                        <img src={JS}/>
                        <h3>JavaScript</h3>
                    </div>
                    <div className="skills-card">
                        <img src={REDUX}/>
                        <h3>Redux</h3>
                    </div>
                    <div className="skills-card">
                        <img src={CSS}/>
                        <h3>CSS</h3>
                    </div>
                    <div className="skills-card">
                        <img src={HTML}/>
                        <h3>HTML</h3>
                    </div>
                    <div className="skills-card">
                        <img src={ReactNative}/>
                        <h3>React Native</h3>
                    </div>
                </div>
                <div className="container">
                    <h3>I am familiar with...</h3>
                </div>
                <div className="skills-div">
                    <div className="skills-card">
                        <img src={JAVA}/>
                        <h3>Java</h3>
                    </div>
                    <div className="skills-card">
                        <img src={GIT}/>
                        <h3>Git</h3>
                    </div>
                    <div className="skills-card">
                        <img src={GO}/>
                        <h3>Go</h3>
                    </div>
                    <div className="skills-card">
                        <img src={PHP}/>
                        <h3>Php</h3>
                    </div>
                    <div className="skills-card">
                        <img src={DOCKER}/>
                        <h3>Docker</h3>
                    </div>
                    <div className="skills-card">
                        <img src={Angular}/>
                        <h3>Angular</h3>
                    </div>
                </div>
                <div className="container">
                    <h3>testing skills</h3>
                </div>
                <div className="slider">
                    <div onClick={handlePrev} className="prev">
                        <i className="fa fa-arrow-left arrow" style={skillsCount === 0 ? {color: 'gray'} : {}}></i>
                    </div>
                    <div className="skills-wrapper" style={skillsWrapperStyle}>
                        <div className="skills-divs" style={skillsStyle}>
                            <div className="skills-card">
                                <img src={JAVA}/>
                                <h3>Java</h3>
                            </div>
                            <div className="skills-card">
                                <img src={GIT}/>
                                <h3>Git</h3>
                            </div>
                            <div className="skills-card">
                                <img src={GO}/>
                                <h3>Go</h3>
                            </div>
                            <div className="skills-card">
                                <img src={PHP}/>
                                <h3>Php</h3>
                            </div>
                            <div className="skills-card">
                                <img src={DOCKER}/>
                                <h3>Docker</h3>
                            </div>
                            <div className="skills-card">
                                <img src={Angular}/>
                                <h3>Angular</h3>
                            </div>
                            <div className="skills-card">
                                <img src={GO}/>
                                <h3>Go</h3>
                            </div>
                            <div className="skills-card">
                                <img src={PHP}/>
                                <h3>Php</h3>
                            </div>
                            <div className="skills-card">
                                <img src={DOCKER}/>
                                <h3>Docker</h3>
                            </div>
                            <div className="skills-card">
                                <img src={Angular}/>
                                <h3>Angular</h3>
                            </div>
                            <div className="skills-card">
                                <img src={GO}/>
                                <h3>Go</h3>
                            </div>
                            <div className="skills-card">
                                <img src={PHP}/>
                                <h3>Php</h3>
                            </div>
                            <div className="skills-card">
                                <img src={DOCKER}/>
                                <h3>Docker</h3>
                            </div>
                            <div className="skills-card">
                                <img src={Angular}/>
                                <h3>Angular</h3>
                            </div>
                        </div>
                    </div>
                    <div onClick={handleNext} className="next">
                        <i className="fa fa-arrow-right arrow"
                           style={disableRight ? {color: 'gray'} : {}}></i>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Skills;
