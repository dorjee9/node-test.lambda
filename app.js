

exports.hello = async(event) => {
    const data =  event.body;
    const buff = new Buffer.from(data, 'base64');
    const reqString = buff.toString('ascii');
    const reqJson = JSON.parse(reqString);

    const response = {
        statusCode : 200,
        body: `Hello ${reqJson.name} from india`
    };

    return response;
}