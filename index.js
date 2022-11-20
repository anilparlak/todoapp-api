import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"
import todoRoutes from "./routes/todo.routes.js";
const app = express();
app.use(cors());
dotenv.config();

app.use(express.json());

const connetDB = () => {
 
    mongoose.connect(
      process.env.MONGO_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err) => {
        if (!err) {
          console.log("Successfully Established Connection with MongoDB");
        } else {
          console.log(
            "Failed to Establish Connection with MongoDB with Error: " + err
          );
        }
      }
    );
  };

  app.use("/api/todo",todoRoutes);

app.listen(process.env.PORT || 5050, () => {
    connetDB();
    console.log("Server is running!")
});
