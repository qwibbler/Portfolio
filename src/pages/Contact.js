import Heading from "../components/Heading";
import InfoBox from "../components/Infobox";
import ContactForm from "../components/ContactForm";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { buildThreshold } from "../helpers/helper";

const ContactPage = () => {
  const [infoOn, setInfoOn] = useState(false);

  const { ref, inView } = useInView({
    threshold: buildThreshold(100),
    onChange: (_inView, entry) => {
      setInfoOn(entry.intersectionRatio > 0.2);
    },
  });

  return (
    <section ref={ref} className="contact-page page" id="contact-me">
      {inView && <>
        <Heading>Contact Me</Heading>
        <InfoBox moreClasses={infoOn}>
          <span>
            I'm always interested in hearing about new projects,
            so if you'd like to chat please get in touch.
          </span>
        </InfoBox>
        <ContactForm />
      </>}
    </section>
  );
};

export default ContactPage;