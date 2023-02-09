import Card from '../components/Card';
import Heading from '../components/Heading';
import InfoBox from '../components/Infobox';
import Skills from '../components/Skills';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { buildThreshold } from '../helpers/helper';

const AboutPage = () => {
  const [infoOn, setInfoOn] = useState(false);
  const [cardPos, setCardPos] = useState(0);

  const { ref, inView } = useInView({
    threshold: buildThreshold(100),
    onChange: (_inView, entry) => {
      const top = entry.boundingClientRect.top;

      const infoStart = window.innerHeight * 0.85;
      const infoEnd = window.innerHeight * 0.5;
      const cardStart = window.innerHeight * 0.45;
      const cardEnd = window.innerHeight * -0.9;
      const cardPCent = Math.floor(
        ((top - cardStart) * 100) / (cardEnd - cardStart),
      );

      setInfoOn(top < infoStart && top > infoEnd);

      if (cardPCent > 0 && cardPCent < 100) {
        setCardPos(cardPCent);
      }
    },
  });

  return (
    <section ref={ref} className="about-page page" id="third-page">
      {inView && (
        <>
          <Heading>About Me ➢</Heading>
          <InfoBox moreClasses={infoOn}>
            <span className="sub-heading">
              Hi, I'm <strong>Humaira Zaman!</strong>
            </span>
            <span>
              I'm a <strong>software developer</strong> who loves{' '}
              <strong>coding</strong>, because it has all of my favorite things:{' '}
              <strong>problem solving</strong>,<strong>creativity</strong>, and{' '}
              <strong>logic</strong>.
            </span>
            <span>
              I'm passionate about{' '}
              <strong>learning new skills and technologies</strong>, and I'm
              always looking for new opportunities to{' '}
              <strong>grow and improve</strong>.
            </span>
            <span>
              I'm currently looking for a{' '}
              <strong>
                <em>full-time position as a software developer</em>
              </strong>
              . If you have a project you need coded, don't hestiate to{' '}
              <strong>contact me</strong>.
            </span>
            <span>
              <button type="button">Get My Resume</button>
            </span>
          </InfoBox>
          <div className={`about cards ${infoOn} ${cardPos}`}>
            {/* have the animation work acording to top position. Have it go 0-100 -> probably sth to do with window.innerHeight */}
            <Card>
              <h4>Languages</h4>
              <Skills skills={['JavaScript', 'Ruby', 'Html', 'CSS']} />
            </Card>
            <Card>
              <h4>Frameworks</h4>
              <Skills
                skills={[
                  'Ruby on Rails',
                  'Bootstrap',
                  'RSpec',
                  'Capybara',
                  'Selenium',
                ]}
              />
            </Card>
            <Card>
              <h4>Skills</h4>
              <Skills
                skills={['Codekit', 'GitHub', 'Codepen', 'Gitlab', 'Terminal']}
              />
            </Card>
          </div>
        </>
      )}
    </section>
  );
};

export default AboutPage;
