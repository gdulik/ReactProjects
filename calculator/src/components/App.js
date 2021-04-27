import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import NumberInput from './NumberInput';
import OperationInput from './OperationInput';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 275
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)'
	},
	title: {
		fontSize: 14
	},
	pos: {
		marginBottom: 12
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary
	},
	btn: {
		width: '100%',
		height: '100%'
	},
	field: {
		width: '100%',
		'& input': {
			textAlign: 'right'
		},
		caretColor: 'transparent'
	}
}));

function App() {
	const [ number1, setNumber1 ] = useState('');
	const [ number2, setNumber2 ] = useState('');
	const [ operation, setOperation ] = useState('');
	const [ result, setResult ] = useState('');
	const classes = useStyles();

	const calculate = () => {
		if (operation === '+') {
			setResult(String(Number(number1) + Number(number2)));
		} else if (operation === '-') {
			setResult(String(Number(number1) - Number(number2)));
		} else if (operation === '*') {
			setResult(String(Number(number1) * Number(number2)));
		} else if (operation === '/') {
			setResult(String(Number(number1) / Number(number2)));
		} else {
			setResult('NaN');
		}
		setNumber1('');
		setNumber2('');
		setOperation('');
	};

	const setPercentage = () => {
		if (result !== '') {
			setResult(String(Number(result) * 100));
		} else if (number2 !== '') {
			setNumber2(String(Number(number2) * 100));
		} else if (number1 !== '') {
			setNumber1(String(Number(number1) * 100));
		}
	};

	const setOpposite = () => {
		if (result !== '') {
			setResult(String(-Number(result)));
		} else if (number2 !== '') {
			setNumber2(String(-Number(number2)));
		} else if (number1 !== '') {
			setNumber1(String(-Number(number1)));
		}
	};

	return (
		<div style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
			<Container maxWidth="xs">
				<Card className={classes.root}>
					<CardContent>
						<Typography variant="h3" gutterBottom color="primary">
							React Calculator
						</Typography>
						<TextField
							className={classes.field}
							id="outlined-basic"
							variant="outlined"
							value={result || number2 || number1}
						/>
					</CardContent>
					<CardActions>
						<Grid container spacing={2}>
							<Grid item xs={3}>
								<Button
									className={classes.btn}
									variant="contained"
									size="large"
									color="secondary"
									onClick={() => {
										setNumber1('');
										setNumber2('');
										setOperation('');
										setResult('');
									}}
								>
									Clear
								</Button>
							</Grid>
							<Grid item xs={3}>
								<Button
									className={classes.btn}
									variant="contained"
									color="primary"
									onClick={setOpposite}
								>
									+/-
								</Button>
							</Grid>
							<Grid item xs={3}>
								<Button
									className={classes.btn}
									variant="contained"
									size="large"
									color="primary"
									onClick={setPercentage}
								>
									<i class="fas fa-percentage" />
								</Button>
							</Grid>
							<Grid item xs={3}>
								<OperationInput
									operation={'/'}
									setOperation={setOperation}
								/>
							</Grid>
							<Grid item xs={3}>
								<NumberInput
									number="7"
									number1={number1}
									number2={number2}
									operation={operation}
									setNumber1={setNumber1}
									setNumber2={setNumber2}
								/>
							</Grid>
							<Grid item xs={3}>
								<NumberInput
									number="8"
									number1={number1}
									number2={number2}
									operation={operation}
									setNumber1={setNumber1}
									setNumber2={setNumber2}
								/>
							</Grid>
							<Grid item xs={3}>
								<NumberInput
									number="9"
									number1={number1}
									number2={number2}
									operation={operation}
									setNumber1={setNumber1}
									setNumber2={setNumber2}
								/>
							</Grid>
							<Grid item xs={3}>
								<OperationInput
									operation={'*'}
									setOperation={setOperation}
								/>
							</Grid>
							<Grid item xs={3}>
								<NumberInput
									number="4"
									number1={number1}
									number2={number2}
									operation={operation}
									setNumber1={setNumber1}
									setNumber2={setNumber2}
								/>
							</Grid>
							<Grid item xs={3}>
								<NumberInput
									number="5"
									number1={number1}
									number2={number2}
									operation={operation}
									setNumber1={setNumber1}
									setNumber2={setNumber2}
								/>
							</Grid>
							<Grid item xs={3}>
								<NumberInput
									number="6"
									number1={number1}
									number2={number2}
									operation={operation}
									setNumber1={setNumber1}
									setNumber2={setNumber2}
								/>
							</Grid>
							<Grid item xs={3}>
								<OperationInput
									operation={'-'}
									setOperation={setOperation}
								/>
							</Grid>
							<Grid item xs={3}>
								<NumberInput
									number="1"
									number1={number1}
									number2={number2}
									operation={operation}
									setNumber1={setNumber1}
									setNumber2={setNumber2}
								/>
							</Grid>
							<Grid item xs={3}>
								<NumberInput
									number="2"
									number1={number1}
									number2={number2}
									operation={operation}
									setNumber1={setNumber1}
									setNumber2={setNumber2}
								/>
							</Grid>
							<Grid item xs={3}>
								<NumberInput
									number="3"
									number1={number1}
									number2={number2}
									operation={operation}
									setNumber1={setNumber1}
									setNumber2={setNumber2}
								/>
							</Grid>
							<Grid item xs={3}>
								<OperationInput
									operation={'+'}
									setOperation={setOperation}
								/>
							</Grid>
							<Grid item xs={6}>
								<NumberInput
									number="0"
									number1={number1}
									number2={number2}
									operation={operation}
									setNumber1={setNumber1}
									setNumber2={setNumber2}
								/>
							</Grid>
							<Grid item xs={3}>
								<NumberInput
									number="."
									number1={number1}
									number2={number2}
									operation={operation}
									setNumber1={setNumber1}
									setNumber2={setNumber2}
								/>
							</Grid>
							<Grid item xs={3}>
								<Button
									className={classes.btn}
									variant="contained"
									color="primary"
									onClick={calculate}
								>
									<i class="fas fa-equals" />
								</Button>
							</Grid>
						</Grid>
					</CardActions>
				</Card>
			</Container>
		</div>
	);
}

export default App;
