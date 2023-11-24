import AboutMe from "./Pages/AboutMe/AboutMe";
import Skills from "./Pages/Skills/Skills";
import Header from "./Layout/Header/Header";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import Banner from "./Components/Banner/Banner";
import Footer from "./Layout/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
