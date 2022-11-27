const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Shijina:Shijina25@cluster0.bt2utkb.mongodb.net/Article?retryWrites=true&w=majority',{
useNewUrlParser:true,
useunifiedtopology:true
}).then(()=>{
    console.log("mongodb connected sucessfully")
}).catch((error)=>{
    console.log(error.msg)
})