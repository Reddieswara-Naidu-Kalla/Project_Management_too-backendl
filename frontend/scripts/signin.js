
function submitForm(event) {
    event.preventDefault();
    let formData = {
        USER_ID: document.getElementById("user_id").value,
        PASSWORD: document.getElementById("password").value,
    };
console.log(formData);
fetch("http://localhost:3000/employee/login", {
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

document.addEventListener('DOMContentLoaded', function () {
    const signupform = document.getElementById('signinform');
    signupform.addEventListener('submit', submitForm);
});
