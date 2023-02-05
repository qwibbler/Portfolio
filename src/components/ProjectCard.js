import Skills from './Skills';
import img from '../images/project_img/Gmail.png';

const ProjectCard = ({ project }) => {
  return (
    <div className={'card to-fold '}>
      <div className="card-content">
        <img src={img} alt="projimg" />
        <h4>{project.title}</h4>
        <p>{project.desc}</p>
        <Skills skills={project.langs} classes={'project-list'} />
      </div>
    </div>
  );
};

export default ProjectCard;
