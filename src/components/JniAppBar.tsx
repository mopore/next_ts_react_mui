import { Typography, AppBar, Toolbar, Box } from '@mui/material';
import Star from '@mui/icons-material/Star';

const JniAppBar = () => {
	return (
		<>
			<AppBar position="relative" style={{ cursor: 'default'}}>
				<Toolbar>
					<Box 
						display="flex" 
						justifyContent="space-between" 
						alignItems="center"
						width="100%"
					>
						<Box display="flex">
							<Star style={{ paddingRight: '3px'}}/>
							<Typography variant="h6">
								Next.js 13 Template
							</Typography>
						</Box>
					</Box>
				</Toolbar>
			</AppBar>
		</>
	)
}

export default JniAppBar
