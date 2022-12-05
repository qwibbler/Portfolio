import img from '../images/project_img/Gmail.png';

const ProjectCard = ({ index, project, onclick }) => {
  return (
    <>
      <div className={"card to-fold " + (index % 2)}>
        <div className="card-content">
          <img src={img} alt="projimg" />
          <h4>{project.title}</h4>
          <p>{project.desc}</p>
          <ul className="project-list">{project.list}</ul>
        </div>
      </div>
      <div className="btn">
        <button onClick={onclick}>See Project</button>
      </div>
    </>
  );
};

export default ProjectCard;
