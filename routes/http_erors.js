class HttpError extends Error {
  constructor(message, ...params) {
    super();
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, HttpError)
    }
    this.name = 'HttpError';
    this.message = message
  }
}

module.exports = HttpError;