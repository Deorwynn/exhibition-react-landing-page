import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_green">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">Exotica</div>
                <div className="footer_copyright">
                    Exotica 2018. All rights reserved.
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;