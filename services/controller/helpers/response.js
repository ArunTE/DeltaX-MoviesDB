const SuccessResponse = (statusCode, data, res) => {
    const response = {
        success: true,
        data: data
    }
    res.status(statusCode).send(response);
}

const ErrorResponse = (error, res) => {
    const response = {
        success: false,
        data: error.message
    }
    res.status(error.status || 400).send(response);
}

module.exports = {
    SuccessResponse: SuccessResponse,
    ErrorResponse: ErrorResponse
}