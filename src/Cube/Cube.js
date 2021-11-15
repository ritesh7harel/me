import React from 'react';
import MyImage from "../me.png";
import MyImage2 from "../assets/me-2.jpg";
import MyImage3 from "../assets/me-3.jpg";
import MyImage4 from "../assets/me-4.jpg";
import './Cube.css';

class Cube extends React.Component {
    render() {
        return <div className="wrapper">
            <div id="cube">
                <div className="side front"><img src={MyImage} alt="profile" className="cubeImage"/></div>
                <div className="side back"><img src={MyImage2} alt="profile" className="cubeImage"/></div>
                <div className="side right"><img src={MyImage3} alt="profile" className="cubeImage"/></div>
                <div className="side left"><img src={MyImage4} alt="profile" className="cubeImage"/></div>
                <div className="side top">E</div>
                <div className="side bottom">F</div>
            </div>
        </div>
    }
}

export default Cube;