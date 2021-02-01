import React from 'react';

import classes from './Logo.module.scss';

const logo = () => {
    return (
    	<a className = { classes.Logo } href = '#top'>
            <span>MH</span>
        </a>
    );
}

export default logo;
