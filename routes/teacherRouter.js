const express = require("express")
const route = express.Router();
const teacherModel = require("../models/teacherModel")
const { sendResponse } = require("../helper/helper")


route.get("/", async (req, res) => {
    try {
        const result = await teacherModel.find()
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
route.get("/:id", (req, res) => { });
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
        let teacher = new teacherModel(obj);
        await teacher.save();
        if (!teacher) {
            res.send(sendResponse(false, null, "Internal Server Error")).status(400)
        } else {
            res.send(sendResponse(true, student, "Saved Successfully")).status(200)
        }
    }

});
route.put("/:id", (req, res) => { });
route.delete("/:id", (req, res) => { });

module.exports = route