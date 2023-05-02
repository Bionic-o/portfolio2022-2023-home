import { useState } from "react"
import { NavLink } from "react-router-dom";
import icon from "./assets/menu04.png"


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
                    <NavLink className="link_decoration" onClick={hideDropdown} to="/portfolio2022-2023-home"><li>Home</li></NavLink>
                    <NavLink className="link_decoration" onClick={hideDropdown}  to="/portfolio2022-2023/cv"><li>Lebenslauf / CV</li></NavLink>
                    <NavLink className="link_decoration" onClick={hideDropdown}  to="/portfolio2022-2023/skills"><li>Fähigkeiten / Skills</li></NavLink>
                    <NavLink className="link_decoration" onClick={hideDropdown}  to="/portfolio2022-2023/projects"><li>Projekte / Projects</li></NavLink>
                    <NavLink className="link_decoration" onClick={hideDropdown} to="/portfolio2022-2023/aboutme"><li>Über Mich / About Me</li></NavLink>
                </dl>
            ): null}
        </div>
    )
} 

export default DropdownMenu