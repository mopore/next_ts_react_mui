import { Box, Link, Typography } from '@mui/material';

const JniFooter = () => {
	return (
		<Box sx={{ 
			bgcolor: 'secondary.main', 
			p: 1, 
			position: 'fixed', 
			bottom: 0, 
			width: '100%', 
			color: '#fff' 
		}}
		>
			<Typography variant="body1" align="center">
			Further details in the <Link href="https://github.com/mopore/next_ts_react_mui" color="inherit" target="_blank" rel="noopener">GitHub Repository</Link>
			</Typography>
		</Box>
	);
}

export default JniFooter;