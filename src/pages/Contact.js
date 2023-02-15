import Heading from '../components/Heading';
import InfoBox from '../components/Infobox';
import ContactForm from '../components/ContactForm';
import Curtain from '../images/bg/curtains.jpg';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { buildThreshold } from '../helpers/helper';

const ContactPage = () => {
  const [infoOn, setInfoOn] = useState(false);
  const [closingCurtains, setClosingCurtains] = useState(false);

  const { ref, inView } = useInView({
    threshold: buildThreshold(100),
    onChange: (_inView, entry) => {
      setInfoOn(entry.intersectionRatio > 0.2 && entry.intersectionRatio < 0.8);
      setClosingCurtains(entry.intersectionRatio > 0.8);
      if (entry.intersectionRatio > 0.8) {
        entry.target.querySelectorAll('.curtain').forEach((curtain) => {
          curtain.style.width = `${(entry.intersectionRatio - 0.9) * 100}%`;
        });
        entry.target.querySelector('.bg-dark').style.opacity =
          entry.intersectionRatio - 0.2;
      }
    },
  });

  return (
    <section ref={ref} className="contact page" id="contact-me">
      {inView && (
        <>
          <Heading>Contact Me</Heading>
          <InfoBox moreClasses={infoOn}>
            <span>
              I'm always interested in hearing about new projects, so if you'd
              like to chat please get in touch.
            </span>
          </InfoBox>
        </>
      )}
      {closingCurtains && (
        <>
          <div className="bg-dark" />
          <ContactForm />
          <img className="curtain" id="left" src={Curtain} alt="" />
          <img className="curtain" id="right" src={Curtain} alt="" />
        </>
      )}
    </section>
  );
};

export default ContactPage;
