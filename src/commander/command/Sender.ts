export interface Sender {
	sendMessage(msg: any): Promise<void> | void;
}
