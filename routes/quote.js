// import express routing system
const express = require("express");
const router = express.Router();

// import controllers
const { quoteController } = require("../controllers");

/* ================================== QUOTES ROUTES ================================== */
// generate image with text
router.get("/", quoteController.getQuoteAndGenerateImage);

module.exports = router;
