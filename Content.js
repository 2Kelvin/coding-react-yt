import { useState } from "react";

const Content = () => {
    const [planet, setPlanet] = useState('Earth');

    const handlePlanetChange = () => {
        const planets = ["Mars", "Earth", "Venus", "Jupiter", "Mercury", "Neptune"];
        const planetIndex = Math.floor(Math.random() * planets.length);
        setPlanet(planets[planetIndex]);
    };

    return (
        <main>
            <p> Welcome to {planet} </p>
            <br></br>

            <button onClick={handlePlanetChange}>Switch Planet</button>
        </main>
    );
}

export default Content;