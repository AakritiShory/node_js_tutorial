//string to object
// const jsonString ='{"name": "John", "age":30}';
// const jsonObject=JSON.parse(jsonString);
// console.log(jsonObject.name);



//object to string
// const ob={
//     name:"ak",
//     age:25
// };
// const json=JSON.stringify(ob);
// console.log(json);
// console.log(typeof json);

const express=require('express')
const app= express();

app.get('/',function(req,res){
    res.send('welcome')
})

app.get('/pizza',(req,res)=>{
    res.send("sure PARTYYY")
})

app.post('/person',(req,res)=>{
    res.send("data is saved")

})
app.listen(3000)