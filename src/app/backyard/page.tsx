import { Box, Button, Container, Grid, InputLabel, MenuItem, OutlinedInput, Select, Stack, TextField, Typography } from "@mui/material";
import Link from "next/link";
import jniStyles from "@/styles/jni_styles";
import backend from "../services/Backend";

const NUMBER_CATEGORIES: readonly number[] = Object.freeze([
	10, 
	20, 
	30
] as const);


const Page = () => {
	return(
		<>
			<main>
				<Box>
					<Container maxWidth="sm">
						<Typography sx={jniStyles.pageTitle}>
							Backyard
						</Typography>     
						<Box justifyContent="center">
							<Grid 
								container 
								spacing={2} 
								justifyContent="center"
							>
								<Grid item>
									<Link href="/"> 
										<Button variant="outlined" color="primary">
											To Project Root
										</Button>
									</Link>
								</Grid>
							</Grid>
						</Box>
						<Box sx={{ mt: 5 }}/>
						<form action={backend.parseFormAsync}>
							<Grid 
								container 
								spacing={2} 
								justifyContent="center"
							>
								<Grid item xs={12}>
									<Typography 
										variant="h5" 
										align="center" 
										color="textPrimary" 
										gutterBottom
									>
										Form Sample
									</Typography>     
								</Grid>	
								<Grid item xs={12} md={6}>
									<TextField
										required
										id="person-form-name"
										label="Required"
										name="name"
										defaultValue="Name of the person"
										sx={{ width: '100%' }}
									/>
								</Grid>
								<Grid item xs={12} md={6}>
									<Select
										id="person-form-number"
										name="number_category"
										sx={{ width: '100%' }}	
									>
										<MenuItem value="">
											<em>None</em>
										</MenuItem>
										{NUMBER_CATEGORIES.map((number) => (
											<MenuItem key={number} value={number}>
												{number}
											</MenuItem>
										))}
									</Select>
								</Grid>
								<Grid item xs={12} md={6}>
									<Stack spacing={2} direction="row">
										<Button 
											variant="contained" 
											type="submit"
										>
											Send to server
										</Button>
										<Button 
											variant="outlined" 
											type="reset"
										>
											Reset form
										</Button>
									</Stack>
								</Grid>
							</Grid>
						</form>
					</Container>
				</Box>
			</main>	
		</>
	)
}

export default Page;