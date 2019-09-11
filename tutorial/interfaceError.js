function greeter(person) {
    return "Hello, " + person.vorName + " " + person.familienName;
}
var user = { vorName: "Jane", familienName: "User" };
document.body.textContent = greeter(user);
