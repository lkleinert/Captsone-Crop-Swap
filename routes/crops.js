const express = require("express");
const Crop = require("../controllers/crop.controller");
const router = express.Router({ mergeParams: true });

router.get("/", Crop.getCrops);
router.post("/", Crop.createCrop);
router.patch("/:cropId", Crop.updateCrop);
router.delete("/:cropId", Crop.deleteCrop);

module.exports = router;
