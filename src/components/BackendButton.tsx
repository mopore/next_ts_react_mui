"use client";

import { Backdrop, Button, CircularProgress } from "@mui/material";
import jniStyles from "@/styles/jni_styles";
import React from "react";

type BackenButtonProps = {
	serverAction: () => Promise<void>
};

const BackendButton = ({ serverAction }: BackenButtonProps) => {
	const [showLoadingBackdrop, setShowLoadingBackdrop] = React.useState<boolean>(false);

	const handleClick = async (): Promise<void> => {
		console.log("Hello from the client");
		setShowLoadingBackdrop(true);
		await serverAction();
		setShowLoadingBackdrop(false);
	};

	return (
		<>
			<Button 
				id="server-button"
				variant="contained"
				onClick={() => handleClick()}
				sx={jniStyles.redBgHoverTransition}
			>Call Server
			</Button>
			<Backdrop sx={jniStyles.Backdrop} open={showLoadingBackdrop}>
				<CircularProgress color="inherit" />
			</Backdrop>
		</>
	);
}

export default BackendButton;