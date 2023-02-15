import Plaque from '../components/Plaque';
import Curtain from '../images/bg/curtains.jpg';
import { useInView } from 'react-intersection-observer';
import { buildThreshold } from '../helpers/helper';

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

  return (
    <section className="splash-page" id="splash-page">
      <div className="splash-space" ref={ref} />
      {inView && (
        <>
          <div className="bg-dark" />
          <img className="curtain" id="left" src={Curtain} alt="" />
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
