const error = function error(error, res) {
    let errorMessage;
     if (error.details[0].type === 'string.regex.base') {
        let error_id = error.details[0].message.split(" ");
        errorMessage = `Invalid ${error_id[0]} ${error.details[0].context.value}`
    }
    else {
        errorMessage = error.details[0].message
    }
    const response = {
        success: false,
        data: errorMessage
    }
    res.status(error.status || 400).send(response);
    return;
}

module.exports = error
