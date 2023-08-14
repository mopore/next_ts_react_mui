"use client";

import React, { useEffect } from 'react';
import { Alert, AlertTitle, Box, Collapse, IconButton } from '@mui/material';
import { useMessageBoardContext } from './MessageBoardContext';
import CloseIcon from '@mui/icons-material/Close';
import MessageBoardState from './MessageBoardState';

type MessageBoardProops = {
}

const MessageBoard: React.FC<MessageBoardProops> = ( {  }) => {
	const {messageBoardState, setMessageBoardState} = useMessageBoardContext();
	const [showState, setShowState] = React.useState<boolean>(messageBoardState.show);
	useEffect(() => {
		setShowState(messageBoardState.show);
	}, [messageBoardState.show]);

	return (
		<>
			<Box sx={{ width: '100%' }}>
				{showState && (
					<Alert 
						severity={messageBoardState.severity} 
						sx={{width: '100%'}}
						onClick={() => {  // <-- Add this onClick handler
							setShowState(false);
							setMessageBoardState((prev) => MessageBoardState.hide(prev));
						}}
						action={
							<IconButton
								aria-label="close"
								color="inherit"
								size="large"
								onClick={(e) => {
									e.stopPropagation();	
									setShowState(false);
									setMessageBoardState((prev) => MessageBoardState.hide(prev));
								}}
							>
							  <CloseIcon fontSize="inherit" />
							</IconButton>
						  }

					>
						<AlertTitle>{messageBoardState.title}</AlertTitle>
						{messageBoardState.message}
					</Alert>
				)}
			</Box>
		</>
	);
}

export default MessageBoard;