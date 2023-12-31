const express = require('express')
const app = express()

app.use(express.json());

const employeeRoutes = require('./server/routes/employeeRoutes')
const projectRoutes = require('./server/routes/projectRoutes')
const taskRoutes = require('./server/routes/taskRoutes')
//route to at least one other entity that is NOT user/customer/etc.

//CORS middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");  
  next();
});

app.use('/employee', employeeRoutes)
app.use('/project', projectRoutes)
app.use('/task', taskRoutes)
// app.use for routes above

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}!!!`))