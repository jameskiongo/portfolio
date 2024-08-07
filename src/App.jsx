import "./App.css";
import Navbar from "./components/navigation/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Project from "./components/Project";

function App() {
  return (
    <div className="">
      <Navbar />
      <Profile />
      <About />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
