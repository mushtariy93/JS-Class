class Universitet {
  constructor(params) {
    this.name = params.name;
    this.departments = [];
  }
  addDepartments(departments) {
    this.departments.push(...departments);
  }

 removeDepartment(department) {
    const index = this.departments.indexOf(department);
    if (index > -1) {
      this.departments.splice(index, 1);
    };
};
 showingDepartments(){
    return  this.departments
 };

}

const myUniversitet = new Universitet({name:"Oxford"});
myUniversitet.addDepartments([
  "Computer Science",
  "Mathematics",
  "Physics",
  "Biology",
  "Chemistry",
]);   

console.log(myUniversitet);
console.log("**********************************************");
myUniversitet.removeDepartment("Mathematics");
myUniversitet.removeDepartment("Physics");
console.log("**********************************************");
console.log(myUniversitet.showingDepartments());



