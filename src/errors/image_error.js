module.exports = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack for debugging

    // Set a default status code and message
    let statusCode = 500;
    let message = 'Internal Server Error';

    // Customize error handling based on error types
    if (err.name === 'ValidationError') { // Mongoose validation error
        statusCode = 400;
        message = 'Validation error: ' + JSON.stringify(err.errors);
    } else if (err.name === 'CastError') { // Mongoose casting error
        statusCode = 400;
        message = 'Invalid data format';
    } else if (err.status) { // Error with a custom status code
        statusCode = err.status;
        message = err.message;
    }

    // Send an error response to the client
    res.status(statusCode).json({ message });
};
