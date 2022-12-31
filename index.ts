const express = require("express");
const connect = require("./database/db")
const userRoute = require("./routes/user_routes")
const bodyParser = require("body-parser")
const contractRoute= require("./routes/contract_routes")
const cors = require("cors");
const app = express();
app.use(cors());
const PORT=process.env.PORT||8080;
app.use(express.json());
app.use(bodyParser.json());

// routes
app.use("/user",userRoute);
app.use("/contract",contractRoute);

// connecting to database and starting server
app.listen(PORT,async()=>{
    try {
         await connect();
         console.log("Listening the port number 8080");
    } catch (error) {
        console.log(error)
    }
})