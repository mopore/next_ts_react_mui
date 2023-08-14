"use client";

import { Backdrop, Button, CircularProgress, Grid, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import jniStyles from "@/styles/jni_styles";
import React from "react";


const NUMBER_CATEGORIES: readonly number[] = Object.freeze([
	10, 
	20, 
	30
] as const);

type BackenButtonProps = {
	formAction: (formData: FormData) => Promise<void>
};

const ExampleForm = ({ formAction }: BackenButtonProps) => {
	const [showLoadingBackdrop, setShowLoadingBackdrop] = React.useState<boolean>(false);

	const handleClick = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
		event.preventDefault();  // Prevent default form submission

		console.log("Hello from the client");
		setShowLoadingBackdrop(true);

		const formData = new FormData(event.currentTarget);  // Grab form data

		try {
			await formAction(formData);
		} catch (error) {
			console.error("Error while submitting form: ", error);
		}

		setShowLoadingBackdrop(false);
	};

	return (
		<>
			<form onSubmit={handleClick}>
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
							defaultValue={""}
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

			<Backdrop sx={jniStyles.Backdrop} open={showLoadingBackdrop}>
				<CircularProgress color="inherit" />
			</Backdrop>
		</>
	);
}

export default ExampleForm;