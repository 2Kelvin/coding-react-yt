const Header = () => {
    const headerCSS = {
        // use camelCasing style for the CSS style properties; do not use a "-"
        fontSize: "48px"
    };

    return (
        <h1 style={headerCSS}>Hello World</h1>
    );
}

export default Header;