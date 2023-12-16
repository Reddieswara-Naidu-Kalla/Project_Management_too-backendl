


const con = require("./db_connect");

async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS project(
      PROJECT_ID INT NOT NULL,
      TITLE VARCHAR(100),
      DURATION VARCHAR(100),
      USER_ID INT NOT NULL,
      PRIMARY KEY (PROJECT_ID)
      
  )`;
  
  await con.query(sql);
}
createTable();

// Add Project
async function addProject(newProject) {
  let sql = `
    INSERT INTO project(PROJECT_ID, TITLE, DURATION, USER_ID)
    VALUES("${newProject.PROJECT_ID}", "${newProject.TITLE}", "${newProject.DURATION}", "${newProject.USER_ID}")
  `;

  await con.query(sql);
  return true;
}

// Update - CRUD
async function editProject(updatedProject) {
  let sql = `UPDATE project
    SET TITLE = "${updatedProject.TITLE}",
        DURATION = "${updatedProject.DURATION}",
        USER_ID = "${updatedProject.USER_ID}"
    WHERE PROJECT_ID = "${updatedProject.PROJECT_ID}"
  `;
  await con.query(sql);
}

// Delete Project
async function deleteProject(projectId) {
  let sql = `DELETE FROM project
    WHERE PROJECT_ID = "${projectId}"
  `;
  await con.query(sql);
}

// Useful functions
async function getProjectById(projectId) {
  let sql = `
    SELECT * FROM project 
    WHERE PROJECT_ID = "${projectId}" 
  `;
  return await con.query(sql);
}

async function getProjectsByUserId(userId) {
  let sql = `SELECT * FROM project WHERE USER_ID = "${userId}"`;

  return await con.query(sql);
}

module.exports = { addProject, deleteProject, editProject, getProjectById, getProjectsByUserId };
