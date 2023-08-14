import { Typography, AppBar, Toolbar, Box  } from '@mui/material';
import Link from 'next/link';
import Star from '@mui/icons-material/Star';
import paths from '../shared/paths';
import { Padding } from '@mui/icons-material';

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
						<Link href={paths.home} passHref style={{textDecorationLine: 'none',}}>
							<Box 
								display="flex"
								alignItems={'center'}
							>
								<Star fontSize='large' sx={{
									color: 'text.primary' 
									}}
								/>
								<Typography 
									sx={{
										typography: 'h5',
										paddingLeft: '0.5rem', 
										color: 'text.primary',
									}}
								>
									Next.js 13 Template
								</Typography>
							</Box>
						</Link>
					</Box>
				</Toolbar>
			</AppBar>
		</>
	)
}

export default JniAppBar
