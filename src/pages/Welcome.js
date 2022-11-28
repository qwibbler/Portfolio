import Heading from '../components/Heading';
import InfoBox from '../components/Infobox';

const WelcomePage = () => (
  <section class="welcome page" id="first-page">
    <Heading>Welcome! ➢</Heading>
    <InfoBox>
      <span class="sub-heading">
        Hi, I’m <strong>Humaira Zaman!</strong>
      </span>
      <span>
        I’m a <strong>software developer.</strong>
      </span>
      <span>
        I can help you build <strong>anything</strong> you want.
      </span>
      <span>
        Look through some of my work and experience. If you like what you see
        and have a project you need coded, don’t hestiate to contact me.
      </span>
    </InfoBox>
  </section>
);

export default WelcomePage;
