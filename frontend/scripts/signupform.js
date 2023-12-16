
function submitForm(event) {
 
  event.preventDefault();
  console.log("event", event);

  let formData = {
  
    USER_ID: document.getElementById("user_id").value,
    EMPLOYEE_ID: document.getElementById("employee_id").value,
    EMAIL: document.getElementById("email").value,
    PASSWORD: document.getElementById("password").value,
  };



  console.log(formData);
  fetch("http://localhost:3000/employee/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      
      if (data?.USER_ID) {
        console.log("data",data)
       
        window.location.href = "./ProjectManagementTool.html";
      } else {
        
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      
    });
}

document.addEventListener("DOMContentLoaded", function () {
  const signupform = document.getElementById("signupform");
  signupform.addEventListener("submit", submitForm);
});
