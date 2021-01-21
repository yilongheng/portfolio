import React from 'react';

import classes from './Section.module.scss';

const section = (props) => {
    return (
    	<div className = { classes.Section } {...props}>
            <h1>{ props.name }</h1>    		
    	</div>
    );
}

export default section;
