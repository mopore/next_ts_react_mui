import { Box, Button, Container, Grid, InputLabel, MenuItem, OutlinedInput, Select, Stack, TextField, Typography } from "@mui/material";
import Link from "next/link";
import jniStyles from "@/styles/jni_styles";
import backend from "../services/backend";
import paths from "../shared/paths";
import ExampleForm from "../components/ExamleForm";


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
									<Link href={paths.home}> 
										<Button variant="outlined" color="primary">
											To Project Root
										</Button>
									</Link>
								</Grid>
							</Grid>
						</Box>
						<Box sx={{ mt: 5 }}/>
						<ExampleForm formAction={backend.parseFormAsync} />

						{/* Without a component: */}
						{/* <form action={formAction}>
							<TextField
								required
								id="person-form-name"
								label="Required"
								name="name"
								defaultValue="Name of the person"
								sx={{ width: '100%' }}
							/>
						</form> */}

					</Container>
				</Box>
			</main>	
		</>
	)
}

export default Page;