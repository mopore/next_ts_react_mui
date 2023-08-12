import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import backend from "../services/Backend";

export default function Page() {
	return(
		<>
			<main>
			<Box>
				<Container maxWidth="sm">
					<Typography variant="h2" align="center" color="textPrimary" gutterBottom>
						Welcome at the Backyard
					</Typography>     
					<Box>
						<Grid container spacing={2} justifyContent="center">
							<Grid item>
								<Link href="/"> 
									<Button variant="outlined" color="primary">
										Directly to the Root
									</Button>
								</Link>
							</Grid>
						</Grid>
					</Box>
					<form action={backend.parseFormAsync}>
						<input type="text" name="name" />
						<button type="submit">Send to server</button>
						<button type="reset">Reset</button>
					</form>
				</Container>
			</Box>
		</main>	
		</>
	)
}