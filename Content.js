const Content = () => {
    const handlePlanetChange = () => {
        const planets = ["Mars", "Earth", "Venus", "Jupiter"];
        const planetIndex = Math.floor(Math.random() * 4);
        return planets[planetIndex];
      }
    
    return (
        <main>
            <p>
            Welcome to planet {handlePlanetChange()}
            </p>
        </main>
    );
}

export default Content;