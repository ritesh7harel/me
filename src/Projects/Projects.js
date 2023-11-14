import './Projects.css';


const Projects = () => {

    return (
        <div className="experience" id="experience">
            <div>
                <div className="title">
                    Projects/Blogs
                </div>
            </div>
            <div className="companies">
                <div className="companyItem">
                    <div className="company">
                        <i className="fa fa-desktop icon"></i> <span className="role">Comments Widgets similar to facebook- https://github.com/ritesh7harel/comments-box-widget</span>
                    </div>
                </div>
                <div className="companyItem">
                    <div className="company">
                        <i className="fa fa-desktop icon"></i> <span className="role">Pollyfill for reducer in js- https://medium.com/@riteshharel07/pollyfill-for-bind-javascript-concept-faa03a6248be</span>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Projects;
