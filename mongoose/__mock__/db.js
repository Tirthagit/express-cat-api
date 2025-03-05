const mongoose = require("mongoose");

/**
 * @abstract Basic example of setting up mongoose from Mongoose official docs
 * @link https://mongoosejs.com/docs/index.html
 */
const main = async () => {
  await mongoose.connect(
    process.env.MONGO_URI || "mongodb://localhost:27017/catDB"
  );

  const kittySchema = new mongoose.Schema({
    name: { type: String, required: true },
  });

  kittySchema.methods.speak = function () {
    const greeitng = this.name
      ? `Meow name is ${this.name}`
      : "I don't have a name";
    console.log(greeitng);
  };

  const Kitten = mongoose.model("Kitten", kittySchema);

  const silence = new Kitten({ name: "Silence" });
  console.log(silence.name);

  const fluffy = new Kitten({ name: "Fluffy" });
  fluffy.speak();

  await fluffy.save();
  await silence.speak();

  const kittens = await Kitten.findOne({name: /^fluff/});
  console.log(kittens);

};

main().catch((err) => err && console.log("Error connecting to database", err));

module.exports = main;
