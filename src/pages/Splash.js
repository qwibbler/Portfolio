import Plaque from '../components/Plaque';
import Curtain from '../images/bg/curtains.jpg';
import { useInView } from 'react-intersection-observer';
import { buildThreshold } from '../helpers/helper';
import $ from 'jquery';
// import * as OriDomi from '../oridomi.min.js';
import OriDomi from '../helpers/oridomi';

const SplashPage = () => {
  const { ref, inView } = useInView({
    threshold: buildThreshold(30),
    onChange: (inView, entry) => {
      const page = entry.target.parentNode;
      if (page.childElementCount > 1) {
        page.querySelectorAll('.curtain').forEach((curtain) => {
          curtain.style.width = `${(entry.intersectionRatio / 2) * 100}%`;
        });
        page.querySelector('.plaque').style.opacity =
          entry.intersectionRatio * 2;
        page.querySelector('.bg-dark').style.opacity =
          entry.intersectionRatio * 2;
        }
      },
    });
    // var folded = new OriDomi(document.getElementById('left'));
    var folded = new OriDomi(document.getElementById('left'), {
      // vPanels:          5,     // number of panels when folding left or right (vertically oriented)
      hPanels:          3,     // number of panels when folding top or bottom
      speed:            1200,  // folding duration in ms
      ripple:           2,     // backwards ripple effect when animating
      shadingIntensity: .5,    // lessen the shading effect
      perspective:      800,   // smaller values exaggerate 3D distortion
      maxAngle:         40,    // keep the user's folds within a range of -40 to 40 degrees
      shading:          'soft',// change the shading type
      touchEnabled: false,
    });
    console.log(folded);
    // folded.accordion(30, 'bottom');

  // folded.foldUp();

  return (
    <section className="splash-page" id="splash-page">
      <div className="splash-space" ref={ref} />
      <div className="bg-dark" />
      <img className="curtain paper" id="left" src={Curtain} alt="" />
      {inView && (
        <>
          <img className="curtain" id="right" src={Curtain} alt="" />
          <Plaque>
            <h1>Humaira Zaman</h1>
            <h3>Software Developer</h3>
          </Plaque>
        </>
      )}
    </section>
  );
};

export default SplashPage;
