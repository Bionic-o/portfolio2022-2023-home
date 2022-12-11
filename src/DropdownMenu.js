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
                    <Link className="link_decoration" to="/"><li>Home</li></Link>
                    <Link className="link_decoration" to="/projects"><li>Projekte / Projects</li></Link>
                    <Link className="link_decoration" to="/cv"><li>Lebenslauf / CV</li></Link>
                    <Link className="link_decoration" to="/skills"><li>Fähigkeiten / Skills</li></Link>
                    <Link className="link_decoration" to="/aboutme"><li>Über Mich / About Me</li></Link>
                </dl>
            ): null}
        </div>
    )
} 

export default DropdownMenu