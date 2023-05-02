import Bewerbungsfoto from "./assets/Bewerbungsfoto00.jpg"

function Home () {
    return (
        <div id="Home">
                <img id="Bewerbungsfoto" src={Bewerbungsfoto} alt="Mypic"></img>
                <div>
                    <p id="Key_Skills">Key-Qualifications:</p>
                    <ul id="home_list">
                        <li>- C#</li>
                        <li>- HTML, CSS, JS, React</li>
                        <li>- ERP Systems (Wilkens, SAP)</li>
                        <li>- </li>
                    </ul>
                </div>
        </div>
    )
}

export default Home