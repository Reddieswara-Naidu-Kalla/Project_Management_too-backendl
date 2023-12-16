

const con = require("./db_connect");

async function createTable(){
  let sql = `CREATE TABLE IF NOT EXISTS employee(
   
      USER_ID INT NOT NULL,
      EMAIL VARCHAR(100) NOT NULL,
      PASSWORD VARCHAR(100)  NOT NULL,
      EMPLOYEE_ID VARCHAR(100),
      PRIMARY KEY (USER_ID)
  
  
    )`;
    await con.query(sql);
}
createTable();

async function login(employee) {
  let employeeResult = await getEmployee(employee.USER_ID);
  if (!employeeResult[0]) throw Error("Userid not found!!");
  if (employeeResult[0].PASSWORD != employee.PASSWORD) throw Error("Password Incorrect!!");

  return employeeResult[0];
}

// Register (Create) New Employee
async function register(employee) {
  let employeeResult = await getEmployee(employee.USER_ID);
  if (employeeResult.length > 0) throw Error("Userid already in use!!");

  let sql = `
    INSERT INTO employee(USER_ID, EMAIL,PASSWORD,  EMPLOYEE_ID)
    VALUES("${employee.USER_ID}","${employee.EMAIL}", "${employee.PASSWORD}", "${employee.EMPLOYEE_ID}")
  `;

  await con.query(sql);
  const newEmployee = await getEmployee(employee.USER_ID);
  return newEmployee[0];
}

// Update - CRUD
async function editEmployee(employee) {
  let updatedEmployee = await getEmployee(employee.USER_ID);
  if (updatedEmployee.length > 0) throw Error("userid not available!");

  let sql = `UPDATE employee
    SET PASSWORD = "${employee.PASSWORD}",
        EMAIL = "${employee.EMAIL}",
        EMPLOYEE_ID = "${employee.EMPLOYEE_ID}"
    WHERE USER_ID = "${employee.USER_ID}"
  `;
  await con.query(sql);
  updatedEmployee = await getEmployee(employee.USER_ID);
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