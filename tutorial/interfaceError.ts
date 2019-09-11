interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.vorName + " " + person.familienName;
}

let user = { vorName: "Jane", familienName: "User" };

document.body.textContent = greeter(user);