const express = require("express");
const cors = require("cors");
const mainRouter = require("./routes");

const app = express();

// For enabling communication between Frontend and backend on localhost
app.use(cors());

// Body-Parser for handling JSON data
app.use(express.json());

app.use('/api/v1', mainRouter)

app.listen(3000, () => console.log('Running on port 3000'));


