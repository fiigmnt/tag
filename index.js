// ----------------------------------------------------------------------------------//
// QR AR TAG
// 001 (( v0.0.1 ))
// FIIG | March 17, 2021 | Updated: 06.07.22
// ----------------------------------------------------------------------------------//

// create an express app
const express = require("express")
const app = express()

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
  res.send("FIIGMNT")
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));