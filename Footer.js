import React from 'react'

const Footer = () => {
    const today = new Date();
    return (
        <h6>
            <p style={{color:"orange", fontWeight:"bold"}}>
                Copyright &copy; {today.getFullYear()}
            </p>
        </h6>
    );
}

export default Footer;