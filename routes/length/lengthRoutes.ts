const express=require('express')
import { Request,Response} from 'express'
let router=express.Router()


router.get("/",(req:Request,res:Response)=>{
    res.sendFile('./public/pages/length.html',{root:"./"});
    let params=req.params.id;
    console.log(params)
})

module.exports=router