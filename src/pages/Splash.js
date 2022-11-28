import Plaque from '../components/Plaque';

const SplashPage = () => {
  return (
    <section class="splash-page" id="splash-page">
      <div class="splash-space" />
      <div class="bg-dark" />
      <img class="curtain" id="left" src="./images/bg/curtains.jpg" alt="" />
      <img class="curtain" id="right" src="./images/bg/curtains.jpg" alt="" />
      <Plaque>
        <h1>Humaira Zaman</h1>
        <h3>Software Developer</h3>
      </Plaque>
    </section>
  );
};

export default SplashPage;
