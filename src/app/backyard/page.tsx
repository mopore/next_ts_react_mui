import { Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";

export default function Page() {
	return(
		<>
			<main>
			<div>
				<Container maxWidth="sm">
					<Typography variant="h2" align="center" color="textPrimary" gutterBottom>
						Welcome at the Backyard
					</Typography>     
					<div>
						<Grid container spacing={2} justifyContent="center">
							<Grid item>
								<Link href="/"> 
									<Button variant="outlined" color="primary">
										Back to the Root
									</Button>
								</Link>
							</Grid>
						</Grid>
					</div>
				</Container>
			</div>
		</main>	
		</>
	)
}