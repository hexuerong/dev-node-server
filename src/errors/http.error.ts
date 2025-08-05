export class HttpError extends Error {
	constructor(
		public status: number,
		public message: string,
		public details?: any
	) {
		super(message);
		this.name = this.constructor.name;
		Error.captureStackTrace(this, this.constructor);
	}
}

export class NotFoundError extends HttpError {
	constructor(message = "Not Found", details?: any) {
		super(404, message, details);
	}
}

export class UnauthorizedError extends HttpError {
	constructor(message = "Unauthorized", details?: any) {
		super(401, message, details);
	}
}
