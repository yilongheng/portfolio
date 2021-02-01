import React from 'react';
import classes from './Banner.module.scss';

const banner = () => {
    return (
        <div id = 'top' className = { classes.Background }>
            <div className = { classes.RightSlide } />

            <div className = { classes.Welcome }>
                <div className = { classes.HeyBox }><h1 className = { classes.Hey }>Hi</h1></div>
                <div className = { classes.ThereBox }><h1 className = { classes.There }>there</h1></div>
            </div>

            <div className = { classes.Bio }>
                <h2>I am Marcus, nice to meet you!</h2>
                <p>I am a passionate Software Engineer and Front-End Web Developer.
                <br/>
                <br/>
                Below I will tell you a little bit more about myself, guide you through my work experience, and showcase some of my projects that I have developed.</p>
            </div>

            <a href = '#about' className = { classes.Scroll }>
                <div className = { classes.Arrow } />
            </a>
        </div>
    )
}

export default banner;