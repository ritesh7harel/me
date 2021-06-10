import './Education.css';

const Education = () => {
    return (
        <div className="education">
            <div>
                <div className="title">
                    Education
                </div>
                {/*<div className="subTitle">*/}
                {/*    Companies I have worked for in the past*/}
                {/*</div>*/}
            </div>
            <div className="companies">
                <div className="company">
                    <i className="fa fa-graduation-cap icon"></i> B.Tech, <span className="role">Computer Science </span>
                </div>
                <div className="details">
                    <i className="fa fa-university icon"></i>Walchand College of Engineering, Sangli, Maharashtra , India.
                    in india.
                </div>
                <div className="year">
                    <i className="fa fa-calendar icon"></i> June 2015 - May 2019
                </div>

            </div>
        </div>
    );
};


export default Education;
