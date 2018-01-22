const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:3000/bootcamp",{useMongoClient:true})

const schema = mongoose.Schema;

const rumah = new Schema({
    rumah_id: String,
    harga_rumah:String,
    status_rumah:String,
    lokasi:String
})

const rumah = mongoose.model("rumah",rumahSchema)
module.exports = rumah;