
window.firstname="global execution context";
const printName=()=>{
    console.log(this);
    console.log(this.firstname);
}
printName();

const employee={

    firstname: "some name",
    lastname: "SOME NAME",
    printName:printName,
    
}
employee.printName();