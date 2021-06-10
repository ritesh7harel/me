import './Experience.css';

const Experience = () => {
    return (
        <div className="experience">
            <div>
                <div className="title">
                    Work Experience
                </div>
                {/*<div className="subTitle">*/}
                {/*    Companies I have worked for in the past*/}
                {/*</div>*/}
            </div>
            <div className="companies">
                <div className="company">
                    <i className="fa fa-desktop icon"></i> ThoughtWorks, <span className="role">UI Developer </span>
                </div>
                <div className="year">
                    <i className="fa fa-calendar icon"></i> June 2019 - Present
                </div>
                <div className="details">
                    <i className="fa fa-id-card-o icon"></i>I'm currently working as UI developer on project of building
                    applications for leading private bank
                    in india.
                </div>
            </div>
        </div>
    );
};


export default Experience;
