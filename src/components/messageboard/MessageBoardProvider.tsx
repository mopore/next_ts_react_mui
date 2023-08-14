"use client";

import React from "react";
import MessageBoardContext from "./MessageBoardContext";
import MessageBoardState from "./MessageBoardState";

type Props = {
	children: React.ReactNode;
};

export const MessageBoardProvider: React.FC<Props> = ({ children }) => {
	const [messageBoardState, setMessageBoardState] = 
		React.useState<MessageBoardState>(MessageBoardState.createEmpty());

	return (
		<MessageBoardContext.Provider value={{ messageBoardState, setMessageBoardState }}>
			{children}
		</MessageBoardContext.Provider>
	);
};