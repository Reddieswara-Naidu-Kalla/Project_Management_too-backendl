function submitForm(event) {
   
    event.preventDefault();

   
    let formData = {
        TASK_ID: document.getElementById("task_id").value,
        TASK_NAME: document.getElementById("task_name").value,
        EMPLOYEE_ID: document.getElementById("employee_id").value,
        EMPLOYEE_NAME: document.getElementById("employee_name").value,
        PROJECT_ID: document.getElementById("project_id").value,
       
    
    };

    console.log(formData);
    fetch("http://localhost:3000/task/addTask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        
          console.log("data",data)
       
      })
      .catch((error) => {
        console.error("Error:", error);
        
      });
}

document.addEventListener('DOMContentLoaded', function () {
    const signupform = document.getElementById('task');
    signupform.addEventListener('submit', submitForm);
});