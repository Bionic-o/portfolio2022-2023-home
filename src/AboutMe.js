import { useState } from "react"

function AboutMe () {

    const [gender, setGender] = useState(true);
    function toggleGender () {
        setGender(!gender)
    }

    return (
        <div id = "AboutMe">
            <div id="contactform">
                <h3>Contact Me</h3>
                    <form id="contactblock">
                        <input className="geschlecht" type="radio" name="test" value="Frau" checked={gender} onChange={toggleGender}/>Frau
                        <input className="geschlecht" type="radio" name="test" value="Herr" checked={!gender} onChange={toggleGender}/>Herr
                        <input id="vorname" type="text" placeholder="Vorname*"/>
                        <input id="nachname" type="text" placeholder="Nachname*"/>
                        <input id="email" type="text" placeholder="Email*"/>
                        <input id ="telefon" type="text" placeholder="Telefon* (optional)"/>
                    </form>
            </div>
            <div id="contactinfo">
            
            </div>
        </div>
    )
}

export default AboutMe