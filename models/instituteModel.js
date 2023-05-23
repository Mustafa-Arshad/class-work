const mongoose = require("mongoose")

const InstituteSchema = new mongoose.Schema({
    Text: {
        type: String,
        required: true,
    },
});

const InstituteModel = mongoose.model("institute", InstituteSchema)
module.exports = InstituteModel;