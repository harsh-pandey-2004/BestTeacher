const mongoose = require("mongoose");

// Define Substudio schema
const SubstudioSchema = new mongoose.Schema({
  Substudio_category: { type: String, required: true },
  TotalSubstudio: { type: Number, required: true },
  AgeCategory: { type: [Number], required: true },
  Description: { type: String, required: true },
  Subjects: { type: String, required: true },
  heading_logo: { type: String }, // Optional
  duration: { type: String, required: true },
  descrip_more: { type: String, required: true },
});

// Define Studio schema
const StudioSchema = new mongoose.Schema({
  studioName: { type: String, required: true },
  Substudio: [SubstudioSchema], // Array of Substudio
  studioimage: { type: String, required: true },
  studiodescription: { type: String, required: true },
});

// Create models
const Substudio = mongoose.model("Substudio", SubstudioSchema);
const StudioModel = mongoose.model("Studio", StudioSchema);

// Export models
module.exports = { StudioModel, Substudio }; 
