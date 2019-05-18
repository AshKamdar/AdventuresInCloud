exports.handler = (event, context, callback) => {
    console.log("Entering function myFullName");
    var result = "Hello from inside.";
    callback(null, result);
    console.log("Leaving function myFullName");
};
