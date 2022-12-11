import { useState } from "react"
import { Link } from "react-router-dom";


function DropdownMenu () {
    const [state, setState] = useState(false);
    function showDropdown () {
        setState(true);
    }
    function hideDropdown () {
        setState(false);
    }
    return (
        <div id="dropdown" onMouseOver={showDropdown} onMouseLeave={hideDropdown}>
        <img id="menu" src="/images/menu.png" alt="menu" onMouseOver={showDropdown} onMouseLeave={hideDropdown}></img>
            {state ? (
                <dl id="dropdown_list" onMouseEnter={showDropdown}>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/projects"><li>Projekte / Projects</li></Link>
                    <Link to="/cv"><li>Lebenslauf / CV</li></Link>
                    <Link to="/skills"><li>Fähigkeiten / Skills</li></Link>
                    <Link to="/aboutme"><li>Über Mich / About Me</li></Link>
                </dl>
            ): null}
        </div>
    )
} 

export default DropdownMenu