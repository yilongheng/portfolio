import React from 'react';

import classes from './SectionName.module.css';

const sectionName = (props) => {
    return (
    	<div className = { classes.Section } {...props}>
            <h1>{ props.name }</h1>    		
    	</div>
    );
}

export default sectionName;
