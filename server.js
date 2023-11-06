const http = require("http")
const mongoose = require("mongoose")
const app = require("./app")


// Connect to DB
mongoose.connect("mongodb://127.0.0.1:27017/ToDoTasks").then(() => {
    console.log("Connected to DB")
}).catch((err) => {
    console.log(err)
})
 

let server = http.createServer(app)
let PORT = 5000
server.listen(PORT, (err) => {
    if (err) console.log(err)
    console.log("SERVER RUNNING AT PORT NO : " + PORT)
})