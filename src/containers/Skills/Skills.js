import React from 'react';

import Section from '../../components/Section/Section';
import Card from '../../components/Card/Card';

import classes from './Skills.module.scss';

import tools from '../../assets/icons/tools.png';
import code from '../../assets/icons/code.png';
import other from '../../assets/icons/other.png';

const skills = () => {
    const toolsList = [
        'VS Code',
        'Adobe Xd',
        'Adobe Premier',
        'Photoshop',
        'Office 365'
    ]    

    const codeList = [
        'HTML5',
        'CSS3 (Sass)',
        'JavaScript (ES6)',
        'ReactJS (w/ Redux)',
        'Databases / APIs',
        'JSON / AJAX'
    ]

    const otherList = [
        'Unity3D',
        'C++ / C#',
        'Java',
        'Ecommerce',
        'Facebook Ads',
        'Google Adsense'
    ]

    return (
    	<section className = { classes.Skills }>
    		<Section id = 'skills' name = 'My skillset' />

            <p className = { classes.Description }>Underneath are all the tools I use to make my projects, the key focal point being front-end development work. Other tools and programming languages have been included but are not my main focus at the moment. The list below details the specifics and is constantly growing.</p>

            <section className = { classes.Cards }>
                <Card 
                    icon = { tools } 
                    name = 'Tools' 
                    description = 'I appreciate easy content structure, clear design patterns and friendly user interations.' 
                    list = { toolsList } />
                    
                <Card 
                    icon = { code } 
                    name = 'Front-end' 
                    description = 'I like coding from the ground up and introducing new ideas onto the web page.' 
                    list = { codeList } />
                    
                <Card 
                    icon = { other } 
                    name = 'Other' 
                    description = 'I keep learning and challenging myself in different areas to make myself versatile in other technical skills.' 
                    list = { otherList } />
            </section>
    	</section>
    );
}

export default skills;
