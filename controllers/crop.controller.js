const db = require("../models");
const Crop = db.Crop;

exports.createCrop = async (req, res) => {
  const { available, growing, quantity } = req.body;

  try {
    const newCrop = await Crop.create({
      available,
      growing,
      quantity,
      usernameId: req.params.username,
    });
    return res.status(201).send(newCrop);
  } catch (err) {
    return res.status(500).send({
      message: `Error ${err.message}`,
    });
  }
};

exports.getCrops = async (req, res) => {
  const crops = await Crop.findAll({
    where: {
      usernameId: req.params.username,
    },
  });
  if (!crops) {
    return res.status(404).send({ message: "No crops for that user found" });
  }
  return res.send(crops);
};

exports.updateCrop = async (req, res) => {
  const { available, growing, quantity } = req.body;

  const updatedCrop = await Crop.update(
    {
      available,
      growing,
      quantity,
    },
    { where: { id: req.params.cropId } }
  );
  return res.send(updatedCrop);
};

exports.deleteCrop = async (req, res) => {
  await Crop.destroy({ where: { id: req.params.cropId } });
  return res.send({ message: `Crop with id ${req.params.cropId} deleted` });
};
