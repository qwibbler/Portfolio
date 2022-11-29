import Heading from "../components/Heading";
import InfoBox from "../components/Infobox";
import FormInput from "../components/FormInput";

const ContactPage = () => (
  <section class="contact-page page" id="contact-me">
        <Heading>Contact Me</Heading>
        <InfoBox>
            I'm always interested in hearing about new projects,
            so if you'd like to chat please get in touch.
        </InfoBox>
        <form class="cards" action="https://formspree.io/f/moqyzrzd" method="post">
          <div class="card">
            <FormInput label="Name" id="username">
              <input type="text" id="username" name="user-name" placeholder="Full Name" maxlength="30" required />
            </FormInput>
            <FormInput label="Email" id="useremail">
              <input type="email" id="useremail" name="user-email" placeholder="Email address" required />
            </FormInput>
            <FormInput label="Message" id="comment">
              <textarea name="msg" id="comment" maxlength="500" placeholder="Message" required></textarea>
            </FormInput>
            {/* <input type="text" name="_gotcha" style="display:none" /> */}
          </div>
          <div class="btn"><button type="submit">Get In Touch</button></div>
        </form>
      </section>
);

export default ContactPage;