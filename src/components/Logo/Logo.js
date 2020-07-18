import React from 'react';

import classes from './Logo.module.css';

const logo = () => {
    return (
    	<a className = { classes.Logo } href = '#top'>
            <span>VT</span>
        </a>
    );
}

export default logo;