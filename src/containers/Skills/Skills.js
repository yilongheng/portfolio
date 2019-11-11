import React from 'react';

import SectionName from '../../components/SectionName/SectionName';
import Card from '../../components/Card/Card';

import classes from './Skills.module.css';

import tools from '../../assets/images/tools.png';
import code from '../../assets/images/code.png';
import other from '../../assets/images/other.png';

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
    		<SectionName id = 'skills' name = 'My skillset' />

            <p className = { classes.Description }>Below you will see the tools I use most often, front-end development skills I know, and other programming stuff I do. The list is constantly expanding as I enjoy learning new things :)</p>

            <section className = { classes.Cards }>
                <Card 
                    icon = { tools } 
                    name = 'Tools' 
                    description = 'I value simple content structure, clean design patterns, and thoughtful interactions.' 
                    list = { toolsList } />
                    
                <Card 
                    icon = { code } 
                    name = 'Front-end' 
                    description = 'I like to code things from scratch, and enjoy bringing ideas to life in the browser.' 
                    list = { codeList } />
                    
                <Card 
                    icon = { other } 
                    name = 'Other' 
                    description = 'I keep learning and challenging myself in different areas. These are my other technical skills.' 
                    list = { otherList } />
            </section>
    	</section>
    );
}

export default skills;
