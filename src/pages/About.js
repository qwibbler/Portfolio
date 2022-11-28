import Heading from "../components/Heading";
import InfoBox from "../components/Infobox";

const AboutPage = () => (
  <section class="about-page page" id="third-page">
        <Heading>
          <h1>About Me ➢</h1>
        </Heading>
        <InfoBox>
          <span class="sub-heading">Hi, I'm <strong>Humaira Zaman!</strong></span>
          <span>
            I'm a <strong>software developer</strong> who loves <strong>coding</strong>,
            because it has all of my favorite things: <strong>problem solving</strong>,
            <strong>creativity</strong>, and <strong>logic</strong>.
          </span>
          <span>
            I'm passionate about <strong>learning new skills and technologies</strong>, and
            I'm always looking for new opportunities to <strong>grow and improve</strong>.
          </span>
          <span>
            I'm currently looking for a <strong><em>full-time position as a software developer</em></strong>.
            If you have a project you need coded, don't hestiate to <strong>contact me</strong>.
          </span>
          <span><button type="button">Get My Resume</button></span>
        </InfoBox>
        <div class="about cards">
          <div class="card">
            <div class="card-content">
              <h4>Languages</h4>
              <ul>
                <li>JavaScript</li>
                <li>Ruby</li>
                <li>Html</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>
          <div class="card">
            <div class="card-content">
              <h4>Frameworks</h4>
              <ul>
                <li>Bootstrap</li>
                <li>Ruby on rails</li>
                <li>RSpec</li>
                <li>Capybara</li>
                <li>Selenium</li>
              </ul>
            </div>
          </div>
          <div class="card">
            <div class="card-content">
              <h4>Skills</h4>
              <ul>
                <li>Codekit</li>
                <li>GitHub</li>
                <li>Codepen</li>
                <li>Gitlab</li>
                <li>Terminal</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
)

export default AboutPage;