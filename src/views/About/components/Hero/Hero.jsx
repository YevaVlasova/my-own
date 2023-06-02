import './Hero.scss';
import React from 'react';
import photo from '../../../../assets/me.webp';

const Hero = () => {
    return (
        <div className="container hero">
            <div className="hero__screen">
                <div className="hero-info">
                    <div className="hero-info__title">
                        <span>Greetings, I'm</span>
                        <h1>Yeva Vlasova</h1>
                        <span>Welcome to my page</span>
                    </div>
                    <p className="hero-info__desc">With a flair for vibrant design and a passion for creating visually stunning experiences, I add a touch of artistic brilliance to every project. My background in front-end development combined with my love for bold aesthetics sets me apart in the dynamic world of web design.</p>
                    <a className='btn hero-info__btn' href="../../../../../public/CV.pdf" download>Download my CV</a>
                </div>
                <div className="hero__photo">
                    <img className='hero__img' src={photo} alt="Yeva Vlasova" />
                </div>
            </div>
            <div className="home-circleP"></div>
            <div className="home-circleY"></div>
            <div className="home-circleS"></div>
        </div>
    );
}
export default Hero;