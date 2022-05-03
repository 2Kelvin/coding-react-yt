const Content = () => {
    const handlePlanetChange = () => {
        const planets = ["Mars", "Earth", "Venus", "Jupiter"];
        const planetIndex = Math.floor(Math.random() * 4);
        return planets[planetIndex];
    }
    const contentCSS = {
        fontWeight: "700",
        color: "magenta",
        textDecoration: "underline"
    };

    return (
        <main>
            <p>
            Welcome to planet <span style={contentCSS}>{handlePlanetChange()}</span>
            </p>
        </main>
    );
}

export default Content;