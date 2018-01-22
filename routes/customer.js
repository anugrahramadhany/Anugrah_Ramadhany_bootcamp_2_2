

const express = require("express")
const Customer = require("../models/customer")

const router = express.Router();

module.exports=function(){
router.post("/", (req, res) => {
    
        
        
    
            if (error) return res.status(500).send(error);
            
            let newObj = new customer({
                customer_name : req.body.customer,
                address : req.body.address,
                phoneNumber : req.body.phoneNumber,
                
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
    Customer.find({},(error,result)=>{
        if(error){
            res.status(500).json(error)
        }else{
            res.json(result)
        }
    })
})

router.get("/:id",(req,res)=>{
    Customer.findById(req.params.id,(error,result)=>{
        if(error){
            res.status(500).json(error)
        }else{
            res.json(result)
        }
    })
})

router.put("/update", (req, res) => {
    let newObj = ({
        customer_name: req.body.customer_name,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        
    });
    Customer.findByIdAndUpdate(req.body._id, (error, result) => {
        if (error) {
            res.status(500).json(error)
        } else {
            res.json(result)
        }
    })
})

return router;

router.delete("/:id", (req, res) => {
    
        Customer.findByIdAndRemove(req.params.id, (error, result) => {
            if(error){
                res.status(500).json(error);
            }
            else{
                res.json({ message : "Data deleted" })
            }
        });
        
    });

}
   





    