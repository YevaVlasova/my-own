import './Projects.scss';
import zone from '../../../../assets/projects/zone.webp';
import designer from '../../../../assets/projects/designer.webp';
import enver from '../../../../assets/projects/enver.webp';
import alivio from '../../../../assets/projects/alivio.webp';
import socielity from '../../../../assets/projects/socielity.webp';
import nocode from '../../../../assets/projects/noCode.webp';

const Projects = () => {
    return (
        <div className="container projects">
            <div className="projects__section">
                <div className="projects__title">Discover my latest projects</div>
                <div className="projects__desc">Delve into a glimpse of my latest projects, where creativity thrives and innovation flourishes, while the full versions await your exploration on my GitHub account.</div>
                <div className="projects__list">
                    <div className="projects-card">
                        <span></span>
                        <div className="projects__content">
                            <div className="projects__img"><img src={zone} alt="" /></div>         
                        </div>
                    </div>
                    <div className="projects-card">
                        <span></span>
                        <div className="projects__content">
                            <div className="projects__img"><img src={nocode} alt="" /></div>         
                        </div>
                    </div>
                    <div className="projects-card">
                        <span></span>
                        <div className="projects__content">
                            <div className="projects__img"><img src={designer} alt="" /></div>         
                        </div>
                    </div>
                    <div className="projects-card">
                        <span></span>
                        <div className="projects__content">
                            <div className="projects__img"><img src={alivio} alt="" /></div>         
                        </div>
                    </div>
                    <div className="projects-card">
                        <span></span>
                        <div className="projects__content">
                            <div className="projects__img"><img src={enver} alt="" /></div>         
                        </div>
                    </div>
                    <div className="projects-card">
                        <span></span>
                        <div className="projects__content">
                            <div className="projects__img"><img src={socielity} alt="" /></div>         
                        </div>
                    </div>
                </div>
                <a className='btn _github' href="https://github.com/YevaVlasova">My GitHub here</a>
            </div>
            <div className="projects-circleA"></div>
            <div className="projects-circleB"></div>
            <div className="projects-circleC"></div>
        </div>
    );
}
export default Projects;