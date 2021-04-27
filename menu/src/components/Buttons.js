import React from 'react';
import withStyles from 'react-jss';
import styles from '../styles/ButtonStyles';

function Buttons({ classes, categories, onCategorySelect }) {
	const renderButtons = () => {
		return categories.map((category) => (
			<button
				className={classes.btn}
				onClick={() => onCategorySelect(category)}
			>
				{category}
			</button>
		));
	};
	return <div className={classes.main}>{renderButtons()}</div>;
}

export default withStyles(styles)(Buttons);
