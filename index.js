const express = require('express'); 
const mongoose = require('mongoose');
const cors = require('cors');

const peopleModel = require('./models/people');

const app = express();
app.use(cors(
    {
        origin:[""],
        methods:["POST","GET"],
        credentials:true
    }
))
app.use(express.json())

const connect = mongoose.connect(
"mongodb+srv://21955a1206:nikhil1528@project.cyg4qu7.mongodb.net/Demo?retryWrites=true&w=majority&appName=Project"
)
const PORT = 5000;

app.listen(PORT, () =>{
    console.log(`Server is running in ${PORT}`);
})

app.get("", (req,res) => {
    res.json("WELCOME BACK CHAMP");
})

app.get("/people",(req,res) => {
    peopleModel.find({})
    .then(ppl => res.json(ppl))
    .catch(err => res.json(err))
})