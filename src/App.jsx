import "./App.css";
import Navbar from "./components/navigation/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="">
      <Navbar />
      <Profile />
      <About />
      <Experience />
    </div>
  );
}

export default App;
