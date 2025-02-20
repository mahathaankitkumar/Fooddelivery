// const mongoose=require('mongoose');
// const{Schema}=mongoose;
// const myschema=new Schema({
//     name:{
//         type:String,
//         required:true
//     },
//    email:{
//         type:String,
//         required:true
//     },
//    password:{
//         type:String,
//         required:true
//     },
//     location:{
//         type:String,
//         required:true
//     },
//     data:{
//         type:Date,
//        dafault:Date.now
//     },
// })
// module.exports=mongoose.model('users',myschema);
const mongoose = require('mongoose')

const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },

  });

  module.exports = mongoose.model('user',UserSchema)