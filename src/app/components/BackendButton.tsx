"use client";

import { Button } from "@mui/material";
import jniStyles from "@/styles/jni_styles";

type BackenButtonProps = {
	serverAction: () => void
};

export function BackendButton({ serverAction }: BackenButtonProps) {
	
	const handleClick = () => {
		console.log("Hello from the client");
		serverAction();
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
		</>
	);
}