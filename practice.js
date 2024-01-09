// class Grades {
//     static getAverage(...grades) {
//       const arr = [];

//       grades = grades.flat();
//       grades.forEach((grade) => {
//         grade = Number(grade);

//         if (grade >= 0 && grade <= 100) {
//           arr.push(grade);
//         }
//       });

//       arr.sort((a, b) => a - b).shift();

//       return arr.reduce((a, b) => a + b) / arr.length;
//     }
//   }

class Learner {
  #grades;
  #name = {
    first: "",
    last: "",
  };
  #age;

  constructor(firstName, lastName, age) {
    this.#name.first = firstName;
    this.#name.last = lastName;
    this.#age = age;

    this.#grades = new Grades();
  }
  get name() {
    return this.#name.first + " " + this.#name.last;
  }
  get age() {
    return this.#age;
  }
  addGrades(...grades) {
    this.#grades.addGrades(grades);
  }
  get grades() {
    return this.#grades.grades;
  }
  get average() {
    return this.#grades.average;
  }
}

class Grades {
  #grades = [];

  constructor(initialGrades) {
    if (initialGrades) {
      this.addGrades(initialGrades);
    }
  }
  //to use
  static getAverage(...grades) {
    const arr = [];
    this.addToArray(arr, grades);
    return this.avgArray(arr);
  }
  static addToArray(arr, grades) {
    grades = grades.flat();
    grades.forEach((grade) => {
      grade = Number(grade);

      if (grade >= 0 && grade <= 100) {
        arr.push(grade);
      }
    });
  }
  static avgArray(gradeArray) {
    const arr = [...gradeArray];
    arr.sort((a, b) => a - b).shift();

    return arr.reduce((a, b) => a + b) / arr.length;
  }
  //must call this first before the following two
  addGrades(...grades) {
    Grades.addToArray(this.#grades, grades.flat());
  }
  get grades() {
    return this.#grades;
  }
  get average() {
    return Grades.avgArray(this.#grades);
  }
}

let result = Grades.getAverage([30, 40, 50]);
console.log(result);

let learner1 = new Learner("John", "Scully", 25);
console.log(learner1.addGrades(30, 40, 50));
console.log(learner1.grades);
console.log(learner1.average);
