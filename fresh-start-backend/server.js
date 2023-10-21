require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const resolutionRoutes = require("./routes/resolutions");

const app = express();
app.use(cors());

const port = process.env.PORT;

// log requests
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// access json data
app.use(express.json());

// routes
app.use("/api/resolutions", resolutionRoutes);

// connect to DB
mongoose.set("strictQuery", false);
const mongodb = process.env.MONGO_URI;

main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(mongodb).then(() => {
        if (port) {
            app.listen(port, () => {
                console.log(`connected to DB & listening on port ${port}`);
            })
        }
    })
}
