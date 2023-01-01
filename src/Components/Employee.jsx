//Section2 2nd part
import React from "react";
function Employee() {
  class employee {
    setValues(id, name, dept, salary) {
      this.id = id;
      this.name = name;
      this.dept = dept;
      this.salary = salary;
    }
    getValues() {
      console.log("Employee id is", this.id);
      console.log("Employee name is", this.name);
      console.log("Employee dept is", this.dept);
      console.log("Employee salary is", this.salary);
    }
  }
  const object1 = new employee();
  object1.setValues(1212, "Bilal", "IT", 25000);
  object1.getValues();
  const object2 = new employee();
  object2.setValues(11111, "Hamza", "CS", 29000);
  object2.getValues();
  const object3 = new employee();
  object3.setValues(6778, "Ali", "SE", 22000);
  object3.getValues();
  return (
    <>
      <h1>Create a program that creates 3 Employee objects</h1>
    </>
  );
}

export default Employee;
