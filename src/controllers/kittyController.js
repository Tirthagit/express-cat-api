const Kitten = require("../models/Kitten");
const asyncHandler = require("express-async-handler");

const getCats = asyncHandler(async (request, response) => {
  try {
    const cats = await Kitten.find();
    return response.status(200).send(cats);
  } catch (error) {
    return response.status(500).send({ error: error.message });
  }
});

const getSingleCat = asyncHandler(async (request, response) => {
    try {
        const { cat } = request.params;
        const findCat = await Kitten.findOne({ name: {$regex: `^${cat}$`, $options: "i"}});
        if (!findCat) {
            return response.status(404).send("Cat not found!")
        }
        return response.status(200).send(findCat);
    } catch (error) {
        console.log(error);
        return response.status(204).send("Cat you are looking for does not exist in database");
    }
});

const createCat = asyncHandler(async (request, response) => {
  try {
    const newCat = new Kitten(request.body);
    await newCat.save();
    return response.status(201).send("New cat created successfully!");
  } catch (error) {
    return response.status(400).send({ error: error.message });
  }
});

const deleteCats = asyncHandler(async (request, response) => {
  try {
    await Kitten.deleteMany();
    return response.status(200).send("Database deleted");
  } catch (error) {
    return response.status(400).send("Could not delete data!");
  }
});

module.exports = { getCats, getSingleCat, createCat, deleteCats };
