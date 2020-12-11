/*<div id="root">
<div class="employee-card">
<div class="employee-image">
<div class="employee-image">
<!-- alternativ 2 -->
<!-- add background to employee-image div -->
</div>
<p id="emp-random">Employee Name</p>
<p>Company Name</p>
</div>*/
//function where employee card will be rendered*/
import{data} from './data.js';
export const renderEmployeeCard=(employee)=>{
    let employeeCard=document.createElement("div");
    employeeCard.innerHTML=
     `<div class="employee-image">
    <img src="${employee.imageUrl}" alt=""/></div>
<p id='emp${employee.id}'>${employee.firstName} ${employee.lastName}</p>
<p>${employee.company}</p>`;
employeeCard.className="employee-card";
return employeeCard;
}
   

