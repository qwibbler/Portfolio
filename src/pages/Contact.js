import Heading from "../components/Heading";
import InfoBox from "../components/Infobox";
import FormInput from "../components/FormInput";
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
        <form className="cards" action="https://formspree.io/f/moqyzrzd" method="post">
          <div className="card">
            <FormInput label="Name" id="username">
              <input type="text" id="username" name="user-name" placeholder="Full Name" maxLength="30" required />
            </FormInput>
            <FormInput label="Email" id="useremail">
              <input type="email" id="useremail" name="user-email" placeholder="Email address" required />
            </FormInput>
            <FormInput label="Message" id="comment">
              <textarea name="msg" id="comment" maxLength="500" placeholder="Message" required></textarea>
            </FormInput>
            {/* <input type="text" name="_gotcha" style="display:none" /> */}
          </div>
          <div className="btn"><button type="submit">Get In Touch</button></div>
        </form>
      </>}
    </section>
  );
};

export default ContactPage;