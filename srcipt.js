const employees = [
    {
        name: "Ali",
        role: "Manager",
        department: "HR",
        salary: 50000
    }, {
        name: "Muhammad",
        role: "Developer",
        department: "SAles",
        salary: 50000
    },
    {
        name: "Ahmed",
        role: "Manager",
        department: "HR",
        salary: 70000
    },
    {
        name: "Fatima",
        role: "Designer",
        department: "Marketing",
        salary: 60000
    }
];
const homebtn = document.getElementById('homeBtn');
const addbtn = document.getElementById('addBtn');
const showbtn = document.getElementById('showBtn');

const homesection = document.querySelector('.home-section');
const addsection = document.querySelector('.add-section');
const showsection = document.querySelector('.show-section');



const employeeForm = document.querySelector(".employee-form");
const employeeName = document.getElementById("employeename");
const employeeRole = document.getElementById("employeerole");
const employeeDepartment = document.getElementById("employeedepartment");
const employeeSalary = document.getElementById("employeesalary");

employeeForm.addEventListener("submit", function (event) {

    event.preventDefault();
    const name = employeeName.value;
    const role = employeeRole.value;
    const department = employeeDepartment.value;
    const salary = employeeSalary.value;
    const employee = {
        name,
        role,
        department,
        salary
    };
    employees.push(employee);
    alert("Employee added successfully!");
    console.log(employees);
    employeeForm.reset();
    hideAllSections();
    showsection.style.display = "block";
    displayEmployees(employees);
});
function hideAllSections() {
    homesection.style.display = "none";
    addsection.style.display = "none";
    showsection.style.display = "none";
    filterSection.style.display = "none";
    deleteSection.style.display = "none";
}

homebtn.addEventListener("click", function () {
    hideAllSections();
    homesection.style.display = "flex";
});

addbtn.addEventListener("click", function () {
    hideAllSections();
    addsection.style.display = "block";

});

showbtn.addEventListener("click", function () {
    hideAllSections();
    showsection.style.display = "block";
    displayEmployees(employees);
});

const employeeList = document.getElementById("employeeList");

function displayEmployees(employees) {
    employeeList.innerHTML = "";
    if (employees.length == 0) {
        employeeList.innerHTML = "<h3>No data Found</h3>"; return;
    }
    employees.forEach((employee, index) => {
        employeeList.innerHTML += `
        <div class="employee-card">
        <h4>Employee Card ${index + 1}</h4>
        <h3><strong>Name    :</strong> ${employee.name}</h3>
        <p><strong>Role:</strong> ${employee.role}</p>
        <p><strong>Department:</strong> ${employee.department}</p>
        <p><strong>Salary:</strong> ${employee.salary}</p>
    </div>
    `;
    });
}


const searchInput = document.querySelector(".search-box input");
const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", function () {
    const searchname = searchInput.value.trim().toLowerCase();
    const matchedEmployees = employees.filter(function (employee) {
        return employee.name.toLowerCase().includes(searchname);
    });
    hideAllSections();
    showsection.style.display = "block";
    displayEmployees(matchedEmployees);

});

const filterBtn = document.getElementById("filterBtn");
const filterSection = document.querySelector(".filter-section");
const filterDepartment = document.getElementById("filterDepartment");
const filterEmployeeBtn = document.getElementById("filterEmployeeBtn");
filterBtn.addEventListener('click', function () {
    hideAllSections();
    filterSection.style.display = "block";
});
filterEmployeeBtn.addEventListener("click", function () {
    const department = filterDepartment.value;
    const filteredEmployees = employees.filter(function (employee) {
        return employee.department === department;

    });
    hideAllSections();
    showsection.style.display = "block";
    displayEmployees(filteredEmployees);
});
const deleteBtn = document.getElementById("deleteBtn");
const deleteSection = document.querySelector(".delete-section");
const deleteEmployeeList = document.getElementById("deleteEmployeeList");

deleteBtn.addEventListener('click', function () {
    hideAllSections();
    deleteSection.style.display = "block";
    displayDeleteEmployees(employees);
});

function displayDeleteEmployees(employees) {
    deleteEmployeeList.innerHTML = "";
    if (employees.length == 0) {
        deleteEmployeeList.innerHTML = "<h3>No data Found</h3>"; return;
    }
   employees.forEach((employee,index)=>{

    deleteEmployeeList.innerHTML += `   
    <div class="delete-card">
        <h4>Employee Card ${index+1}</h4>
        <h3>${employee.name}</h3>
        <p><strong>Role:</strong> ${employee.role}</p>
        <p><strong>Department:</strong> ${employee.department}</p>
        <p><strong>Salary:</strong> Rs. ${employee.salary}</p>
        <button onclick="deleteEmployee(${index})">Delete</button>
    </div>

    `;

});
}
function deleteEmployee(index) {
    const deletedEmployee = employees[index];
    employees.splice(index, 1);
    alert(`${deletedEmployee.name} has been deleted successfully!`);
    displayDeleteEmployees(employees);

}