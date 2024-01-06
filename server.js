const express = require("express");
const cors = require('cors');
const memberRoutes = require("./src/members/routes");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors())
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api/v1/members", memberRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
