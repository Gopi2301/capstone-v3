import express from "express";
import { chats } from "./data.js";
const app = express();
import cors from "cors";
import * as dotenv from 'dotenv'
import connectDB from "./config/db.js";
import userRouters from "./routes/userRoutes.js";
import { errorHandler } from "./middleware/errormiddleware.js";
import { notFound } from "./middleware/errormiddleware.js";
import chatRoutes from "./routes/chatRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"

dotenv.config()



const PORT = 4000;

// api Middleware
app.use(cors());
app.use(express.json())

app.use("/api/user", userRouters)
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);
app.use(notFound);
app.use(errorHandler);

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});


app.listen(PORT, () => {
  connectDB()
  console.log(`The server started in: ${PORT} ✨✨`)
});
