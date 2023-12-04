const signin = [
  { 
    userid: "reddieswara@gmail.com",
    employeeid:"12345",
    email: "reddieswara@gmail.com",
    password: "Abc@1234",
  },
  {
    userid: "reddieswara@gmail.com",
    employeeid:"1234",
    email: "reddieswara@gmail.com",
    password: "Abc@12340",
  },
  {
    userid: "reddieswara@gmail.com",
    employeeid:"1235",
    email: "reddieswara@gmail.com",
    password: "Abc@1234567"
  },
];
exports.getAllUsers = () => {
  return signin;
};
