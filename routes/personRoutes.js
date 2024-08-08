const express=require('express');
const router=express.Router();
//person naam ka model export
const Person=require('./../models/Person');


//POST route to add a person
router.post('/',async (req,res)=>{
    // const data=req.body //assuming req body contains person data

    // //create new person document using mongoose model
    // const newPerson=new Person(data);

    // //save the new person to the database                      //yeh call back method is not used
    // newPerson.save((error,savedPerson)=>{
    //     if(error){
    //         console.log('Error saving person',error);
    //         res.status(500).json({error:'Internal server error'})
    //     }else{
    //         console.log('data saved sucessfully');
    //         res.status(200).json(savedPersonerson);
    //     }
    // })

    try{
        const data=req.body
        const newPerson=new Person(data);
        const response=await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
    
})

//get method to get the person
router.get('/',async (req,res)=>{
    try{
        const data= await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});

    }
})


//paramterised api calll persons ki
router.get('/:workType', async(req, res)=>{
    try{
        const workType=req.params.workType;//extract work type from url paramter
        if(workType=='chef' || workType=='manager' || workType=='waiter'){

            const response=await Person.find({work: workType});
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

router.put('/:id',async (req,res)=>{
    try{
        const personId=req.params.id; //extract id from url parameter
        const updatePersonData=req.body; //updated data for person

        const response=await Person.findByIdAndUpdate(personId,updatePersonData,{
            new: true, //return updated dodcument
            runValidators: true, //run mongoose validation
        })

        if(!response){
            return res.status(404).json({error:'Person not found'});
        }

        console.log('data updated');
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});

    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const personId=req.params.id;

        //assuming u have person model
        const response=await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error:'Person not found'});

        }
        console.log('data delete');
        res.status(200).json({message:'person deleted success'});
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})

module.exports=router;
