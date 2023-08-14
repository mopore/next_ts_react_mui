"use client";

import React, { useEffect } from 'react';
import RenderSwitch from '../RenderSwitch';
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
				<Collapse in={showState}>
					<Alert 
						severity={messageBoardState.severity} 
						sx={{width: '100%'}}
						action={
							<IconButton
								aria-label="close"
								color="inherit"
								size="small"
								onClick={() => {
									setMessageBoardState(MessageBoardState.createEmpty());
									setShowState(false);
								}}
							>
							  <CloseIcon fontSize="inherit" />
							</IconButton>
						  }

					>
						<AlertTitle>{messageBoardState.title}</AlertTitle>
						{messageBoardState.message}
					</Alert>
				</Collapse>
			</Box>
		</>
	);
}

export default MessageBoard;