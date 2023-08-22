import Bewerbungsfoto from "./assets/Bewerbungsfoto.jpg"

function Home () {
    return (
        <div id="Home">
                <img id="Bewerbungsfoto" src={Bewerbungsfoto} alt="Mypic"></img>
                <div>
                    <p id="Key_Skills">Schlüssel-Qualifikationen:</p>
                    <hr id="hr_home"></hr>
                    <ul id="home_list">
                        <li className="home_list">Projektmanagement</li>
                        <li className="home_list">Betriebswirtschaftliche Prozesse</li>
                        <li className="home_list">HTML, CSS, JS, React, C#</li>
                        <li className="home_list">ERP Systeme (Wilkens, SAP)</li>
                        <li className="home_list">Datenbanken (SQL)</li>
                        <li className="home_list">Kommunikation</li>
                    </ul>
                </div>
        </div>
    )
}

export default Home