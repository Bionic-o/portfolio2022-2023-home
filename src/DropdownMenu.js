import { useState } from "react"
import { Routes, Route } from 'react-router-dom'

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
                    <li>Home</li>
                    <li>Projekte / Projects</li>
                    <li>Lebenslauf / CV</li>
                    <li>Fähigkeiten / Skills</li>
                    <li>Über Mich / About Me</li>
                </dl>
            ): null}
        </div>
    )
} 

export default DropdownMenu