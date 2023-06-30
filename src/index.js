const express = require("express");
const path = require('path');
const cors = require("cors");

const app = express();
const recipesRouter = require('./routers/recipes');
const usersRouter = require('./routers/users');
const { handleError } = require('./utils/error');
const auth = require('./middleware/auth.js');

app.use(cors());

/*app.use((req, res, next) => {
    const { method, path } = req;
    console.log(req)
    console.log(
      `New request to: ${method} ${path} at ${new Date().toISOString()}`
    );
    next();
  });*/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(auth.initialize());

app.get("/", (req, res) => {
    res.redirect("/api/v1/recipes");
});

app.use('/api/v1/recipes', recipesRouter);
app.use("/api/v1/users", usersRouter);

app.use(handleError);

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Servidor de pé na portas ${port}`);
});







/*const publicDirectoryPath = path.join(__dirname, './public');
app.use(express.static(publicDirectoryPath));

// Route handler that sends a message to someone

app.get("/:id", (req, res) => {
    res.send(`teste variavel nome ${req.params.id}`);
});

app.get("/", (req, res) => {
    res.send("Hello Express Student!");
});

app.post("/", (req, res) => {
    console.log(req);
    res.send(`teste variavel ${req.variavel}`);
});*/