

const express = require("express")
const marketing_staff = require("../models/marketing_staff")

const router = express.Router();

module.exports = function () {
    router.post("/", (req, res) => {

        if (error) return res.status(500).send(error);

        let newObj = new marketing_staff({
            staff_name: req.body.staff_name,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,

        });

        newObj.save((error) => {
            if (error) {
                res.status(500).send(error);
            }
            else {
                res.json(newObj);
            }
        });

    });



    router.get("/", (req, res) => {
        marketing_staff.find({}, (error, result) => {
            if (error) {
                res.status(500).json(error)
            } else {
                res.json(result)
            }
        })
    })

    router.get("/:id", (req, res) => {
        marketing_staff.findById(req.params.id, (error, result) => {
            if (error) {
                res.status(500).json(error)
            } else {
                res.json(result)
            }
        })
    })
    router.delete("/:id", (req, res) => {

        marketing_staff.findByIdAndRemove(req.params.id, (error, result) => {
            if (error) {
                res.status(500).json(error);
            }
            else {
                res.json({ message: "Data deleted" })
            }
        });

    });
    router.put("/update", (req, res) => {
        let newObj = ({
            staff_name: req.body.staff_name,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,

        });
        marketing_staff.findByIdAndUpdate(req.body._id, (error, result) => {
            if (error) {
                res.status(500).json(error)
            } else {
                res.json(result)
            }
        })
    })

    return router;
}
