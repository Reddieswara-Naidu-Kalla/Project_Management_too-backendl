// const signin = [
//   { 
//     userid: "reddieswara@gmail.com",
//     employeeid:"12345",
//     email: "reddieswara@gmail.com",
//     password: "Abc@1234",
//   },
//   {
//     userid: "reddieswara@gmail.com",
//     employeeid:"1234",
//     email: "reddieswara@gmail.com",
//     password: "Abc@12340",
//   },
//   {
//     userid: "reddieswara@gmail.com",
//     employeeid:"1235",
//     email: "reddieswara@gmail.com",
//     password: "Abc@1234567"
//   },
// ];
// exports.getAllUsers = () => {
//   return signin;
// };

const con = require("./db_connect");

async function createTable(){
  let sql = `CREATE TABLE IF NOT EXISTS employee(
   
      USER_ID INT NOT NULL,
      EMAIL VARCHAR(100) NOT NULL,
      PASSWORD VARCHAR(100)  NOT NULL,
      EMPLOYEE_ID VARCHAR(100),
      PRIMARY KEY (TASK_ID)
  
  
    )`;
    await con.query(sql);
}
createTable();

async function login(employee) {
  let employeeResult = await getEmployee(employee.user_id);
  if (!employeeResult[0]) throw Error("Username not found!!");
  if (employeeResult[0].password != employee.password) throw Error("Password Incorrect!!");

  return employeeResult[0];
}

// Register (Create) New Employee
async function register(employee) {
  let employeeResult = await getEmployee(employee.user_id);
  if (employeeResult.length > 0) throw Error("Username already in use!!");

  let sql = `
    INSERT INTO employee(USER_ID, PASSWORD, EMAIL, EMPLOYEE_ID)
    VALUES("${employee.USER_ID}", "${employee.PASSWORD}", "${employee.EMAIL}", "${employee.EMPLOYEE_ID}")
  `;

  await con.query(sql);
  const newEmployee = await getEmployee(employee.user_id);
  return newEmployee[0];
}

// Update - CRUD
async function editEmployee(employee) {
  let updatedEmployee = await getEmployee(employee.user_id);
  if (updatedEmployee.length > 0) throw Error("user_id not available!");

  let sql = `UPDATE employee
    SET PASSWORD = "${employee.PASSWORD}",
        EMAIL = "${employee.EMAIL}",
        EMPLOYEE_ID = "${employee.EMPLOYEE_ID}"
    WHERE USER_ID = "${employee.USER_ID}"
  `;
  await con.query(sql);
  updatedEmployee = await getEmployee(employee.user_id);
  return updatedEmployee[0];
}

// Delete Employee
async function deleteEmployee(employee) {
  let sql = `DELETE FROM employee
    WHERE USER_ID = "${employee.USER_ID}"
  `;
  await con.query(sql);
}

// Useful functions
async function getEmployee(user_id) {
  let sql = `
    SELECT * FROM employee 
    WHERE USER_ID = "${user_id}" 
  `;
  return await con.query(sql);
}

module.exports = { login, register, editEmployee, deleteEmployee };