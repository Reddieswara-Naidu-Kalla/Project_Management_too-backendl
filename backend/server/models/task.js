const con = require("./db_connect");

async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS task(
      TASK_ID INT NOT NULL,
      TASK_NAME VARCHAR(100),
      EMPLOYEE_ID INT NOT NULL,
      EMPLOYEE_NAME VARCHAR(100),
      PROJECT_ID INT NOT NULL,
      PRIMARY KEY (TASK_ID)
      
  )`;
  await con.query(sql);
}
createTable();

// Add Task
async function addTask(newTask) {
  let sql = `
    INSERT INTO task(TASK_ID, TASK_NAME, EMPLOYEE_ID, EMPLOYEE_NAME, PROJECT_ID)
    VALUES("${newTask.TASK_ID}", "${newTask.TASK_NAME}", "${newTask.EMPLOYEE_ID}", "${newTask.EMPLOYEE_NAME}", "${newTask.PROJECT_ID}")
  `;

  await con.query(sql);
  return true;
}

// Update - CRUD
async function editTask(updatedTask) {
  let sql = `UPDATE task
    SET TASK_NAME = "${updatedTask.TASK_NAME}",
        EMPLOYEE_ID = "${updatedTask.EMPLOYEE_ID}",
        EMPLOYEE_NAME = "${updatedTask.EMPLOYEE_NAME}",
        PROJECT_ID = "${updatedTask.PROJECT_ID}"
    WHERE TASK_ID = "${updatedTask.TASK_ID}"
  `;
  await con.query(sql);
}

// Delete Task
async function deleteTask(taskId) {
  let sql = `DELETE FROM task
    WHERE TASK_ID = "${taskId}"
  `;
  await con.query(sql);
}

// Useful functions
async function getTaskById(taskId) {
  let sql = `
    SELECT * FROM task 
    WHERE TASK_ID = "${taskId}" 
  `;
  return await con.query(sql);
}

async function getTasksByProjectId(projectId) {
  let sql = `SELECT * FROM task WHERE PROJECT_ID = "${projectId}"`;

  return await con.query(sql);
}

module.exports = { addTask, deleteTask, editTask, getTaskById, getTasksByProjectId };
