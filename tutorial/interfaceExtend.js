function greeter(person) {
    return "Hello, " + person.firstName + " " + person.middleName + ". " + person.lastName;
}
var user = { firstName: "Jane", lastName: "User", middleName: "T" };
document.body.textContent = greeter(user);
