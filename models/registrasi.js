const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:3000/bootcamp",{useMongoClient:true})

const schema = mongoose.Schema;

const registrasiSchema = new Schema({
    registrasi_id: String,
    status:String,
    registrasion_date:Date
})

const registrasi = mongoose.model("registrasi",registrasiSchema)
module.exports = registrasi;