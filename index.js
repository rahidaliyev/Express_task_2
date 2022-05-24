const express=require("express");
const app=express();
app.listen(3000,function(req,res){
    console.log("our page on localhost:3000");
})

const products=[
{"id":1,"name":"sugar","price":20,"quantity":30 },
{"id":2,"name":"tea","price":23,"quantity":31 },
{"id":3,"name":"oil","price":25,"quantity":32 },
{"id":4,"name":"bread","price":26,"quantity":33 },
{"id":5,"name":"pen","price":21,"quantity":34 },
{"id":6,"name":"apple","price":23,"quantity":35 },
{"id":7,"name":"lemon","price":34,"quantity":36 },
{"id":8,"name":"macaroni","price":40,"quantity":37 },
{"id":9,"name":"tomato","price":2,"quantity":38 },
{"id":10,"name":"poison","price":12,"quantity":39 }
]

app.get("/",function(req,res){
    
    res.status(200).send(products)
    })
    
app.get("/list/:id",(req,res)=>{
    const id=parseInt(req.params.id)
    let myproduct=products.find((e)=>(e.id==id));
    if(myproduct){
        res.status(200).json(myproduct);
    }
    
    res.status(400).json("bele sohbet yoxdur!")
})