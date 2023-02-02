//Make sure to require your model so you can connect to the DB
const VikingModel = require("./models/VikingModel");
//This line of code connects to the Database
require("./db");

//Iteration 2:
const Ragnar = {
  firstName: "Ragnar",
  familyName: "Lothbrook",
  weapon: "Hugs and kisses",
  strength: 500,
};
VikingModel.create(Ragnar)
  .then((viking) => {
    console.log("viking created", viking);
  })
  .catch((err) => {
    console.log("there was an error", err);
  });

const deleteViking = async () => {
  try {
    const deletedViking = await VikingModel.findOneAndDelete({
      firstName: "Ragnar",
    });
    console.log("viking deleted", deletedViking);
  } catch (err) {
    console.log(err);
  }
};
//deleteViking();

const updateViking = async () => {
  try {
    const updatedViking = await VikingModel.findOneAndUpdate(
      { firstName: "Ragnar" },
      { firstName: "Odin", strength: 1000 },
      { new: true }
    );
    console.log("Viking updated", updatedViking);
  } catch (err) {
    console.log(err);
  }
};
updateViking();
//Iteration 3:
