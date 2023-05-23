const mongoose = require("mongoose")

const teacherSchema = new mongoose.Schema({
    Text: {
        type: String,
        required: true,
    },
});

const teacherModel = mongoose.model("teacher", teacherSchema);

Module.export = teacherModel;  