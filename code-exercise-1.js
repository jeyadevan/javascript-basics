// Copy object of one array to another array


let emp1 = [
  {
    firstname: "jake",
    lastname: "dave",
  },
  {
    firstname: "james",
    lastname: "rupert",
  },
];

let emp2 = [
  {
    age: 35,
    place: "theni",
  },
  {
    age: 45,
    place: "cbm",
  },
];

let getlastname = [];
for (let val of emp1) {
  getlastname.push({ lastname: val.lastname });
}

let completearr = [];
for (let val of emp2) {
  for (let item of getlastname) {
    completearr.push({
      age: val.age,
      place: val.place,
      lastname: item.lastname,
    });
  }
}

let newArray = [];
let uniqueObject = {};
for (let i in completearr) {
  objTitle = completearr[i]["age"];
  uniqueObject[objTitle] = completearr[i];
}
for (i in uniqueObject) {
  newArray.push(uniqueObject[i]);
}
console.log(newArray);
  