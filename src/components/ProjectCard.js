import Skills from './Skills';
import img from '../images/project_img/Gmail.png';

const ProjectCard = ({ index, project, onclick }) => {
  return (
    <div className={'card to-fold ' + (index % 2)}>
      <div className="card-content">
        <img src={img} alt="projimg" />
        <h4>{project.title}</h4>
        <p>{project.desc}</p>
        <Skills skills={project.langs} />
      </div>
    </div>
  );
};

export default ProjectCard;
