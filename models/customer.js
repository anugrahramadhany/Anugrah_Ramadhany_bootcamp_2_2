const mongoose = require("mongoose")


mongoose.connect("mongodb://localhost:3000/bootcamp", { useMongoClient: true })

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    customer_id:String,
    customer_name: String,
    address: String,
    phonenumber:Number,
})
// const Employee = mongoose.model("employee-dhany", employeeSchema);
const Customer = mongoose.model("customer",customerSchema)
module.exports = Customer;