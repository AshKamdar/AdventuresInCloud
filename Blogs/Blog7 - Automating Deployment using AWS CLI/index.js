exports.handler = (event, context, callback) => {
    var result = "Your Full Name is " + event.firstName + " " + event.lastName;
    callback(null, result);
};
