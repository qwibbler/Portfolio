import Heading from '../components/Heading';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
// import { pageOptions } from '../helper';
import { projectsData } from '../helpers/helper';
import ProjectCard from '../components/ProjectCard';
import Foldable from '../components/Foldable';

const ProjectPage = () => {
  const { ref, inView } = useInView();

  const [folding, setFolding] = useState(false);

  const finishAction = () => {
    setFolding(false);
  };

  const onclick = () => {
    setFolding(true);
  }

  return (
    <section ref={ref} className="project page" id="second-page">
      {inView && (
        <>
          <Heading>Featured Works ➢</Heading>
        </>
      )}
      <div className="projects cards" id="projects">
        {projectsData.map((project, index) => (
          <>
            <Foldable
              isFolded={folding}
              onCompleteFolding={finishAction}
              front={<ProjectCard key={index} index={index} project={project} onclick={onclick} />}
              back={<ProjectCard key={index} index={index} project={project} onclick={onclick} />}
            />
            {/* <input type='button' value='click' key={index} onclick={onclick} /> */}
          </>
        ))}
        {/* < className="project_cards" id="popupWrapper" /> */}
      </div>
    </section>
  );
};

export default ProjectPage;
