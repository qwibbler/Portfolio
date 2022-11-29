const ProjectCard = ({ project }) => (
  <div className='card-space'>
    <div className='card-pos-fixed ${orientation}'>
      <div className='card to-fold'>
        <div className='card-content'>
          <img src='images/project_img/Gmail.png' alt='projimg' />
          <h4>${project.title}</h4>
          <p>${project.desc}</p>
          <ul className='project-list'>${project.list}</ul>
        </div>
      </div>
      <div className='btn'>
        <button>See Project</button>
      </div>
    </div>
  </div>
);

export default ProjectCard;