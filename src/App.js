import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Orginization } from "./components/Orginization";
import { Travel } from "./components/Travel";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      {/* <Skills /> */}
      <Projects />
      <Orginization />
      <Travel />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
