import Plaque from '../components/Plaque';
import Curtain from '../images/bg/curtains.jpg';

const SplashPage = () => {
  return (
    <section className="splash-page" id="splash-page">
      <div className="splash-space" />
      <div className="bg-dark" />
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
