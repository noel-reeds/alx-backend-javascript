interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  firstName: string;
  lastName: string;
}

function printTeacher(teacher: printTeacherFunction) {
  return teacher.firstName[0] + `. ${teacher.lastName}`;
}

interface cls {
  workOnHomework(): string;
  displayName(): string;
}

interface cs {
  firstName: string;
  lastName: string;
}

class StudentClass implements cls {
  firstName: string;
  lastName: string;

  constructor(parameters: cs) {
    this.firstName = parameters.firstName;
    this.lastName = parameters.lastName;
  }
  workOnHomework() {
    return "Currently working";
  }
  displayName() {
    return this.firstName;
  }
}
