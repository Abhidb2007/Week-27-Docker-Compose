import express from "express";
const app=express();
app.get("/",(req,res)=>{
    res.send({
        "message":"hello world"
    });
});
app.post("/",(req, res)=>{
    res.send({
        "message":"post end point"
    })
})
app.listen(3000);