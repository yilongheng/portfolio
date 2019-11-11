import React from 'react';

import SectionName from '../../components/SectionName/SectionName';
import Line from '../../components/Line/Line';
import Project from '../../components/Project/Project';

import burgerBuilder from '../../assets/images/projects/burgerbuilder.png';
import journeyPlanner from '../../assets/images/projects/journeyplanner.png';

import classes from './Portfolio.module.css';

const portfolio = () => {
    return (
    	<section className = { classes.Portfolio }> 
            <SectionName id = 'portfolio' name = 'Projects' />

            <p className = { classes.Description }>Below you will see the tools I use most often, front-end development skills I know, and other programming stuff I do. The list is constantly expanding as I enjoy learning new things :)</p>

            <Line />

            <Project 
                icon = { journeyPlanner } 
                about = 'Journey Planner for London allows you to find routes from entered location to the desired point. The user will be provided with all required instructions, bus/tube links, along with the map with visualised routes.'
                built = { ['ReactJS', 'React Hooks', 'Google Maps API', 'TFL API'] }
                github =  'https://github.com/MiVladie/journeyplanner'
                online = 'https://mivladie.github.io/journeyplanner/' />
                
            <Line />

            <Project 
                icon = { burgerBuilder } 
                about = 'A Burger Builder App is an application where user can design their custom burger using suggested ingredients and place an order. The data about the user and his order are then stored in a database.'
                built = { ['ReactJS', 'Redux', 'React Hooks', 'Google Firebase'] }
                github =  'https://github.com/MiVladie/burgerbuilder'
                online = 'https://mivladie.github.io/burgerbuilder/' />
                
            <Line />
            
            <Project 
                icon = '' 
                about = 'Curabitur venenatis convallis purus et tincidunt. Praesent elementum vitae libero eget suscipit. Phasellus a ipsum at eros maximus maximus eu ac sapien.' 
                built = '' 
                view = '' />
    	</section>
    );
}

export default portfolio;
