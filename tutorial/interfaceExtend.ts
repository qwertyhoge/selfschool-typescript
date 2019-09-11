interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.middleName + ". " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User", middleName: "T"};

document.body.textContent = greeter(user);