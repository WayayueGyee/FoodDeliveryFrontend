import HttpStatusCode from 'utils/HttpStatusCode'

export function ThrowError(message?: string, errorOptions?: ErrorOptions): never {
    throw new Error(message, errorOptions)
}

export class HttpError extends Error {
    statusCode: HttpStatusCode = 500

    constructor(message?: string, statusCode?: HttpStatusCode, options?: ErrorOptions) {
        super(message, options)
        this.statusCode = statusCode ?? this.statusCode
    }
}

export class UnauthorizedError extends HttpError {
    constructor(message?: string, options?: ErrorOptions) {
        super(message, HttpStatusCode.UNAUTHORIZED, options)
    }
}
