const Content = () => {
    const handlePlanetChange = () => {
        const planets = ["Mars", "Earth", "Venus", "Jupiter"];
        const planetIndex = Math.floor(Math.random() * 4);
        return planets[planetIndex];
    };

    // button 'Click Me'
    const handleClick = () => console.log("You clicked me");
    // button 'Name Planet'
    const handleNameClick = planet => console.log(`You clicked ${planet}`);
    // button 'So Eventful'
    const handleEventClick = e => console.log(e.target.innerText);
    // function to handle double clicks, like on the 'main > p' below
    const handleDoubleClicks = () => console.log("You double clicked me, yes?");

    // const contentCSS = {
    //     fontWeight: "700",
    //     color: "magenta",
    //     textDecoration: "underline"
    // };
    // <span style={contentCSS}>{handlePlanetChange()}</span> ->> this was for the code commented above

    return (
        <main>
            <p onDoubleClick={handleDoubleClicks}>
            Welcome to {handlePlanetChange()}
            </p>
            <br></br>
            <button onClick={handleClick}>Click Me</button>
            <br></br>
            <button onClick={() => handleNameClick("Venus")}>Name Planet</button>
            <br></br>
            <button onClick={(e) => handleEventClick(e)}>So Eventful</button>
        </main>
    );
}

export default Content;