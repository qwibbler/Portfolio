import { useInView } from 'react-intersection-observer';
// import { pageOptions } from '../helpers/helper';
import { projectsData } from '../helpers/helper';
import Heading from '../components/Heading';
import FoldCard from '../components/FoldCard';

const ProjectPage = () => {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="project page" id="second-page">
      {inView && (
        <>
          <Heading>Featured Works ➢</Heading>
        </>
      )}
      <div className="projects cards" id="projects">
        {projectsData.map((project, index) => (
          <FoldCard key={index} index={index} project={project} />
        ))}
        {/* < className="project_cards" id="popupWrapper" /> */}
      </div>
    </section>
  );
};

export default ProjectPage;
