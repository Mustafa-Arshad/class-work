const express = require("express")
const studentModel = require("../models/studentModel")

const { sendResponse } = require("../helper/helper")

const route = express.Router();

route.get("/", async (req, res) => {
    try {
        const result = await studentModel.find()
        if (!result) {
            res.send(sendResponse(false, null, "No Data Found")).status(404)
        } else {
            res.send(sendResponse(true, result)).status(200)
        }
    } catch (e) {
        console.log(e)
        res.send(sendResponse(false)).status(400)
    }
});
route.get("/:id", (req, res) => {
    res.send("Get Single Student Data")
});
route.post("/", async (req, res) => {
    let { firstName, lastName, contact, course } = req.body;
    let errArr = []

    if (!firstName) {
        errArr.push('Required:First Name')
    }
    if (!contact) {
        errArr.push('Required: Contact')
    }
    if (!course) {
        errArr.push('Required: Course')
    }
    if (errArr.length > 0) {
        res.send(sendResponse(false, errArr, null, "Required All Fields")).status(400);
        return;

    } else {
        let obj = { firstName, lastName, contact, course };
        let student = new studentModel(obj);
        await student.save();
        if (!student) {
            res.send(sendResponse(false, null, "Internal Server Error")).status(400)
        } else {
            res.send(sendResponse(true, student, "Saved Successfully")).status(200)
        }
    }

});
route.put("/:id", (req, res) => {
    res.send("Edit Student Data")
});
route.delete("/:id", () => {
    res.send("Delete Student Data")
});

module.exports = route;