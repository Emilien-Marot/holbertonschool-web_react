//Exercise 1
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

//Exercise 2
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

//Exercise 3
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

let printTeacher: printTeacherFunction;
printTeacher = function (firstName: string, lastName: string): string {
  return(`${firstName[0]}. ${lastName}`);
}

//TODO Exercise 4
interface studentInterface {
  firstName: string;
  lastName: string;
}

interface studentConstructor {
  new (firstName: string, lastName: string): studentInterface;
}

class StudentClass implements studentInterface {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework = () => {
    return('Currently working');
  }
  displayName = () => {
    return(this.firstName);
  }
}

let student = new StudentClass('Emilien', 'Marot');
console.log(student);
