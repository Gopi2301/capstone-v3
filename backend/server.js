import express from "express";
import { chats } from "./data.js";
const app = express();
import cors from "cors";
import * as dotenv from 'dotenv'
import connectDB from "./config/db.js";
import userRouters from "./routes/userRoutes.js";



dotenv.config()



const PORT = 4000;

// api Middleware
app.use(cors());
app.use(express.json())
app.use("/api/user", userRouters)

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});


app.listen(PORT, () => {
  connectDB()
  console.log(`The server started in: ${PORT} ✨✨`)
});
