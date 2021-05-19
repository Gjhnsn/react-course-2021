let name = "Garrett";
const lastName = "Johnson";

// Arrow Functions

const getName = (name) => `Hello my name is ${name}!`;

// console.log(getName("Garrett"));

//CLASSES

class Employee {
  constructor(name, tenure, idNum) {
    (this.name = name), (this.tenure = tenure), (this.idNum = idNum);
  }

  get getName() {
    return `This employee name is ${this.name}`;
  }

  set newTenure(tenure) {
    this.tenure = tenure;
  }
}

const firstEmployee = new Employee("Garrett", 3, 310590);
console.log("TEST", firstEmployee.getName);
firstEmployee.newTenure = 12;
console.log("TEST2", firstEmployee);

class TruckDriver extends Employee {
  constructor(name, tenure, idNum, mileage) {
    super(name, tenure, idNum);
    this.mileage = mileage;
  }

  getInfo() {
    return `Hey truck driver, your name is ${this.name} and you have ${this.mileage} on your truck.`;
  }
}

const truckDriverOne = new TruckDriver("Nathan", 3, "159165", "230,000");
console.log(truckDriverOne);
console.log(truckDriverOne.getInfo());

const employee = {
  name: "Garrett",
  profession: {
    title: "Developer",
    tenure: 3,
  },
};

function getEmployeeName(lolemployee) {
  const { name } = employee;
  const { title, tenure } = employee.profession;
  return `${name} is a ${title} and has been so for ${tenure} years`;
}

console.log("employee: ", employee);
console.log(getEmployeeName(employee));

function magic() {
  const magicTrick = new Promise((resolve, reject) => {
    const name = "Garrett";
  });
}
