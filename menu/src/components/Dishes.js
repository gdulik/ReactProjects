import React from 'react';
import withStyles from 'react-jss';
import styles from '../styles/DishesStyles';

function Dishes({ classes, dishes }) {
	return (
		<div className={classes.sectionCenter}>
			{dishes.map((dish) => (
				<div className={classes.menuItem}>
					<img
						className={classes.photo}
						src={dish.img}
						alt={dish.title}
					/>
					<div className={classes.itemInfo}>
						<header>
							<h4>{dish.title}</h4>
							<h4 className={classes.price}>${dish.price}</h4>
						</header>
						<p className={classes.itemText}>{dish.desc}</p>
					</div>
				</div>
			))}
		</div>
	);
}

export default withStyles(styles)(Dishes);
