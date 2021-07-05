export default class ErrorNotAutorized extends Error {
	status: number;

	constructor (message: string) {
		super(message);
		this.status = 401;
		this.name = "ErrorNotAutorized";
	}

}