import Heading from '../components/Heading';
import { useInView } from 'react-intersection-observer';
// import { pageOptions } from '../helper';
import { projectsData } from '../helper';
import ProjectCard from '../components/ProjectCard';

const ProjectPage = () => {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="project page" id="second-page">
      {inView && (
        <>
          <Heading>Featured Works ➢</Heading>
          <div className="projects cards" id="projects">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
            {/* < className="project_cards" id="popupWrapper" /> */}
          </div>
        </>
      )}
    </section>
  );
};

export default ProjectPage;
