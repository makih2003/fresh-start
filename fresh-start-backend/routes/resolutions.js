const express = require("express");

// controller
const {
    get_resolutions,
    create_resolution,
} = require("../controllers/resolutionController");

const router = express.Router();

// GET all resolutions
router.get("/", get_resolutions);

// POST new resolution
router.post("/", create_resolution);

module.exports = router;
