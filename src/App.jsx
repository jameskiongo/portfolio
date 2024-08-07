import "./App.css";
import Navbar from "./components/navigation/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="">
      <Navbar />
      <Profile />
      <About />
      <div>
        <Experience />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default App;
