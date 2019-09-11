var Student = /** @class */ (function () {
    function Student(vorName, middleInitial, familienName) {
        this.vorName = vorName;
        this.middleInitial = middleInitial;
        this.familienName = familienName;
        this.fullName = vorName + " " + middleInitial + " " + familienName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
document.body.textContent = greeter(user);
