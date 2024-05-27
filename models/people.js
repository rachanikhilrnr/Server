const mongoose = require('mongoose'); 

const peopleSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    }
})

const peopleModel = mongoose.model('people', peopleSchema);

module.exports = peopleModel;