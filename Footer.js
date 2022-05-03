import React from 'react'

const Footer = () => {
    const today = new Date();
    return (
        <h6>
            <p>
                Copyright &copy; {today.getFullYear()}
            </p>
        </h6>
    );
}

export default Footer;