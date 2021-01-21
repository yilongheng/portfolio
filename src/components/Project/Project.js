import React from 'react';

import classes from './Project.module.scss';

const project = (props) => {
    return (
    	<div className = { classes.Project }>
    		<div className = { classes.Icon }><img src = { props.icon } alt = '' /></div>

            <div className = { classes.Info }>
                <h1 className = { classes.Title }>About it</h1>
                <p className = { classes.Text }>{ props.about }</p>            
            </div>
            
            <div className = { [classes.Info, classes.Built].join(' ') }>
                <h1 className = { classes.Title }>Built with</h1>
                <ul>
                { 
                    Array.from(props.built).map(tool => <li key = { tool }><span><p className = { classes.Tool }>{ tool }</p></span></li>)
                } 
                </ul>      
            </div>
            
            <div className = { classes.Info }>
                <h1 className = { classes.Title }>View on</h1>
                <a className = { classes.Link } href = { props.github }>GitHub</a>  
                <a className = { classes.Link } href = { props.online }>Online</a>            
            </div>
    	</div>
    );
}

export default project;
