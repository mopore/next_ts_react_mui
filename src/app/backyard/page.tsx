import { Box, Button, Container, Grid, InputLabel, MenuItem, OutlinedInput, Select, Stack, TextField, Typography } from "@mui/material";
import Link from "next/link";
import jniStyles from "@/styles/jni_styles";
import paths from "../../shared/paths";
import ExampleForm from "../../components/ExamleForm";
import backend from "@/services/backend";


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
									<Button href={paths.home} variant="outlined" color="primary">
										To Project Root
									</Button>
								</Grid>
							</Grid>
						</Box>
						<Box sx={{ mt: 5 }}/>
						<ExampleForm formAction={backend.parseFormAsync} />

						{/* Without an interactive client-side component (just server): */}
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