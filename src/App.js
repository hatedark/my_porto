import About from "./components/About.js";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import './App.css';
import "./components/css/Navbar.css"
import "./components/css/About.css"
import "./components/css/Projects.css"
import "./components/css/Contact.css"
import "./components/css/Footer.css"

import useScript from './Scripts';

const MyComponent = props => {
  useScript('https://kit.fontawesome.com/dd8b8dbd30.js');
  useScript('https://fonts.googleapis.com/css?family=Poppins:200i,300,400&display=swap');
  useScript('https://fonts.googleapis.com/css?family=Raleway:700&display=swap');
}

function App() {
  MyComponent();
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;