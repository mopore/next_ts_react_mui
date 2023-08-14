
const MessageTypes = {
	SUCCESS: 'success',
	INFO: 'info',
	WARNING: 'warning',
	ERROR: 'error',
} as const;

const NullTitle = '<NULL>';
const NullMessage = '<NULL>';


export default class MessageBoardState {
	private constructor(
		readonly title: string,
		readonly message: string,
		readonly show: boolean,
		readonly severity: typeof MessageTypes[keyof typeof MessageTypes] = MessageTypes.SUCCESS
	) {}
	
	static createEmpty(): MessageBoardState {
		return new MessageBoardState(NullTitle, NullMessage, false, MessageTypes.ERROR);
	}

	static createSuccess(message: string): MessageBoardState {
		return new MessageBoardState("Success", message, true, MessageTypes.SUCCESS);
	}

	static createInfo(message: string): MessageBoardState {
		return new MessageBoardState("Info", message, true, MessageTypes.INFO);
	}

	static createWarning(message: string): MessageBoardState {
		return new MessageBoardState("Warning", message, true, MessageTypes.WARNING);
	}	

	static createError(message: string): MessageBoardState {
		return new MessageBoardState("Error", message, true, MessageTypes.ERROR);
	}

	static hide(state: MessageBoardState): MessageBoardState {
		return new MessageBoardState(state.title, state.message, false, state.severity);
	}
}