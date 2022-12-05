import img from '../images/project_img/Gmail.png';

const ProjectCard = ({ index, project, onclick }) => {
  return (
    <div className={'card-space ' + (index % 2)}>
      {/* <div className="card-pos-fixed"> */}
        <div className="card to-fold">
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
      {/* </div> */}
    </div>
  );
};

export default ProjectCard;
