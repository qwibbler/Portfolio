import SplashPage from './pages/Splash';
import WelcomePage from './pages/Welcome';
import ProjectPage from './pages/Projects';
import AboutPage from './pages/About';
import './App.css';

function App() {
  return (
    <>
      <SplashPage />
      <main>
        <WelcomePage />
        <div className="gap" />
        <ProjectPage />
        <div className="gap" />
        <AboutPage />
      </main>
    </>
  );
}

export default App;
