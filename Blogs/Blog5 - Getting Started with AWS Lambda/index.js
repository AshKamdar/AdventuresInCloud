exports.handler = (event, context, callback) => {
    console.log("Entering function myFullName");
    console.log("firstName: " + event.firstName);
    console.log("lastName: " + event.lastName);
    var result = "Your Full Name is " + event.firstName + " " + event.lastName;
    callback(null, result);
    console.log("Leaving function myFullName");
};


