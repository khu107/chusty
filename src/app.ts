import express, { Application } from "express";
import path from "path";

// 1 - ENTRANCE
const app: Application = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// 2 - SESSIONS

app.get("/", (req, res) => {
  res.status(200);
});

// 3 - VIEWS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// 4 - ROUTERS

export default app;
