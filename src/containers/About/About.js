import React from 'react';

import Section from '../../components/Section/Section';
import Line from '../../components/Line/Line';

import classes from './About.module.scss';

const about = () => {
    return (
    	<section className = { classes.About }>
    		<Section id = 'about' name = "Let's Go!" />

			<article className = { classes.Article }>
				<h1>About Me</h1>
				<Line />
					<p>I have recently graduated with a Bachelor’s degree in Computer Science at Brunel University with first class honours. But before coming to the UK, I grew up in Malaysia where I completed my pre-university studies and majored in Business and Psychology.</p>
					<br/>
					<p>During my pre-university studies, I was learning how to code and develop simple java projects in my free time. When I graduated college in 2018, I discovered that my interests and passion lies within the technology industry.</p>
				<Line />
			</article>
    	</section>
    );
}

export default about;
