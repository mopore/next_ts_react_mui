import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import BackendButton from "./components/BackendButton";
import backend from "./services/backend";
import jniStyles from "@/styles/jni_styles";
import paths from "./shared/paths";


export default async function Home() {
	return (
	<>
		<header/>
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
								<Link href={paths.backyard}>
									<Button variant="outlined" color="primary">
										To backyard
									</Button>
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Container>
			</Box>
		</main>
	</>
	);
}
