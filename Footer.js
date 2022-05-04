const Footer = () => {
    const today = new Date();
    return (
        <footer>
            <p>
                Copyright &copy; {today.getFullYear()}
                {/* style={{color:"orange", fontWeight:"bold"}} ->> example of in-line styling I had used in the <> tag above */}
            </p>
        </footer>
    );
}

export default Footer;