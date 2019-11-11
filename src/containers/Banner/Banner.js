import React from 'react';
import classes from './Banner.module.css';

const banner = () => {
    return (
        <div id = 'top' className = { classes.Background }>
            <div className = { classes.RightSlide } />

            <div className = { classes.Welcome }>
                <h1 className = { classes.Hey }>Hey</h1>
                <h1 className = { classes.There }>there</h1>
            </div>

            <div className = { classes.Bio }>
                <h2>Nice to meet you</h2>
                <p>I am a front-end web developer and I enjoy what I do :)<br/>I would like to take you on my journey, tell you a little about myself<br/>and showcase some of my latest projects I've done!</p>
            </div>

            <a href = '#about' className = { classes.Scroll }>
                <div className = { classes.Arrow } />
            </a>
        </div>
    )
}

export default banner;