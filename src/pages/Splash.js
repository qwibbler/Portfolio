import Plaque from '../components/Plaque';

const SplashPage = () => {
  return (
    <section className="splash-page" id="splash-page">
      <div className="splash-space" />
      <div className="bg-dark" />
      <img className="curtain" id="left" src="./images/bg/curtains.jpg" alt="" />
      <img className="curtain" id="right" src="./images/bg/curtains.jpg" alt="" />
      <Plaque>
        <h1>Humaira Zaman</h1>
        <h3>Software Developer</h3>
      </Plaque>
    </section>
  );
};

export default SplashPage;
