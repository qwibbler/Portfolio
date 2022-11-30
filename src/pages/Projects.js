import Heading from '../components/Heading';
import { useInView } from 'react-intersection-observer';
import { pageOptions } from '../helper';

const ProjectPage = () => {
  const { ref, inView } = useInView(pageOptions);

  return (
    <section ref={ref} className="project page" id="second-page">
      {inView && <>
        <Heading>Featured Works ➢</Heading>
        <p className="wood-bg infobox"></p>
        <div className="projects cards" id="projects">
          {/* < className="project_cards" id="popupWrapper" /> */}
        </div>
      </>}
    </section>
  );
};

export default ProjectPage;
