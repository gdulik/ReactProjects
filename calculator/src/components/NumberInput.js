import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	btn: {
		width: '100%',
		height: '100%'
	}
}));

function NumberInput({
	number,
	number1,
	number2,
	operation,
	setNumber1,
	setNumber2
}) {
	const classes = useStyles();
	return (
		<Button
			className={classes.btn}
			variant="contained"
			size="large"
			onClick={() =>
				(operation === '' && setNumber1(number1 + `${number}`)) ||
				(operation !== '' && setNumber2(number2 + `${number}`))}
		>
			{number}
		</Button>
	);
}

export default NumberInput;
