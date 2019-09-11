class Student {
    fullName: string;
    constructor(public vorName: string, public middleInitial: string, public familienName: string) {
        this.fullName = vorName + " " + middleInitial + " " + familienName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person){
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.textContent = greeter(user);