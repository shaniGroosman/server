import express from "express";
import courseRouter from "./Routers/Course.js";
import userRouter from "./Routers/User.js";
import { connectToDb } from "./config/Db.js";
import dotenv from "dotenv";
import fs from "fs/promises";

function PrintToLog(req, res, next) {
    try {
        fs.appendFile("./log.txt", `${new Date().toLocaleDateString()} ${req.method} ${req.url}\n`);
        next();
    } catch (err) {
        return res.status(400).json({ title: "error in printToLog", message: err.message });
    }
}

dotenv.config();
const app = express();
connectToDb();
app.use(PrintToLog);

app.use(express.json());

app.use("/api/course", courseRouter);
app.use("/api/user", userRouter);
let port=process.env.PORT;

app.listen(port,()=>{
    console.log("app is listening on port "+port)
})




// {    "name":"yidish",
//     "price":2560,
//     "author":{
//             "firstName":"mimi ",
//     "lastName":"lev",
//     "address":"bat yam"
// }

    
// }