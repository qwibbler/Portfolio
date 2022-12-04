import Heading from '../components/Heading';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
// import { pageOptions } from '../helper';
import { projectsData } from '../helpers/helper';
import ProjectCard from '../components/ProjectCard';
import Foldable from '../components/Foldable';
import FoldCard from '../components/FoldCard';

const ProjectPage = () => {
  const { ref, inView } = useInView();

  const [folding, setFolding] = useState(false);

  const finishAction = () => {
    setFolding(false);
  };

  const onclick = () => {
    setFolding(true);
  };

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
