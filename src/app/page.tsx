import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import BackendButton from "../components/BackendButton";
import jniStyles from "@/styles/jni_styles";
import paths from "../shared/paths";
import backend from "@/services/backend";


export default async function Home() {
	return (
	<>
		<main>
			<Box>
				<Container maxWidth="sm">
					<Typography sx={jniStyles.pageTitle}>
						Project Root
					</Typography>     
					<Box>
						<Grid container spacing={2} justifyContent="center">
							<Grid item>
								<BackendButton serverAction={backend.helloActionAsync} />
							</Grid>
							<Grid item>
								<Button href={paths.backyard} variant="outlined">
									To backyard
								</Button>
							</Grid>
						</Grid>
					</Box>
				</Container>
			</Box>
		</main>
	</>
	);
}
