const mongoose = require("mongoose");
// keep in mind to keep the input-ouput parameters as Numbers
const TrainingSchema = new mongoose.Schema({
    input:[Number, Number, Number],
    output:[Number]
   
  });
  
  module.exports = Train = mongoose.model("trainingdatas", TrainingSchema);
  