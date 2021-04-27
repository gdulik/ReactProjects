const styles = {
	sectionCenter: {
		width: '90vw',
		margin: '0 auto',
		maxWidth: '1170px',
		display: 'grid',
		gridGap: '3rem 2rem',
		gap: '3rem 2rem',
		justifyItems: 'center',
		'@media screen and (min-width: 1200px)': {
			width: '95vw',
			gridTemplateColumns: '1fr 1fr'
		}
	},
	menuItem: {
		display: 'grid',
		gridGap: '1rem 2rem',
		gap: '1rem 2rem',
		maxWidth: '25rem',
		'@media screen and (min-width: 768px)': {
			gridTemplateColumns: '225px 1fr',
			gridGap: '0 1.25rem',
			gap: '0 1.25rem',
			maxWidth: '40rem'
		}
	},
	photo: {
		objectFit: 'cover',
		height: '200px',
		width: '100%',
		border: '.25rem solid #c59d5f',
		borderRadius: '.25rem',
		display: 'block',
		'@media screen and (min-width: 768px)': {
			height: '175px'
		}
	},
	itemInfo: {
		'& header': {
			display: 'flex',
			justifyContent: 'space-between',
			borderBottom: '.5px dotted #617d98'
		},
		'& h4': {
			margin: {
				bottom: '.5rem'
			},
			textTransform: 'capitalize'
		}
	},
	price: {
		color: '#c59d5f'
	},
	itemText: {
		paddingTop: '16px',
		marginBottom: 0
	}
};

export default styles;
