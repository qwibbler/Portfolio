import SplashPage from './pages/Splash';
import WelcomePage from './pages/Welcome';
import ProjectPage from './pages/Projects';
import AboutPage from './pages/About';
import './main.scss';
import ContactPage from './pages/Contact';

function App() {
  return (
    <>
      <SplashPage />
      <main>
        <WelcomePage />
        {/* <div className="gap" /> */}
        <ProjectPage />
        {/* <div className="gap" /> */}
        <AboutPage />
        {/* <div className="gap" /> */}
        <ContactPage />
      </main>
    </>
  );
}

export default App;
