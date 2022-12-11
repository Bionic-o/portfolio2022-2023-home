import "./App.css"
import DropdownMenu from "./DropdownMenu";
import {Routes, Route } from "react-router-dom";
import Home from "./Home";
import AboutMe from "./AboutMe";
import CV from "./CV";
import Projects from "./Projects";
import Skills from "./Skills";

function App() {
  return (
    <div id="App">
      <header id="header">
        <div id="header_text">
          <span id="span01">Mein Portfolio</span>
          <br></br>
          <span id="span02"> ~~ Nico Weiskopf ~~</span>
        </div>
        <div id="header_menu">
        <DropdownMenu/>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="projects" element={<Projects />}></Route>
          <Route path="/cv" element={<CV />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/aboutme" element={<AboutMe />}></Route>
        </Routes>
      </main>
      <footer id = "footer">
        <div>
          Nico Weiskopf<br></br>
          Tel.: +49 152 218 321 58<br></br>
          E-Mail: weiskopf.bionico@gmail.com
        </div>
      </footer>
    </div>
  );
}

export default App;
