import './AboutMe.scss';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import nicole from '../../../../assets/Nicole.webp';
import coffee from '../../../../assets/coffee.webp';
import wall from '../../../../assets/wall.webp';
import work from '../../../../assets/workSpace.webp';
import tools from '../../../../assets/workTools.webp';
import mountain from '../../../../assets/mountains.webp';

const AboutMe = () => {
    return (
        <div className="second">
            <div className="container about">
                <div className="about__title">Beyond the Resume</div>
                <div className="about__desc">Curious to discover more about me beyond what's written in my CV? Swipe through these delightful cards to uncover some interesting and amusing facts!</div>
                <div className="about-list">
                <Carousel
                    showArrows={false}
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={true}
                    // showThumbs={false}
                    useKeyboardArrows={true}
                    autoPlay={false}
                    // autoPlay={true}
                    stopOnHover={true}
                    swipeable={true}
                    dynamicHeight={false}
                    emulateTouch={true}
                    infiniteLoop={true}
                    centerMode={true}
                    centerSlidePercentage={25}
                    >
                    <div className="box _pin">
                        <span></span>
                        <div className="content">
                            <div className="content__img"><img src={nicole} alt="" /></div>
                            <div className="content__info">
                                <h3>Cat Nicole</h3>
                                <p>I have a toothless cat who holds a special place in my heart, rescued from an animal shelter.</p>
                            </div>
                        </div>
                    </div>
                    <div className="box _purp">
                        <span></span>
                        <div className="content">
                            <div className="content__img"><img src={coffee} alt="" /></div>
                            <div className="content__info">
                                <h3>Morning routine</h3>
                                <p>I savor the mornings with a large cup of coffee, and its flavor is elevated with a splash of almond milk.</p>
                            </div>
                        </div>
                    </div>
                    <div className="box _yell">
                        <span></span>
                        <div className="content">
                            <div className="content__img"><img src={wall} alt="" /></div>
                            <div className="content__info">
                                <h3>Fearless to challenges</h3>
                                <p>I ventured into creating a stunning marble-like wall plastering in my own room.</p>
                            </div>
                        </div>
                    </div>
                    <div className="box _pin">
                        <span></span>
                        <div className="content">
                            <div className="content__img"><img src={mountain} alt="" /></div>
                            <div className="content__info">
                                <h3>Crisp air</h3>
                                <p>I shave a 'peak' preference for mountains over the 'shore' charm of the sea!</p>
                            </div>
                        </div>
                    </div>
                    <div className="box _purp">
                        <span></span>
                        <div className="content">
                            <div className="content__img"><img src={work} alt="" /></div>
                            <div className="content__info">
                                <h3>On weekends</h3>
                                <p>I take great satisfaction in maintaining a pristine work area.</p>
                            </div>
                        </div>
                    </div>
                    <div className="box _yell">
                        <span></span>
                        <div className="content">
                            <div className="content__img"><img src={tools} alt="" /></div>
                            <div className="content__info">
                                <h3>Pixel wizard</h3>
                                <p>When I dive into the realm of digital art, my graphics tablet becomes a magic wand, unleashing a whimsical world and pixels party!</p>
                            </div>
                        </div>
                    </div>
                </Carousel> 
                </div>
            </div>
        </div>
    );
}
export default AboutMe;