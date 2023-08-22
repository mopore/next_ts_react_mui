"use client";

import { Backdrop, Button, CircularProgress } from "@mui/material";
import jniStyles from "@/styles/jni_styles";
import React from "react";
import { useMessageBoardContext } from "./messageboard/MessageBoardContext";
import MessageBoardState from "./messageboard/MessageBoardState";

type BackenButtonProps = {
	serverAction: () => Promise<void>
};

const BackendButton = ({ serverAction }: BackenButtonProps) => {
	const [showLoadingBackdrop, setShowLoadingBackdrop] = React.useState<boolean>(false);
	const {setMessageBoardState} = useMessageBoardContext();

	const handleClick = async (): Promise<void> => {
		console.log("Hello from the client");
		setShowLoadingBackdrop(true);
		try {
			await serverAction();
			setMessageBoardState(MessageBoardState.createInfo("Sever called."));
		} catch (error) {
			const errMessage = `Error calling server: ${error}`;
			console.error(errMessage);
			console.trace();
			setMessageBoardState(MessageBoardState.createError(errMessage));
		}
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
