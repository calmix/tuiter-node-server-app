import express from "express"
import cors from 'cors'
import HelloController from "./controllers/hello-controllers.js"
import UserController from "./controllers/users/users-controller.js"
import tuitsController from "./controllers/tuits/tuits-controller.js"
import mongoose from "mongoose";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/tuiter'
mongoose.connect(CONNECTION_STRING);
const app = express()
app.use(cors())
app.use(express.json());
HelloController(app)
UserController(app)
tuitsController(app)
app.listen(process.env.PORT || 4000);