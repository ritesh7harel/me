import './Experience.css';
import {useEffect, useState} from "react";

const Experience = () => {
    const [months, setMonths] = useState(0);
    const [years, setYears] = useState(0);

    useEffect(() => {
        const joinedDate = new Date(2019, 5, 3);
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1;
        const currentYear = currentDate.getFullYear();
        const joinedMonth = joinedDate.getMonth() + 1;
        const joinedYear = joinedDate.getFullYear();

        let totalMonths = 0;
        let totalYears = currentYear - joinedYear;

        if ((currentMonth - joinedMonth) >= 0) {
            totalMonths = currentMonth - joinedMonth;
        } else {
            totalMonths = 12 - Math.abs(currentMonth - joinedMonth);
            --totalYears;
        }
        setMonths(totalMonths + 1);
        setYears(totalYears);
        setYears(totalYears);
    }, []);

    return (
        <div className="experience">
            <div>
                <div className="title">
                    Work Experience
                </div>
                <div className="totalExperience">
                    <div className="outer">
                        <div className="inner">
                            {years}
                        </div>
                        <div className="label">
                            {years > 1 ? 'Years' : 'Year'}
                        </div>
                    </div>
                    <div className="outer">
                        <div className="inner">
                            {months}
                        </div>
                        <div className="label">
                            {months > 1 ? 'Months' : 'Month'}
                        </div>
                    </div>
                </div>
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
                <div className="extraDetails">
                    • As a part of team, developing internet and mobile banking platform for India’s leading private bank.<br/>
                    • Worked on React for building the web platform from scratch.<br/>
                    • Worked on React Native for building mobile application from scratch.<br/>
                    • Build scalable and performance oriented mobile app and responsive web app.<br/>
                    • Followed best practices such as TDD, Unit Testing, Agile.<br/>
                    • Contributed in building backend REST apis in Golang and deployment with docker,gocd.<br/>
                    • As a part of another team, Worked on developing UI for one of the top Airline.<br/>
                    • Worked on Stencil.js to create portable web components.<br/>
                </div>
            </div>
        </div>
    );
};


export default Experience;
