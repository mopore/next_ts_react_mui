import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
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
					<Box sx={{ mt: 5 }}/>
					<form action={backend.parseFormAsync}>
						<Grid container spacing={2} justifyContent="center">
							<Grid item>
								<Typography variant="h5" align="center" color="textPrimary" gutterBottom>
									Form Sample
								</Typography>     
							</Grid>	
							<Grid item>
								<TextField
									required
									id="person-form-name"
									label="Required"
									name="name"
									defaultValue="Name of the person"
								/>
							</Grid>
							<Grid item>
								<Button variant="contained" type="submit">Send to server</Button>
							</Grid>
							<Grid item>
								<Button variant="outlined" type="reset">Reset form</Button>
							</Grid>
						</Grid>
					</form>
				</Container>
			</Box>
		</main>	
		</>
	)
}