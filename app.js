

exports.hello = async(event) => {
    const response = {
        statusCode : 200,
        body: `Hello from india`
    };

    return response;
}