interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

let student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 0,
    location: 'Unknown'
};

let student2: Student = {
    firstName: 'Jack',
    lastName: 'Churchill',
    age: 45,
    location: 'Crazy'
};

let studentsList: Student[] = [student1, student2];

const body = document.querySelector('body');

const table = document.createElement('table');
body?.appendChild(table);

const firstRow = document.createElement('tr');
table?.appendChild(firstRow);

const head1 = document.createElement('th');
const head2 = document.createElement('th');
head1.textContent = 'First name';
head2.textContent = 'Location';
firstRow?.appendChild(head1);
firstRow?.appendChild(head2);

if (studentsList) {
    studentsList.forEach((line) => {
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');
        cell1.textContent = line.firstName;
        cell2.textContent = line.location;
        table?.appendChild(row);
        row?.appendChild(cell1);
        row?.appendChild(cell2);
    })
}