import Heading from '../components/Heading';
import InfoBox from '../components/Infobox';
import { useInView } from 'react-intersection-observer';
import { pageOptions } from '../helper';

const WelcomePage = () => {
  const { ref, inView } = useInView(pageOptions);

  return (
    <section ref={ref} className="welcome page" id="first-page">
      {inView && (
        <>
          <Heading>Welcome! ➢</Heading>
          <InfoBox>
            <span className="sub-heading">
              Hi, I’m <strong>Humaira Zaman!</strong>
            </span>
            <span>
              I’m a <strong>software developer.</strong>
            </span>
            <span>
              I can help you build <strong>anything</strong> you want.
            </span>
            <span>
              Look through some of my work and experience. If you like what you
              see and have a project you need coded, don’t hestiate to contact
              me.
            </span>
          </InfoBox>
        </>
      )}
    </section>
  );
};

export default WelcomePage;
