const Kitten = require("../models/Kitten");
const asyncHandler = require("express-async-handler");

// Get all cats
const getCats = asyncHandler(async (request, response) => {
  try {
    const cats = await Kitten.find();
    return response.status(200).send(cats);
  } catch (error) {
    return response.status(500).send({ error: error.message });
  }
});

// Get cat by cat name
const getSingleCat = asyncHandler(async (request, response) => {
  try {
    const { cat } = request.params;
    const findCat = await Kitten.findOne({
      name: { $regex: `^${cat}$`, $options: "i" },
    });
    if (!findCat) {
      return response.status(404).send("Cat not found!");
    }
    return response.status(200).send(findCat);
  } catch (error) {
    console.log(error);
    return response
      .status(204)
      .send("Cat you are looking for does not exist in database");
  }
});

// Create a new cat in databse
const createCat = asyncHandler(async (request, response) => {
  try {
    const newCat = new Kitten(request.body);
    await newCat.save();
    return response.status(201).send("New cat created successfully!");
  } catch (error) {
    return response.status(400).send({ error: error.message });
  }
});

// Insert more than one cats into database. 
const insertCats = asyncHandler(async (request, response) => {
  try {
    const newCats = request.body;
    if (!Array.isArray(newCats) || newCats.length === 0) {
      return response.status(400).json({
        message: "Invalid input! Expected array of cats.",
      });
    }
    const insertedCats = await Kitten.insertMany(newCats);
    return response.status(201).json({
      message: "Cats inserted successfully!",
      data: insertedCats,
    });
  } catch (error) {
    return response.status(400).send({ error: error.message });
  }
});

// const updateCat = asyncHandler(async (request, response) => {
//   try {
//     const { fieldName, value } = request.body;
//     const updatedCat = await Kitten.findOneAndUpdate({ [fieldName]: value })
//     await updatedCat.save();
//   } catch (error) {

//   }
// });

const deleteCats = asyncHandler(async (request, response) => {
  try {
    await Kitten.deleteMany();
    return response.status(200).send("Database deleted");
  } catch (error) {
    return response.status(400).send("Could not delete data!");
  }
});

module.exports = { getCats, getSingleCat, createCat, insertCats, deleteCats };
