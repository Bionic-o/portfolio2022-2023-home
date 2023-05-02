import { useState } from "react"
import { Link } from "react-router-dom";
import icon from "./assets/menu00.png"


function DropdownMenu () {
    const [state, setState] = useState(false);
    function showDropdown () {
        if (state === false)
        setState(true);
        else (
            setState(false)
        )
    }
    function hideDropdown () {
        setState(false);
    }
    return (
        <div id="dropdown">
        <img id="menu" src={icon} alt="menu" onClick={showDropdown}></img>
            {state ? (
                <dl id="dropdown_list">
                    <Link className="link_decoration" onClick={hideDropdown} to="/portfolio2022-2023-home"><li>Home</li></Link>
                    <Link className="link_decoration" onClick={hideDropdown}  to="/portfolio2022-2023/cv"><li>Lebenslauf / CV</li></Link>
                    <Link className="link_decoration" onClick={hideDropdown}  to="/portfolio2022-2023/skills"><li>Fähigkeiten / Skills</li></Link>
                    <Link className="link_decoration" onClick={hideDropdown}  to="/portfolio2022-2023/projects"><li>Projekte / Projects</li></Link>
                    <Link className="link_decoration" onClick={hideDropdown} to="/portfolio2022-2023/aboutme"><li>Über Mich / About Me</li></Link>
                </dl>
            ): null}
        </div>
    )
} 

export default DropdownMenu