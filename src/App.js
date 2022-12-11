import "./App.css"
import DropdownMenu from "./DropdownMenu";

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
