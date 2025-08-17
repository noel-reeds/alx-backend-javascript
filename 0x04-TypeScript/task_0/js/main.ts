interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const s1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 27,
  location: "Papua",
};

const s2: Student = {
  firstName: "Joe",
  lastName: "Rogan",
  age: 57,
  location: "Texas",
};

const studentsList: Array<Student> = [ s1, s2 ];

const table = document.createElement('table');
document.body.appendChild(table);
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
const hr = document.createElement("tr");
const nameCols = document.createElement("th");
nameCols.innerText = "firstName";
const locationCols = document.createElement("th");
locationCols.innerText = "location";
hr.append(nameCols, locationCols);
table.appendChild(hr);

for (let m = 0; m < studentsList.length; m++) {
  // create a row for every student
  const row = document.createElement("tr");
  for (let r = 0; r < 2; r++) {
    const nameTd = document.createElement("td");
    const nameText = document.createTextNode(`${studentsList[r].firstName}`);
    const locationTd = document.createElement("td");
    const locationText = document.createTextNode(`${studentsList[r].location}`);
    nameTd.appendChild(nameText);
    locationTd.appendChild(locationText);
    row.append(nameTd, locationTd);
  }
  tbody.appendChild(row);
}

table.appendChild(tbody);
document.appendChild(table);
