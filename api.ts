import {Response , Request} from "express";

let express = require("express");
let app=express();
let fs=require('fs');
let bodyParser=require('body-parser');
app.listen(3000);
app.use(bodyParser.json());

//FETCHING THE DATA
app.get("/fetchjsondata", function(req:Request , res:Response){
    let jsondata=fs.readFileSync('data.json');
    let data=JSON.parse(jsondata);
    res.send(data);
});

app.delete("/deleterow/:id", function(req:Request , res:Response)
{
    let jsondata=fs.readFileSync('data.json');
    let data=JSON.parse(jsondata);
    let id=req.params.id;
    let len=data.length;

    for(let i=0;i<len;i++)
    {
        if(id==data[i].id)
        {
            data.splice(i,1);
            break;
        }
    }

    fs.writeFile('data.json',JSON.stringify(data), (err:Error)=>{
        res.send(data);
    });
});


app.put("/updateempdata/:id", function(req:Request, res:Response)
{   
    let jsondata=fs.readFileSync('data.json');
    let data=JSON.parse(jsondata);
    let value=req.body;
    console.log(value);
    for(let i=0;i<data.length;i++)
    {
        if(data[i].id==req.params.id)
        {
            data[i]=value;
            break;
        }
    }
    fs.writeFile('data.json', JSON.stringify(data),(err:Error)=>{
            res.send(data);
    })
    
});

app.post("/addnewrow/:id",function(req:Request , res:Response)
{
    let jsondata=fs.readFileSync('data.json');
    let data=JSON.parse(jsondata);
    let value=req.body;
    data.push(value);
    fs.writeFile('data.json',JSON.stringify(data),(err:Error)=>{
        res.send(data);
    });
})
