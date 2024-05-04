import './App.css';

import './css/plugins/feature.css'
// import './css/vendor/aos.css'
import './css/vendor/bootstrap.min.css'
import './css/vendor/slick-theme.css'
import './css/vendor/slick.css'
import './css/style.css'


// import './js/main1.js'
// import './js/main.js'



import Header from './components/header/Header'
import Slider from './components/slider/Slider'
import Education from './components/education/Education'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import ArrowButtton from './components/arrowbutton/ArrowButton';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <ArrowButtton />
      <Footer />
    </>
  );
}

export default App;
