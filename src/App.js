import SplashPage from './pages/Splash';
import WelcomePage from './pages/Welcome';
import ProjectPage from './pages/Projects';
import './App.css';

function App() {
  return (
    <>
      <SplashPage />
      <main>
        <WelcomePage />
        <div class="gap" />
        <ProjectPage />
        <div class="gap" />
      </main>
    </>
  );
}

export default App;
