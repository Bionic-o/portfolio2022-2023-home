import Bewerbungsfoto from "./assets/Bewerbungsfoto.jpg"

function Home () {
    return (
        <div id="Home">
                <img id="Bewerbungsfoto" src={Bewerbungsfoto} alt="Mypic"></img>
                <div>
                    <p id="Key_Skills">Schlüssel-Qualifikationen:</p>
                    <hr id="hr_home"></hr>
                    <ul id="home_list">
                        <li>Projektmanagement</li>
                        <li>Betriebswirtschaftliche Prozesse</li>
                        <li>HTML, CSS, JS, React, C#</li>
                        <li>ERP Systeme (Wilkens, SAP)</li>
                        <li>Datenbanken (SQL)</li>
                        <li>Kommunikation</li>
                    </ul>
                </div>
        </div>
    )
}

export default Home