const Resolution = require("../models/resolutionModel");
const asyncHandler = require("express-async-handler");

// GET all resolutions
const get_resolutions = asyncHandler(async (req, res, next) => {
    const resolutions = await Resolution.find({})
        .sort({ createdAt: -1 })
        .exec();

    res.status(200).json(resolutions);
});

// POST new resolution
const create_resolution = asyncHandler(async (req, res, next) => {
    const { content } = req.body;

    const resolution = await Resolution.create({
        content,
    });

    res.status(200).json(resolution);
});

module.exports = {
    get_resolutions,
    create_resolution,
};
