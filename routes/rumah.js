
const express = require("express")
const rumah = require("../models/rumah")
const router = express.Router();

module.exports=function()
{
router.post("/", (req, res) => {
    
            if (error) return res.status(500).send(error);
            
            let newObj = new rumah({
                harga_rumah : req.body.harga_rumah,
                luas_tanah : req.body.luas_tanah,
                lokasi : req.body.lokasi,
                
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
    rumah.find({},(error,result)=>{
        if(error){
            res.status(500).json(error)
        }else{
            res.json(result)
        }
    })
})

router.get("/:id",(req,res)=>{
    rumah.findById(req.params.id,(error,result)=>{
        if(error){
            res.status(500).json(error)
        }else{
            res.json(result)
        }
    })
})
router.delete("/:id", (req, res) => {
    
        rumah.findByIdAndRemove(req.params.id, (error, result) => {
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
        harga_rumah: req.body.harga_rumah,
        luas_tanah: req.body.luas_tanah,
        status_rumah:req.body.status_rumah,
        lokasi: req.body.lokasi,
        
    });
    rumah.findByIdAndUpdate(req.body._id, (error, result) => {
        if (error) {
            res.status(500).json(error)
        } else {
            res.json(result)
        }
    })
})

return router;


}
