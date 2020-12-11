import { data } from "./data.js";
import { renderEmployeeCard } from "./employeeDiv.js";

const rootDiv = document.getElementById("root");
data.then((employees) => {
  employees.forEach((employee) => {
    rootDiv.appendChild(renderEmployeeCard(employee));
  });
});

const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("nav-ul");
hamburger.addEventListener("click", () => {
  navUL.classList.toggle("show");
});
