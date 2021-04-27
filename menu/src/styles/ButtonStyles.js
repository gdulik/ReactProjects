const styles = {
	main: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		margin: {
			bottom: '4rem'
		}
	},
	btn: {
		fontSize: '1rem',
		padding: '.375rem .75rem',
		margin: '0 .5rem',
		background: 'transparent',
		border: 'transparent',
		outline: 'none',
		borderRadius: '.25rem',
		cursor: 'pointer',
		textTransform: 'capitalize',
		color: '#c59d5f',
		transition: 'all .3s ease-in-out',
		'&:hover': {
			background: '#c59d5f',
			color: '#fff'
		}
	}
};

export default styles;
