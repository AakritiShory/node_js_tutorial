const express=require('express');
const router=express.Router();

//menuitem naam ka model export
const MenuItem=require('./../models/MenuItem'); //2file peeche

//post method for menu items
router.post('/',async(req,res)=>{
    try{
        const data=req.body
        const newMenu=new MenuItem(data);
        const response=await newMenu.save();
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})

//get method for menu items
router.get('/',async(req,res)=>{
    try{
        const data=await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Eror'});
    }
})

//paramterised api calll menuitem ki
router.get('/:Taste', async(req, res)=>{
    try{
        const Taste=req.params.Taste;//extract taste from url paramter
        if(Taste=='sweet' || Taste=='spicy' || Taste=='sour'){

            const response=await MenuItem.find({taste: Taste});
            console.log('response fetched');
            res.status(200).json(response);

        }else{
            res.status(404).json({error:'Invalid work type'});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});

    }
})

module.exports=router;