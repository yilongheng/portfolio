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
                <h2>Nice to meet you</h2>
                <p>I am a front-end web developer who takes pride in what I do.<br/>I would like to tell you a little about myself and walk you through my latest work while showcasing you some of my best projects.</p>
            </div>

            <a href = '#about' className = { classes.Scroll }>
                <div className = { classes.Arrow } />
            </a>
        </div>
    )
}

export default banner;