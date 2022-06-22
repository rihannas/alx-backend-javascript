interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Laalaa",
  lastName: "Teletubby",
  age: 7,
  location: "Teletubbies Land"
};

const student2: Student = {
  firstName: "Tinky-Winky",
  lastName: "Teletubby",
  age: 10,
  location: "Teletubbies Land"
};

const studentsList: Student[] = [];
studentsList.push(student1);
studentsList.push(student2);

//const studentsList = [student1, student1];
const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.appendChild(tbody);

studentsList.forEach(student => {
  const tr = document.createElement('tr');
  tbody.appendChild(tr);
  const td_firstName = document.createElement('td');
  const td_location = document.createElement('td');
  td_firstName.innerHTML = `${student.firstName}`;
  td_location.innerHTML = `${student.location}`;
  tr.appendChild(td_firstName);
  tr.appendChild(td_location);
});