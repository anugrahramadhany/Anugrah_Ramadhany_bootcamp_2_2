

const express = require("express")
const registrasi = require("../models/registrasi")

const router = express.Router();

module.exports=function(){
router.post("/", (req, res) => {
    
            if (error) return res.status(500).send(error);
            
            let newObj = new Employee({
                status : req.body.status,
                registrasion_date : new Date(),
                
                
            });
            
            newObj.save((error) => {
                if (error) {
                    res.status(500).send(error);
                }
                else{
                    res.json(newObj);
                }
            });
    
        });
    
    

router.get("/",(req,res)=>{
    registrasi.find({},(error,result)=>{
        if(error){
            res.status(500).json(error)
        }else{
            res.json(result)
        }
    })
})

router.get("/:id",(req,res)=>{
    registrasi.findById(req.params.id,(error,result)=>{
        if(error){
            res.status(500).json(error)
        }else{
            res.json(result)
        }
    })
})
router.delete("/:id", (req, res) => {
    
        registrasi.findByIdAndRemove(req.params.id, (error, result) => {
            if(error){
                res.status(500).json(error);
            }
            else{
                res.json({ message : "Data deleted" })
            }
        });
        
    });
router.put("/update", (req, res) => {
    let newObj = ({
       status:req.body.status,
        
    });
    registrasi.findByIdAndUpdate(req.body._id, (error, result) => {
        if (error) {
            res.status(500).json(error)
        } else {
            res.json(result)
        }
    })
})

return router;

}