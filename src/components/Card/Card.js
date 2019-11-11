import React from 'react';

import Line from '../Line/Line';

import classes from './Card.module.css';

const card = (props) => {
    return (
    	<div className = { classes.Card }>
            <img src = { props.icon } alt = ''/>
            <h1>{ props.name }</h1>
            <Line />
            <p className = { classes.About }>{ props.description }</p>
            { props.list.map(skill => <p key = { skill } className = { classes.Skill }>{ skill }</p>) }
    	</div>
    );
}

export default card;
