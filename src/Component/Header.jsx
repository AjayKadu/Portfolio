import './header.css';
import Navbar from './Navbar';

function Header() {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="container-fluid">
                        <div className="row">
                            {/* Navbar within the background image */}
                            <Navbar />
                            <section id="header">
                                <div className="col-md-6">
                                    <h1 id="txtHeading">
                                        {["H", "e", "l", "l", "o", ",", " ", "I", "'", "m", " ", "A", "j", "a", "y", " ", "K", "a", "d", "u"].map(
                                            (letter, index) => (
                                                <span
                                                    key={index}
                                                    className={letter === " " ? "space" : ""}
                                                    style={{ animationDelay: `${index * 0.05}s` }} // Faster animation for Hello line
                                                >
                                                    {letter === " " ? "\u00A0" : letter}
                                                </span>
                                            )
                                        )}
                                    </h1>
                                    <h2 id="jobHeading">
                                        {["F", "u", "l", "l", " ", "S", "t", "a", "c", "k ", " ", "D", "e", "v", "e", "l", "o", "p", "e", "r"].map(
                                            (letter, index) => (
                                                <span
                                                    key={index}
                                                    className={letter === " " ? "space" : ""}
                                                    style={{ animationDelay: `${index * 0.05 + 1}s` }} // Simultaneous with Hello line
                                                >
                                                    {letter === " " ? "\u00A0" : letter}
                                                </span>
                                            )
                                        )}
                                    </h2>
                                    <p id="aboutMe">
                                        I am a Full Stack Developer specializing in designing and developing websites and mobile applications. My expertise lies in utilizing MERN and Java Full Stack technologies to deliver high-quality, scalable solutions.
                                    </p>
                                </div>
                                <div className="col-md-6" id="imgDiv">
                                    <div id="back">
                                        <img src="/Images/Ajay.png" alt="Ajay's Photo" />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <hr />
        </>
    );
}

export default Header;
