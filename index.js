
const express = require("express");
const customerRoutes = require("./routes/customer")
const marketingStaffRoutes = require("./routes/marketing_staff")
const registrasiRoutes = require('./routes/registrasi')
const rumahRoutes = require('./routes/rumah')
const bodyParser = require("body-parser")




const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();

})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));






app.post("/data", (req, res) => {
    // res.send("berhasil")
    res.json(req.customer)
})



app.get("/", (req, res) => {
    res.send("ready !!")
})




app.use("/api/customer", customerRoutes())
app.use("/api/rumah", rumahRoutes())
app.use("/api/marketing_staff", marketingStaffRoutes())
app.use("/api/registrasi",registrasiRoutes())



app.listen(3000)