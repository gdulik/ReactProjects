import React from 'react';
import withStyles from 'react-jss';
import styles from '../styles/TitleStyles';

function Title({ classes }) {
	return (
		<div className={classes.title}>
			<h2>Our Menu</h2>
			<div className={classes.underline} />
		</div>
	);
}

export default withStyles(styles)(Title);
