const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:3000/bootcamp", { useMongoClient: true })

const Schema = mongoose.Schema;

const marketing_staffSchema = new Schema({
    staff_id: String,
    staff_name: String,
    phonenumber: Number
})

const marketing_staff = mongoose.model("marketing_staff", marketing_staffSchema)
module.exports = marketing_staff;