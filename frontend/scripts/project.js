function submitForm(event) {
    
    event.preventDefault();


    let formData = {
        PROJECT_ID: document.getElementById("project_id").value,
        TITLE: document.getElementById("title").value,
        DURATION: document.getElementById("duration").value,
        USER_ID: document.getElementById("user_id").value,
    
    };

    console.log(formData);
    fetch("http://localhost:3000/project/addProject", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        
      })
      .catch((error) => {
        console.error("Error:", error);
        
      });
}

document.addEventListener('DOMContentLoaded', function () {
    const signupform = document.getElementById('project');
    signupform.addEventListener('submit', submitForm);
});