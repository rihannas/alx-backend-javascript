var student1 = {
    firstName: "Laalaa",
    lastName: "Teletubby",
    age: 7,
    location: "Teletubbies Land"
};
var student2 = {
    firstName: "Tinky-Winky",
    lastName: "Teletubby",
    age: 10,
    location: "Teletubbies Land"
};
var studentsList = [];
studentsList.push(student1);
studentsList.push(student2);
//const studentsList = [student1, student1];

var table = document.createElement('table');
var tbody = document.createElement('tbody');
table.appendChild(tbody);
studentsList.forEach(function (student) {
    var tr = document.createElement('tr');
    tbody.appendChild(tr);
    var td_firstName = document.createElement('td');
    var td_location = document.createElement('td');
    td_firstName.innerHTML = "".concat(student.firstName);
    td_location.innerHTML = "".concat(student.location);
    tr.appendChild(td_firstName);
    tr.appendChild(td_location);
});


