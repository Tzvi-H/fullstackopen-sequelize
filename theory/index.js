const express = require("express");
const { connectToDatabase } = require("./util/db");
const { PORT } = require("./util/config.js");

const notesRouter = require("./controllers/notes");
const usersRouter = require("./controllers/users");
const loginRouter = require("./controllers/login");

const app = express();

app.use(express.json());

app.use("/api/notes", notesRouter);
app.use("/api/users", usersRouter);
app.use("/api/login", loginRouter);

const start = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

start();
