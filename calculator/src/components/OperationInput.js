import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	btn: {
		width: '100%',
		height: '100%'
	}
}));

function OperationInput({ operation, setOperation }) {
	const ops = {
		'+': 'plus',
		'-': 'minus',
		'*': 'times',
		'/': 'divide'
	};
	const classes = useStyles();
	return (
		<Button
			className={classes.btn}
			variant="contained"
			color="primary"
			onClick={() => setOperation(operation)}
		>
			<i class={`fas fa-${ops[operation]}`} />
		</Button>
	);
}

export default OperationInput;
