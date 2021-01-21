import React from 'react';

import Section from '../../components/Section/Section';
import Line from '../../components/Line/Line';

import email from '../../assets/icons/email.png';
import github from '../../assets/icons/github.png';
import linkedin from '../../assets/icons/linkedin.png';

import classes from './Contact.module.scss';

const contact = () => {
    return (
    	<section className = { classes.Contact }>
            <Section id = 'contact' name = 'Get in touch' />

            <div className = { classes.Content }>
                <h1 className = { classes.Promo }>Let's build something great together!</h1>

                <Line />

                <p className = { classes.Description }>I don't work for people, I collaborate with them.<br/>Sound like you? Let’s talk!</p>
                <a href='mailto:justvladon@outlook.com' className = { classes.Email }>Contact</a>
                <p className = { classes.Description }>or reach me out on</p>

                <div className = { classes.Social }>
                    <ul>
                        <li>
                            <a href='mailto:justvladon@outlook.com'><img src = { email } alt = '' /></a>
                            <p>Email</p>
                        </li>
                    </ul>
                    
                    <ul className = { classes.Social }>
                        <li>
                            <a href = 'https://github.com/MiVladie/'><img src = { github } alt = '' /></a>
                            <p>GitHub</p>
                        </li>
                    </ul>
                    
                    <ul className = { classes.Social }>
                        <li>
                            <a href = 'https://linkedin.com/in/mivladie/'><img src = { linkedin } alt = '' /></a>
                            <p>LinkedIn</p>
                        </li>
                    </ul>
                </div>
                
            </div>

    	</section>
    );
}

export default contact;
