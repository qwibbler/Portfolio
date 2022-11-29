import Heading from "../components/Heading";
import InfoBox from "../components/Infobox";

const ContactPage = () => (
  <section class="contact-page page" id="contact-me">
        <Heading>Contact Me</Heading>
        <InfoBox>
            I'm always interested in hearing about new projects,
            so if you'd like to chat please get in touch.
        </InfoBox>
        <form class="cards" action="https://formspree.io/f/moqyzrzd" method="post">
          <div class="card">
            <fieldset>
              <legend>Name</legend>
              <label for="username" />
              <input type="text" id="username" name="user-name" placeholder="Full Name" maxlength="30" required />
            </fieldset>
            <fieldset>
              <legend>Email</legend>
              <label for="useremail" />
              <input type="email" id="useremail" name="user-email" placeholder="Email address" required />
            </fieldset>
            <fieldset>
              <legend>Message</legend>
              <label for="comment" />
              <textarea name="msg" id="comment" maxlength="500" placeholder="Message" required></textarea>
            </fieldset>
            <input type="text" name="_gotcha" style="display:none" />
          </div>
          <div class="btn"><button type="submit">Get In Touch</button></div>
        </form>
      </section>
);

export default ContactPage;