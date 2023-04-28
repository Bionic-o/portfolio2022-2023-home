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
          <p id="p01">Nico Weiskopf</p>
          <p id="p02">Wirtschaftsinformatiker</p>
          <hr id="hr"></hr>
          <p id="p03" style={{ fontSize: 9 }}>Bachelor of Professional</p>
        </div>
        <div id="header_menu">
        <DropdownMenu/>
        </div>
      </header>
      <main id="main">
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
          Tel.: +49 152 218 xxx xx<br></br>
          E-Mail: beispiel.name@test.de
        </div>
      </footer>
    </div>
  );
}

export default App;
