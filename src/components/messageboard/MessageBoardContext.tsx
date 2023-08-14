import React from "react";
import MessageBoardState from "./MessageBoardState";

export type MessageBoardContextType = {
	messageBoardState: MessageBoardState;
	setMessageBoardState: React.Dispatch<React.SetStateAction<MessageBoardState>>;
};

const MessageBoardContext = React.createContext<MessageBoardContextType | undefined>(undefined);

export function useMessageBoardContext(): MessageBoardContextType {
    const context = React.useContext(MessageBoardContext);
    if (!context) {
        throw new Error("useMessageBoardContext must be used within a MessageBoardProvider");
    }
    return context;
}

export default MessageBoardContext;