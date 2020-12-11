window.firstname="global execution context";
window.lastname="global last name";
const printName=()=>{
    console.log(this);
    console.log(this.firstname);
}
printName();

const employee={

    firstname: "some name",
    lastname: "SOME NAME",

 printLastname:()=>{
    let test = ()=>{
        console.log(this);
     console.log(this.lastname)
    };
    test();
    
 },   
};
employee.printLastname();