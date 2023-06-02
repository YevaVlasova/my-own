import './Footer.scss';
import '../../../../src/index.js';
import React from 'react';
import CurrentYear from './CurrentYear';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="bg">
            <footer className="container footer">
                <div className="footer__screen">
                    <div className="copy">
                        <span className="copyright">© <CurrentYear /> Designed by Yeva Vlasova, All Rights Reserved</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default Footer;