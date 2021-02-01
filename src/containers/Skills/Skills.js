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
        'Eclipse',
        'GitHub',
        'SPSS',
        'Photoshop',
        'Office 365'
    ]    

    const codeList = [
        'Java',
        'SQL',
        'HTML5',
        'CSS3 (Sass)',
        'JavaScript (ES6)',
        'ReactJS'
    ]

    const otherList = [
        'Swift',
        'Python',
        'Visual Basic',
        'Snoopy'
    ]

    return (
    	<section className = { classes.Skills }>
    		<Section id = 'skills' name = 'My skillset' />

            <p className = { classes.Description }></p>

            <section className = { classes.Cards }>
                <Card 
                    icon = { tools } 
                    name = "Tools & IDE's" 
                    description = "Below I have listed the tools and IDE's that I utilize to develop my projects."
                    list = { toolsList } />
                    
                <Card 
                    icon = { code } 
                    name = 'Programming Languages' 
                    description = 'I enjoy coding from the ground up and developing projects in my free time. Below are the few programming languages that I am comfortable coding with.' 
                    list = { codeList } />
                    
                <Card 
                    icon = { other } 
                    name = 'Other' 
                    description = 'As an individual that likes to take on challenges and engage in innovative projects, I always try to challenge myself to learn new programming languages.' 
                    list = { otherList } />
            </section>
    	</section>
    );
}

export default skills;
