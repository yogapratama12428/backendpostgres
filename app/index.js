import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ProductRoute from "../routes/ProductRoute.js";
dotenv.config();

const app = express();
const port = process.env.APP_PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(ProductRoute);

app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>")
})
// const hostname = "192.168.0.123";
app.listen(port, () => {
  console.log("Server up and runing....");
});
