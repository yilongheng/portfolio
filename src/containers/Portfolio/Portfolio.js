import React from 'react';

import Section from '../../components/Section/Section';
import Line from '../../components/Line/Line';
import Project from '../../components/Project/Project';

import myJournal from '../../assets/projects/myJournal.jpg';
import finchRobot from '../../assets/projects/finchRobot.jpg';
import explosiveTrivia from '../../assets/projects/explosiveTrivia.jpg';

import classes from './Portfolio.module.scss';

const portfolio = () => {
    return (
    	<section className = { classes.Portfolio }> 
            <Section id = 'portfolio' name = 'Projects' />

            <p className = { classes.Description }></p>

            <Project 
                icon = { finchRobot } 
                about = "The Finch is a robot that responds to light, temperature, obstacles, and touch. I wrote a program for the Finch to follow a movement command, based on a user's input. This meant the Finch could even draw shapes such as squares, circles, or zig-zags."
                built = { ['Java', 'Eclipse', 'Finch', 'Swing Toolkit'] } />
                
            <Line />

            <Project 
                icon = { myJournal } 
                about = "myJournal is an interactive web application that allows users to submit daily journal entries and answer short daily quizzes regarding their current mental state which will allow them to monitor their mental health over time."
                built = { ['ReactJS', 'HTML5', 'CSS3 (Sass)','JavaScript (ES6)'] } />
                
            <Line />
            
            <Project 
                icon = { explosiveTrivia } 
                about = 'Explosive Trivia is an iOS app that I am currently developing. It is a trivia game where users have to answer questions within a certain timeframe and any incorrect or prolonged delays in answers will cause a ticking timebomb to explode.' 
                built = { ['Swift', 'XCode'] }  />

             <Line />
            
            <Project 
                icon = { detectiNav } 
                about = 'DetectiNav is the project I developed for my Final Year Project at Brunel University. THe goal of the mobile application was to integrate an object detection system that will detect the surrounding obstacles of a visually impaired navigator and notify them of these obstructions.' 
                built = { ['Java', 'Python', 'Android Studio', 'TensorFlow'] }  />
    	</section>
    );
}

export default portfolio;
