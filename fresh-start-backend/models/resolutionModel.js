const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// resolution model
const resolutionSchema = new Schema(
    {
        content: { type: String, required: true}
    }
);

module.exports = mongoose.model("Resolution", resolutionSchema);