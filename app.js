const express = require("express");
const app = express();

app.use('/test',(req, res) => {
  res.send("Hello form the Backend server");
});

// app.use((req,res)=>{
//     res.send("This is the Second Message");
// })

app.listen(4000, () => {
  console.log("Hello Server is listen on Port 4000");
});
