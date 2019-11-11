import React from 'react';

import SectionName from '../../components/SectionName/SectionName';
import Line from '../../components/Line/Line';

import classes from './About.module.css';

const about = () => {
    return (
    	<section className = { classes.About }>
    		<SectionName id = 'about' name = "Let's meet!" />

			<article className = { classes.Article }>
				<h1>Hello there</h1>
				<Line />
					<p>Curabitur venenatis convallis purus et tincidunt. Praesent elementum vitae libero eget suscipit. Phasellus a ipsum at eros maximus maximus eu ac sapien. Phasellus interdum enim risus, quis eleifend tortor faucibus quis. Proin varius vulputate fringilla. Duis quis magna nisl. In porta arcu ut felis ultricies, sit amet imperdiet dolor ornare. Etiam varius lacus vel mauris viverra, vel hendrerit nisl vestibulum.</p>
					<br/>
					<p>Curabitur venenatis convallis purus et tincidunt. Praesent elementum vitae libero eget suscipit. Phasellus a ipsum at eros maximus maximus eu ac sapien. Phasellus interdum enim risus, quis eleifend tortor faucibus quis.</p>
				<Line />
			</article>
    	</section>
    );
}

export default about;
