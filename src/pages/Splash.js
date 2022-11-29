import Plaque from '../components/Plaque';
import Curtain from '../images/bg/curtains.jpg';
import { useInView } from 'react-intersection-observer';
import { buildThreshold } from '../helper-functions';
// import $ from 'jquery';

const SplashPage = () => {
  const { ref } = useInView({
    /* Optional options */
    threshold: buildThreshold(30),
    onChange: (inView, entry) => {
      const page = entry.target.parentNode;
      page.style.zIndex = inView * 100;
      page.querySelectorAll('.curtain').forEach((curtain) => {
        curtain.style.width = `${(entry.intersectionRatio / 2) * 100}%`;
      });
      page.querySelector('.plaque').style.opacity = entry.intersectionRatio * 2;
      page.querySelector('.bg-dark').style.opacity = entry.intersectionRatio * 2;
    }
  });

  return (
    <section className="splash-page" id="splash-page">
      <div className="bg-dark" />
      <div className="splash-space" ref={ref} />
      <img className="curtain" id="left" src={Curtain} alt="" />
      <img className="curtain" id="right" src={Curtain} alt="" />
      <Plaque>
        <h1>Humaira Zaman</h1>
        <h3>Software Developer</h3>
      </Plaque>
    </section>
  );
};

export default SplashPage;
