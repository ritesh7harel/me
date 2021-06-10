import React, {useEffect, useState} from "react";
import MyImage from "../me.png";
import './Home.css';

const Home = () => {
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        setShowAnimation(true);
    }, []);

    return (
        <div className="app">
            <div className={`leftView ${showAnimation && 'animateStart'}`}>
                <div className="myPhotoWrapper">
                    <img src={MyImage} alt="profile" className="bigImage"/>
                </div>
            </div>
            <div className={`rightView ${showAnimation && 'animateStartAgain'}`}>
                <div className="myName">
                    I'm Ritesh Harel.
                </div>
                <div className="myName">
                   Frontend Developer
                </div>
                <div className="myName lightName">
                    based in India
                </div>
                <div className="myIntro">
                    I’m probably the most passionate developer you will ever get to work with. If you have a great project that needs some amazing skills, I’m your guy.
                </div>
            </div>
        </div>
    )
};


export default Home;
